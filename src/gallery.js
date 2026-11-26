import * as T from 'three'

const turn = Math.PI * 2

function roundedOutline(path, width, height, radius) {
  const x = width / 2, y = height / 2
  path.moveTo(-x + radius, -y)
  path.lineTo(x - radius, -y)
  path.quadraticCurveTo(x, -y, x, -y + radius)
  path.lineTo(x, y - radius)
  path.quadraticCurveTo(x, y, x - radius, y)
  path.lineTo(-x + radius, y)
  path.quadraticCurveTo(-x, y, -x, y - radius)
  path.lineTo(-x, -y + radius)
  path.quadraticCurveTo(-x, -y, -x + radius, -y)
  return path
}

function metalRing(width, height, opening, depth, bevel, z) {
  const shape = roundedOutline(new T.Shape(), width, height, .044)
  shape.holes.push(roundedOutline(new T.Path(), opening, opening, .024))
  const ring = new T.ExtrudeGeometry(shape, {
    depth, bevelEnabled: true, bevelSegments: 2,
    bevelSize: bevel, bevelThickness: bevel, curveSegments: 4,
  })
  ring.translate(0, 0, z)
  return ring
}

// 专供相框使用的反射环境：暖主光 + 冷补光 + 细长灯条，金属边缘才会有锐利高光
function frameEnvironment(renderer) {
  const pmrem = new T.PMREMGenerator(renderer)
  const studio = new T.Scene()
  studio.background = new T.Color('#0a111c')
  const panel = (width, height, position, color, power) => {
    const mesh = new T.Mesh(
      new T.PlaneGeometry(width, height),
      new T.MeshBasicMaterial({ color: new T.Color(color).multiplyScalar(power), side: T.DoubleSide })
    )
    mesh.position.set(...position)
    mesh.lookAt(0, 0, 0)
    studio.add(mesh)
  }
  panel(7.2, 3.4, [-4.6, 2.7, 5.4], '#fff2d8', 5.4)
  panel(4.4, 5.6, [5.1, .9, 4.4], '#cfe2ff', 2.1)
  panel(.62, 7.4, [-1.1, 3.4, -4.9], '#ffffff', 9)
  panel(.34, 6.2, [3.6, -1.4, -3.8], '#ffe4b4', 6.5)
  panel(6.4, 1.1, [0, -3.9, 2.7], '#ffd6a1', 2.8)
  const texture = pmrem.fromScene(studio, .015).texture
  studio.traverse(object => {
    object.geometry?.dispose()
    object.material?.dispose()
  })
  pmrem.dispose()
  return texture
}

// 细密横向拉丝，让平面反射带一点真实金属的粗糙感
function brushedMetal() {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = 512
  const context = canvas.getContext('2d')
  context.fillStyle = '#8f8f8f'
  context.fillRect(0, 0, 512, 512)
  for (let i = 0; i < 12000; i++) {
    const value = 95 + Math.floor(Math.random() * 110)
    context.fillStyle = `rgba(${value},${value},${value},.22)`
    context.fillRect(0, Math.random() * 512, 512, 1)
  }
  const texture = new T.CanvasTexture(canvas)
  texture.wrapS = texture.wrapT = T.RepeatWrapping
  texture.repeat.set(2, 2)
  return texture
}

function metalFrame(envMap, brushed) {
  const rail = metalRing(1.34, 1.34, 1.182, .102, .025, -.052)
  const lip = metalRing(1.208, 1.208, 1.154, .020, .008, .054)
  const plate = new T.BoxGeometry(1.196, 1.196, .087)
  const artPlane = new T.PlaneGeometry(1.159, 1.159)
  const gold = new T.MeshPhysicalMaterial({
    color: '#e7bd82', metalness: 1, roughness: .33, roughnessMap: brushed,
    envMap, envMapIntensity: 3.1, clearcoat: .65, clearcoatRoughness: .07,
  })
  const polished = new T.MeshPhysicalMaterial({
    color: '#fff0c8', metalness: 1, roughness: .055, envMap, envMapIntensity: 4,
  })
  const backing = new T.MeshStandardMaterial({
    color: '#292e34', metalness: .92, roughness: .3, envMap, envMapIntensity: 1.7,
  })
  const sealPoints = []
  for(let arm = 0; arm < 6; arm++) {
    const angle = arm * turn / 6 + Math.PI / 2
    const x = Math.cos(angle), y = Math.sin(angle)
    sealPoints.push(0, 0, -.046, x * .135, y * .135, -.046)
    sealPoints.push(x * .086, y * .086, -.046, x * .114 - y * .036, y * .114 + x * .036, -.046)
    sealPoints.push(x * .086, y * .086, -.046, x * .114 + y * .036, y * .114 - x * .036, -.046)
  }
  const seal = new T.BufferGeometry()
  seal.setAttribute('position', new T.Float32BufferAttribute(sealPoints, 3))
  const engraving = new T.LineBasicMaterial({ color: '#ad9471', transparent: true, opacity: .75 })

  return {
    make() {
      const pivot = new T.Group()
      const box = new T.Mesh(plate, backing)
      const art = new T.Mesh(artPlane, new T.MeshBasicMaterial({ color: '#b5ac95', toneMapped: false, fog: false }))
      art.position.z = .053
      pivot.add(new T.Mesh(rail, gold), new T.Mesh(lip, polished), box, new T.LineSegments(seal, engraving), art)
      return { pivot, box, art }
    },
    dispose() {
      for (const resource of [rail, lip, plate, artPlane, seal, gold, polished, backing, engraving, brushed, envMap])resource.dispose()
    },
  }
}

export function makeGallery(reduce, renderer) {
  const root = new T.Group()
  const cards = new Map()
  const ray = new T.Raycaster()
  const pointer = new T.Vector2(), anchor = new T.Vector2()
  const desired = new T.Vector3(), preview = new T.Vector3()
  const facing = new T.Quaternion(), desiredRotation = new T.Quaternion(), pitch = new T.Quaternion()
  const up = new T.Vector3(0, 1, 0)
  const envMap = frameEnvironment(renderer)
  const maxAnisotropy = renderer.capabilities.getMaxAnisotropy()
  const frameModel = metalFrame(envMap, brushedMetal())
  const loader = new T.TextureLoader()
  const results = []
  let hitTargets = [], hovered = null, grabbed = null, tapped = null, selected = null
  let lastHitAt = 0
  let holdClock = 0
  let nextPosition = 0
  let lastHandPinch = false
  let lastPinchRelease = -1
  let lastRandomPick = null
  let handPreview = false

  function update(items) {
    const current = new Set(items.map(item => item.id))
    for (const [id, card] of cards) {
      if (current.has(id)) continue
      root.remove(card.group)
      card.art.material.map?.dispose()
      card.art.material.dispose()
      cards.delete(id)
    }
    for (const item of items) {
      if (cards.has(item.id)) continue
      const index = nextPosition++
      const angle = index * 2.399963 + .53
      const radius = 8 + Math.floor(index / 8) % 3 * .47
      const home = new T.Vector3(Math.sin(angle) * radius, -3.67 + (index * 7 % 9) * .60, Math.cos(angle) * radius)
      const group = new T.Group()
      group.position.copy(home)
      group.scale.setScalar(.87)
      const frame = frameModel.make()
      frame.box.userData.id = item.id
      group.add(frame.pivot)
      root.add(group)
      const card = {...frame, group, home, index, angle, id: item.id, flipTime: 1}
      cards.set(item.id, card)
      loader.load(item.url, texture => {
        if (cards.get(item.id) !== card) {
          texture.dispose()
          return
        }
        texture.colorSpace = T.SRGBColorSpace
        texture.anisotropy = maxAnisotropy
        const ratio = texture.image.width / texture.image.height
        if (ratio > 1) {
          texture.repeat.x = 1 / ratio
          texture.offset.x = (1 - texture.repeat.x) / 2
        } else if (ratio > 0) {
          texture.repeat.y = ratio
          texture.offset.y = (1 - ratio) / 2
        }
        card.art.material.color.set('#ffffff')
        card.art.material.map = texture
        card.art.material.needsUpdate = true
      }, undefined, () => {})
    }
    hitTargets = [...cards.values()].map(card => card.box)
    if (!cards.has(tapped)) tapped = null
    if (!cards.has(hovered)) hovered = null
    if (!cards.has(grabbed)) grabbed = null
    if (!cards.has(selected)) selected = null
  }

  function hitTest(camera, x, y) {
    root.updateWorldMatrix(true, true)
    ray.setFromCamera(pointer.set(x, y), camera)
    results.length = 0
    ray.intersectObjects(hitTargets, false, results)
    return results[0]?.object.userData.id ?? null
  }

  function tap(camera, x, y) {
    const hit = hitTest(camera, x, y)
    tapped = hit && hit !== tapped ? hit : null
    return Boolean(hit)
  }

  // 鼠标点一下只切换一次，不跟随鼠标；点空白处关闭
  function click(camera, x, y) {
    const hit = hitTest(camera, x, y)
    tapped = hit
    return Boolean(hit)
  }

  function frame(camera, input, time, dt, orbitAngle) {
    holdClock += dt
    const handMode = Boolean(input.hand)
    if (grabbed && !input.pinch) grabbed = null

    // 手势模式也参与悬停：食指光标停在哪张照片上，捏合就打开哪张
    const target = !grabbed && input.active ? hitTest(camera, input.x, input.y) : null
    const canHover = input.active && !grabbed
    const hit = canHover ? target : null
    if (!canHover) {
      hovered = null
    } else if (hit) {
      if (hit !== hovered) {
        hovered = hit
        anchor.copy(pointer)
      }
      lastHitAt = holdClock
    } else if (hovered) {
      const nearAnchor = anchor.distanceTo(pointer) < .2
      if (!nearAnchor || holdClock - lastHitAt > .18) hovered = null
    }

    const pinchEdge = handMode && input.pinch && !lastHandPinch
    const pinchReleased = (!handMode || !input.pinch) && lastHandPinch
    lastHandPinch = handMode && input.pinch
    // 张开手掌 + 捏合：随机打开一张照片（不再跟随悬停的照片）
    if (pinchEdge && !handPreview && holdClock - lastPinchRelease > .8 && cards.size > 0) {
      const ids = [...cards.keys()]
      let pick = ids[Math.floor(Math.random() * ids.length)]
      if (ids.length > 1 && pick === lastRandomPick) {
        pick = ids[(ids.indexOf(pick) + 1) % ids.length]
      }
      lastRandomPick = pick
      tapped = pick
      handPreview = true
    }
    if (handPreview && (pinchReleased || !handMode)) {
      // 松开捏合后照片回到原位，再留 0.8 秒冷却
      tapped = null
      handPreview = false
      lastPinchRelease = holdClock
    }
    if (!handMode && input.pinch && hovered && !grabbed) {
      grabbed = hovered
    }

    // 鼠标点击选中后才预览，悬停不再抢走当前照片
    const selection = tapped || grabbed
    if (selection && selection !== selected && !reduce) cards.get(selection).flipTime = 0
    selected = selection

    root.getWorldQuaternion(facing).invert().multiply(camera.quaternion)
    if (selected) {
      preview.set(.10, -.14, -5.4).applyQuaternion(camera.quaternion).add(camera.position)
      root.worldToLocal(preview)
    }

    const movement = 1 - Math.exp(-dt * 5.6)
    const alignment = 1 - Math.exp(-dt * 9)
    for (const card of cards.values()) {
      const active = card.id === selected
      const handHover = handMode && card.id === hovered
      desired.copy(card.home)
      if (!reduce) desired.y += Math.sin(time * .92 + card.index * 1.3) * .16
      if (active) desired.copy(preview)
      const tilt = active ? 0 : Math.sin(orbitAngle + card.angle) * .36
      desiredRotation.copy(facing).multiply(pitch.setFromAxisAngle(up, tilt))
      card.group.position.lerp(desired, movement)
      card.group.quaternion.slerp(desiredRotation, alignment)
      card.group.scale.setScalar(T.MathUtils.damp(card.group.scale.x, active ? 1.3 : handHover ? .97 : .87, 5.6, dt))

      if (card.flipTime < 1) {
        card.flipTime = Math.min(1, card.flipTime + dt / .76)
        const eased = T.MathUtils.smoothstep(card.flipTime, 0, 1)
        card.pivot.rotation.y = eased < 1 ? eased * turn : 0
      }
    }
    return Boolean(selected)
  }

  return {
    root, update, frame, tap, click,
    dispose() {
      update([])
      frameModel.dispose()
    },
  }
}
