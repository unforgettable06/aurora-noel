import * as T from 'three'

const TAU = Math.PI * 2
const SEG = 12

function makeTexture(stops) {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = 64
  const ctx = canvas.getContext('2d')
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
  for (const [stop, color] of stops) gradient.addColorStop(stop, color)
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 64, 64)
  const texture = new T.CanvasTexture(canvas)
  texture.colorSpace = T.SRGBColorSpace
  return texture
}

const HALO_TEXTURE = makeTexture([
  [0, 'rgba(255,255,255,1)'],
  [.18, 'rgba(255,255,255,.55)'],
  [.5, 'rgba(255,255,255,.14)'],
  [1, 'rgba(255,255,255,0)'],
])
const CORE_TEXTURE = makeTexture([
  [0, 'rgba(255,255,255,1)'],
  [.22, 'rgba(255,255,255,.85)'],
  [.55, 'rgba(255,255,255,.18)'],
  [1, 'rgba(255,255,255,0)'],
])

const PALETTE = ['#eaf6ff', '#bfe0ff', '#ffd9a8', '#fff3d6', '#cfe0ff', '#ffffff']

const tmpDir = new T.Vector3()
const tmpView = new T.Vector3()
const tmpPerp = new T.Vector3()
const tmpCenter = new T.Vector3()

// 夜空流星：亮头 + 逐渐收窄、逐渐隐去的丝带拖尾 + 几粒飘散的星屑
export function makeMeteors(camera) {
  const group = new T.Group()

  const pool = Array.from({ length: 7 }, (_, index) => {
    const color = new T.Color(PALETTE[index % PALETTE.length])

    const rows = SEG + 1
    const geometry = new T.BufferGeometry()
    const positions = new Float32Array(rows * 2 * 3)
    const edges = new Float32Array(rows * 2)
    const alphas = new Float32Array(rows * 2)
    geometry.setAttribute('position', new T.BufferAttribute(positions, 3))
    geometry.setAttribute('aEdge', new T.BufferAttribute(edges, 1))
    geometry.setAttribute('aAlpha', new T.BufferAttribute(alphas, 1))
    const indices = []
    for (let k = 0; k < SEG; k++) {
      const a = k * 2
      indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2)
    }
    geometry.setIndex(indices)

    const material = new T.ShaderMaterial({
      uniforms: {
        uColor: { value: color.clone() },
        uOpacity: { value: 0 },
      },
      vertexShader: `
        attribute float aEdge;
        attribute float aAlpha;
        varying float vEdge;
        varying float vAlpha;
        void main(){
          vEdge=aEdge;
          vAlpha=aAlpha;
          gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);
        }
      `,
      fragmentShader: `
        varying float vEdge;
        varying float vAlpha;
        uniform vec3 uColor;
        uniform float uOpacity;
        void main(){
          float edge=smoothstep(0.0,0.38,vEdge)*smoothstep(1.0,0.62,vEdge);
          float a=vAlpha*uOpacity*edge;
          if(a<=0.002)discard;
          gl_FragColor=vec4(uColor,a);
        }
      `,
      transparent: true,
      depthWrite: false,
      side: T.DoubleSide,
      blending: T.AdditiveBlending,
      fog: false,
    })

    const ribbon = new T.Mesh(geometry, material)
    ribbon.frustumCulled = false

    const halo = new T.Sprite(new T.SpriteMaterial({
      map: HALO_TEXTURE,
      color,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: T.AdditiveBlending,
      fog: false,
    }))
    halo.scale.setScalar(1.5)

    const core = new T.Sprite(new T.SpriteMaterial({
      map: CORE_TEXTURE,
      color: 0xffffff,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: T.AdditiveBlending,
      fog: false,
    }))
    core.scale.setScalar(.52)

    const embers = Array.from({ length: 5 }, () => {
      const sprite = new T.Sprite(new T.SpriteMaterial({
        map: CORE_TEXTURE,
        color,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        blending: T.AdditiveBlending,
        fog: false,
      }))
      group.add(sprite)
      return {
        sprite,
        f: .12 + Math.random() * .75,
        phase: Math.random() * TAU,
        side: Math.random() > .5 ? 1 : -1,
      }
    })

    group.add(ribbon, halo, core)
    return {
      ribbon, halo, core, embers, geometry, material,
      color,
      live: false, x: 0, y: 0, z: 0,
      vx: 0, vy: 0, vz: 0, life: 0, max: 1, tail: 2, width: .06,
      seed: Math.random() * TAU,
    }
  })

  let cursor = 0, nextAt = 2.6

  function spawn(now) {
    const meteor = pool[cursor]
    cursor = (cursor + 1) % pool.length
    const side = Math.random() > .5 ? 1 : -1
    const x = side * (8 + Math.random() * 8)
    const y = 9.5 + Math.random() * 3.2
    const z = -7 + Math.random() * 9
    const speed = 7.5 + Math.random() * 4.5
    const dx = -side * (0.95 + Math.random() * .35)
    const dy = -(0.16 + Math.random() * .16)
    const dz = (Math.random() - .5) * .3
    const length = Math.hypot(dx, dy, dz) || 1
    meteor.live = true
    meteor.x = x; meteor.y = y; meteor.z = z
    meteor.vx = dx / length * speed
    meteor.vy = dy / length * speed
    meteor.vz = dz / length * speed
    meteor.max = 1.35 + Math.random() * .9
    meteor.life = meteor.max
    meteor.tail = 2.6 + Math.random() * 2.6
    meteor.width = .05 + Math.random() * .05
    meteor.seed = Math.random() * TAU
    meteor.ribbon.visible = true
    meteor.halo.visible = true
    meteor.core.visible = true
    nextAt = now + 3.4 + Math.random() * 4.5
  }

  function update(dt, now) {
    if (now >= nextAt) spawn(now)
    for (const meteor of pool) {
      if (!meteor.live) {
        meteor.material.uniforms.uOpacity.value = 0
        meteor.halo.material.opacity = 0
        meteor.core.material.opacity = 0
        for (const ember of meteor.embers) ember.sprite.material.opacity = 0
        meteor.ribbon.visible = false
        meteor.halo.visible = false
        meteor.core.visible = false
        continue
      }
      meteor.life -= dt
      if (meteor.life <= 0 || meteor.y < 1.5) {
        meteor.live = false
        meteor.material.uniforms.uOpacity.value = 0
        continue
      }
      meteor.x += meteor.vx * dt
      meteor.y += meteor.vy * dt
      meteor.z += meteor.vz * dt
      const fade = Math.min(1, meteor.life / .35) * Math.min(1, (meteor.max - meteor.life) / .18)

      tmpDir.set(meteor.vx, meteor.vy, meteor.vz).normalize()
      tmpView.set(camera.position.x - meteor.x, camera.position.y - meteor.y, camera.position.z - meteor.z).normalize()
      tmpPerp.crossVectors(tmpDir, tmpView)
      if (tmpPerp.lengthSq() < .0001) tmpPerp.set(1, 0, 0)
      tmpPerp.normalize()

      const positions = meteor.geometry.attributes.position.array
      const edges = meteor.geometry.attributes.aEdge.array
      const alphas = meteor.geometry.attributes.aAlpha.array
      for (let k = 0; k <= SEG; k++) {
        const f = k / SEG
        const half = meteor.width * Math.pow(1 - f, 1.7)
        const wobble = Math.sin(f * 2.6 - now * 3.1 + meteor.seed) * meteor.tail * .035 * f
        tmpCenter.copy(tmpDir).multiplyScalar(-meteor.tail * f)
          .add(tmpPerp.clone().multiplyScalar(wobble))
          .add({ x: meteor.x, y: meteor.y, z: meteor.z })
        const vertex = k * 2
        positions[vertex * 3] = tmpCenter.x + tmpPerp.x * half
        positions[vertex * 3 + 1] = tmpCenter.y + tmpPerp.y * half
        positions[vertex * 3 + 2] = tmpCenter.z + tmpPerp.z * half
        positions[(vertex + 1) * 3] = tmpCenter.x - tmpPerp.x * half
        positions[(vertex + 1) * 3 + 1] = tmpCenter.y - tmpPerp.y * half
        positions[(vertex + 1) * 3 + 2] = tmpCenter.z - tmpPerp.z * half
        edges[vertex] = 0
        edges[vertex + 1] = 1
        alphas[vertex] = fade * Math.pow(1 - f, 1.55)
        alphas[vertex + 1] = fade * Math.pow(1 - f, 1.55)
      }
      meteor.geometry.attributes.position.needsUpdate = true
      meteor.geometry.attributes.aEdge.needsUpdate = true
      meteor.geometry.attributes.aAlpha.needsUpdate = true

      meteor.material.uniforms.uOpacity.value = 1
      meteor.halo.visible = true
      meteor.core.visible = true
      meteor.ribbon.visible = true
      const pulse = 1 + Math.sin(now * 7 + meteor.seed) * .12
      meteor.halo.material.opacity = fade * .55
      meteor.core.material.opacity = fade * .95
      meteor.halo.scale.setScalar(1.5 * pulse)
      meteor.core.scale.setScalar(.5 * pulse)
      meteor.halo.position.set(meteor.x, meteor.y, meteor.z)
      meteor.core.position.set(meteor.x, meteor.y, meteor.z)

      for (const ember of meteor.embers) {
        const drift = now * 1.8 + ember.phase
        const twinkle = .4 + .6 * (0.5 + 0.5 * Math.sin(now * 6 + ember.phase))
        const ox = Math.sin(drift) * meteor.tail * .05 * ember.side
        const oy = Math.cos(drift * 1.3) * meteor.tail * .05
        ember.sprite.position.set(
          meteor.x - tmpDir.x * meteor.tail * ember.f + tmpPerp.x * ox,
          meteor.y - tmpDir.y * meteor.tail * ember.f + tmpPerp.y * ox + oy,
          meteor.z - tmpDir.z * meteor.tail * ember.f + tmpPerp.z * ox,
        )
        ember.sprite.material.opacity = fade * Math.pow(1 - ember.f, 1.9) * twinkle
        ember.sprite.scale.setScalar(.16 + .1 * twinkle)
      }
    }
  }

  return { points: group, update }
}
