import * as T from 'three'

const TAU = Math.PI * 2
const clamp01 = value => Math.min(1, Math.max(0, value))
const MAX = 160
const SAMPLES = 42
const ROW = 3
const VERTICES = MAX * SAMPLES * ROW

/*
   夜空烟花：每条丝线都是一个带重力的头部 + 一段历史轨迹。
   头部受重力、空气阻力、湍流力作用；历史点连成面向相机的三角带，
   形成真正会弯曲、会下垂、会分叉的“丝线”烟花，而不是一排光点。
*/
export function makeSilkFireworks(camera) {
  const positions = new Float32Array(VERTICES * 3)
  const colors = new Float32Array(VERTICES * 3)
  const alphas = new Float32Array(VERTICES)
  const edges = new Float32Array(VERTICES)
  const indices = []

  for (let s = 0; s < MAX; s++) {
    for (let j = 0; j < SAMPLES; j++) {
      const base = (s * SAMPLES + j) * ROW
      edges[base] = 0
      edges[base + 1] = 1
      edges[base + 2] = 0
      if (j < SAMPLES - 1) {
        const a = base
        const b = base + ROW
        indices.push(
          a, a + 1, b + 1, a, b + 1, b,
          a + 1, a + 2, b + 2, a + 1, b + 2, b + 1,
        )
      }
    }
  }

  const geometry = new T.BufferGeometry()
  geometry.setAttribute('position', new T.BufferAttribute(positions, 3))
  geometry.setAttribute('aColor', new T.BufferAttribute(colors, 3))
  geometry.setAttribute('aAlpha', new T.BufferAttribute(alphas, 1))
  geometry.setAttribute('aEdge', new T.BufferAttribute(edges, 1))
  geometry.setIndex(indices)

  const material = new T.ShaderMaterial({
    vertexShader: `
      attribute vec3 aColor;
      attribute float aAlpha;
      attribute float aEdge;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vEdge;
      void main(){
        vColor=aColor;
        vAlpha=aAlpha;
        vEdge=aEdge;
        gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vAlpha;
      varying float vEdge;
      void main(){
        // 两侧渐隐、中间亮，像一条柔软的发光丝带
        float edge=smoothstep(0.0,0.26,vEdge)*smoothstep(1.0,0.74,vEdge);
        if(vAlpha*edge<=0.001)discard;
        gl_FragColor=vec4(vColor,vAlpha*edge);
      }
    `,
    transparent: true,
    depthWrite: false,
    side: T.DoubleSide,
    blending: T.AdditiveBlending,
  })

  const mesh = new T.Mesh(geometry, material)
  mesh.frustumCulled = false
  const group = new T.Group()
  group.add(mesh)

  const strands = Array.from({ length: MAX }, () => ({
    live: false, x: 0, y: -999, z: 0,
    vx: 0, vy: 0, vz: 0,
    dirx: 0, diry: 1, dirz: 0,
    life: 0, max: 1, width: .1, seed: 0, spawnAt: 0,
    r: 1, g: 1, b: 1,
    lastSample: 0,
    hist: Array.from({ length: SAMPLES }, () => ({ x: 0, y: -999, z: 0 })),
  }))

  let cursor = 0, nextAt = 1.8
  let frequency = 7
  let palette = ['#ffffff', '#eaf4ff', '#9fc7ff', '#cfe6ff', '#ffe4b8']

  function setTheme(theme) {
    palette = [theme.pale, theme.primary, theme.accent, theme.star, '#ffffff', '#ffe4b8']
  }

  function spawnBurst(now) {
    const side = Math.random() > .5 ? 1 : -1
    const cx = side * (5 + Math.random() * 7)
    const cy = 7.8 + Math.random() * 2.4
    const cz = -5 + Math.random() * 9
    const count = 48
    for (let i = 0; i < count; i++) {
      const p = strands[cursor]
      cursor = (cursor + 1) % MAX
      const angle = Math.random() * TAU
      const z = Math.random() * 2 - 1
      const radial = Math.sqrt(1 - z * z)
      const speed = 1.2 + Math.random() * 3.6
      const color = new T.Color(palette[Math.floor(Math.random() * palette.length)])
      p.live = true
      p.x = cx; p.y = cy; p.z = cz
      p.vx = Math.cos(angle) * radial * speed
      p.vy = z * speed
      p.vz = Math.sin(angle) * radial * speed
      const length = Math.hypot(p.vx, p.vy, p.vz) || 1
      p.dirx = p.vx / length
      p.diry = p.vy / length
      p.dirz = p.vz / length
      p.spawnAt = now
      p.max = 3.0 + Math.random() * .9
      p.life = p.max
      p.width = .018 + Math.random() * .027
      p.seed = Math.random() * TAU
      p.r = color.r; p.g = color.g; p.b = color.b
      p.lastSample = now
      for (let j = 0; j < SAMPLES; j++) {
        p.hist[j].x = cx
        p.hist[j].y = cy
        p.hist[j].z = cz
      }
    }
    nextAt = now + frequency
  }

  function update(dt, now) {
    if (frequency > 0 && now >= nextAt) spawnBurst(now)

    for (let s = 0; s < MAX; s++) {
      const p = strands[s]
      const base = s * SAMPLES * ROW
      if (!p.live) {
        for (let j = 0; j < SAMPLES * ROW; j++) alphas[base + j] = 0
        continue
      }

      p.life -= dt
      if (p.life <= 0) {
        p.live = false
        for (let j = 0; j < SAMPLES * ROW; j++) alphas[base + j] = 0
        continue
      }

      // 先用 0.55 秒把丝线均匀铺成一朵花，再逐渐加重力让它落下
      const age = now - p.spawnAt
      const gravityRamp = clamp01((age - .55) / .55)
      const turbulenceRamp = clamp01((age - .5) / .45)
      const t = now + p.seed
      const speed = Math.hypot(p.vx, p.vy, p.vz) || 1
      p.vx += (Math.sin(t * 1.35 + p.seed) * 1.1 + Math.sin(t * .63) * .4) * turbulenceRamp * dt
        - (p.vz / speed) * Math.sin(t * 1.1 + p.seed) * 1.6 * turbulenceRamp * dt
      p.vz += Math.cos(t * 1.2 + p.seed * 1.7) * 1.1 * turbulenceRamp * dt
        + (p.vx / speed) * Math.cos(t * .9 + p.seed) * 1.6 * turbulenceRamp * dt
      p.vy += (-2.1 * gravityRamp + Math.cos(t * 1.9 + p.seed) * .28 * turbulenceRamp) * dt
      const drag = Math.pow(age < .55 ? .997 : .991, dt * 60)
      p.vx *= drag; p.vy *= drag; p.vz *= drag
      p.x += p.vx * dt
      p.y += p.vy * dt
      p.z += p.vz * dt

      if (now - p.lastSample > .012) {
        p.hist.pop()
        p.hist.unshift({ x: p.x, y: p.y, z: p.z })
        p.lastSample = now
      } else {
        p.hist[0].x = p.x
        p.hist[0].y = p.y
        p.hist[0].z = p.z
      }

      const fade = Math.pow(p.life / p.max, .78)
      for (let j = 0; j < SAMPLES; j++) {
        const point = p.hist[j]
        const before = p.hist[Math.max(0, j - 1)]
        const after = p.hist[Math.min(SAMPLES - 1, j + 1)]
        let tx = after.x - before.x
        let ty = after.y - before.y
        let tz = after.z - before.z
        if (Math.hypot(tx, ty, tz) < .0001) {
          tx = p.dirx; ty = p.diry; tz = p.dirz
        }
        const vx = camera.position.x - point.x
        const vy = camera.position.y - point.y
        const vz = camera.position.z - point.z
        let sx = ty * vz - tz * vy
        let sy = tz * vx - tx * vz
        let sz = tx * vy - ty * vx
        const sideLength = Math.hypot(sx, sy, sz) || 1
        const taper = 1 - j / SAMPLES * .35
        const width = p.width * taper * (0.7 + .3 * fade)
        sx = sx / sideLength * width
        sy = sy / sideLength * width
        sz = sz / sideLength * width

        const vertex = base + j * ROW
        positions[vertex * 3] = point.x + sx
        positions[vertex * 3 + 1] = point.y + sy
        positions[vertex * 3 + 2] = point.z + sz
        positions[(vertex + 1) * 3] = point.x
        positions[(vertex + 1) * 3 + 1] = point.y
        positions[(vertex + 1) * 3 + 2] = point.z
        positions[(vertex + 2) * 3] = point.x - sx
        positions[(vertex + 2) * 3 + 1] = point.y - sy
        positions[(vertex + 2) * 3 + 2] = point.z - sz

        const head = j === 0
        const r = head ? 1 : p.r
        const g = head ? 1 : p.g
        const b = head ? 1 : p.b
        for (let k = 0; k < ROW; k++) {
          colors[(vertex + k) * 3] = r
          colors[(vertex + k) * 3 + 1] = g
          colors[(vertex + k) * 3 + 2] = b
          alphas[vertex + k] = fade * Math.pow(1 - j / SAMPLES, .3) * (head ? 1.1 : .78)
        }
      }
    }

    geometry.attributes.position.needsUpdate = true
    geometry.attributes.aColor.needsUpdate = true
    geometry.attributes.aAlpha.needsUpdate = true
  }

  return {
    points: group,
    setTheme,
    setPixel() {},
    setFrequency(value) {
      frequency = Math.max(0, value || 0)
      if (frequency > 0) nextAt = Math.min(nextAt, 2.5)
    },
    update,
  }
}
