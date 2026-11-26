import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowRight, ChevronRight, Snowflake, VolumeX } from 'lucide-react'

const TAU = Math.PI * 2
const clamp = (value, min, max) => Math.min(max, Math.max(min, value))
const lerp = (a, b, t) => a + (b - a) * t
const smooth = (a, b, value) => {
  const t = clamp((value - a) / (b - a), 0, 1)
  return t * t * (3 - 2 * t)
}
const easeOut = value => 1 - Math.pow(1 - value, 3)
const easeInOut = value => value < .5 ? 2 * value * value : 1 - Math.pow(-2 * value + 2, 2) / 2

function hexToRgba(hex, alpha) {
  const value = (hex || '#ffffff').replace('#', '')
  const full = value.length === 3 ? value.split('').map(c => c + c).join('') : value
  return `rgba(${parseInt(full.slice(0, 2), 16)},${parseInt(full.slice(2, 4), 16)},${parseInt(full.slice(4, 6), 16)},${alpha})`
}

function makeRng(seed) {
  return () => {
    seed |= 0
    seed = seed + 0x6D2B79F5 | 0
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed)
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t
    return ((t ^ t >>> 14) >>> 0) / 4294967296
  }
}

function makeGlowSprite(rgb) {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = 64
  const context = canvas.getContext('2d')
  const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 31)
  gradient.addColorStop(0, 'rgba(255,255,255,1)')
  gradient.addColorStop(.18, `rgba(${rgb},.82)`)
  gradient.addColorStop(.48, `rgba(${rgb},.22)`)
  gradient.addColorStop(1, `rgba(${rgb},0)`)
  context.fillStyle = gradient
  context.fillRect(0, 0, 64, 64)
  return canvas
}

/*
   光点从底部画螺旋线到顶部 → 顶部炸成粒子 → 粒子散落成树骨架
   → 由下往上亮灯 + 光点沿中线升到顶部成为最亮点
   → 顶部同一水平面绽放粒子圆环；背景同步出现极光与烟花。
*/
export function Intro({ name, blocked, onUnlock, onReveal, onFinish, theme, themes, onTheme }) {
  const canvasRef = useRef(null)
  const camDrag = useRef({ yaw: 0, pitch: 0, velYaw: 0, velPitch: 0, zoom: 1 })
  const dragRef = useRef({ active: false, x: 0, y: 0 })
  const pointers = useRef(new Map())
  const pinchDist = useRef(0)
  const [ready, setReady] = useState(false)
  const [closing, setClosing] = useState(false)
  const timers = useRef([])
  const didClose = useRef(false)
  const callbacks = useRef(null)
  callbacks.current = { onUnlock, onReveal, onFinish }

  function finish(skip = false) {
    if (didClose.current) return
    didClose.current = true
    callbacks.current.onUnlock()
    callbacks.current.onReveal()
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (skip || reduce) {
      callbacks.current.onFinish()
      return
    }
    setClosing(true)
    timers.current.push(setTimeout(() => callbacks.current.onFinish(), 1300))
  }

  useEffect(() => {
    if (!closing) return
    const timer = setTimeout(() => callbacks.current.onFinish(), 1500)
    return () => clearTimeout(timer)
  }, [closing])

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    const rng = makeRng(15012026)
    const mobile = matchMedia('(max-width: 820px)').matches || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)
    const density = mobile ? .5 : 1
    let width = 0, height = 0, dpr = 1, frame = 0, start = performance.now(), lastFrame = -1
    let geom = null, spiral = [], tiers = [], ribs = [], lights = [], burst = []
    let ring = [], dust = [], aurora = [], fireworks = [], ornaments = [], baseRing = []
    let fuzz = [], bokeh = [], snowflakes = [], forest = []
    let seed = [], ringLayer = [], explosionRing = [], stars3d = [], forest3d = []
    let glowWhite = null, glowIce = null, glowGold = null, bloomA = null, bloomB = null
    let now = 0, trail = [], lastTrail = 0, fxLast = -1

    const LINE_START = 5.7, LINE_END = 7.9, BURST_AT = 3.25, COMET_START = 5.7
    const STAR_AT = 8.2, RING_AT = 8.35

    function buildGeometry() {
      const top = height * .37
      const base = height * .89
      const treeH = base - top
      // 参考视频里的树是窄而高的；半径只占树高约三分之一
      const radius = Math.min(width * .26, treeH * .33)
      const cx = width / 2
      geom = { top, base, treeH, radius, cx }

      spiral = []
      const turns = 13
      const count = Math.round(2400 * density)
      for (let i = 0; i <= count; i++) {
        const t = i / count
        const angle = t * TAU * turns + .55
        const r = radius * (1 - t)
        spiral.push({
          t, angle,
          x: Math.cos(angle) * r,
          y: treeH * t,
          z: Math.sin(angle) * r,
          depth: Math.sin(angle) * .5 + .5,
        })
      }

      tiers = Array.from({ length: 12 }, (_, i) => {
        const t = .045 + i * .079
        return { t, y: treeH * t, r: radius * (1 - t) }
      })

      ribs = Array.from({ length: 12 }, (_, i) => {
        const angle = i * TAU / 12 + .3
        return {
          angle,
          bx: Math.cos(angle) * radius,
          bz: Math.sin(angle) * radius,
        }
      })

      lights = Array.from({ length: Math.round(380 * density) }, () => {
        const onSpiral = rng() < .68
        let t, x, y, z
        if (onSpiral) {
          t = Math.pow(rng(), .92)
          const point = spiral[Math.floor(t * (spiral.length - 1))]
          x = point.x
          y = point.y
          z = point.z
        } else {
          t = Math.pow(rng(), .9)
          const tier = tiers[Math.min(tiers.length - 1, Math.floor(t * tiers.length))]
          const angle = rng() * TAU
          x = Math.cos(angle) * tier.r
          y = tier.y
          z = Math.sin(angle) * tier.r
        }
        const roll = rng()
        const color = roll > .72 ? '#ffe3b0' : roll > .34 ? theme.pale : theme.primary
        return {
          t, x, y, z, color,
          size: .85 + Math.pow(rng(), 1.5) * 1.55,
          phase: rng() * TAU,
          onAt: 6.0 + t * 1.75,
          twinkle: .65 + rng() * .35,
        }
      })

      burst = Array.from({ length: 280 }, (_, i) => {
        const light = i < lights.length ? lights[i] : null
        const target = light
          ? { x: light.x, y: light.y, z: light.z }
          : {
              x: (rng() - .5) * radius * 2.3,
              y: treeH * rng(),
              z: (rng() - .5) * radius * 2.3,
            }
        return {
          target,
          rand: rng(),
          startAt: BURST_AT + rng() * .1,
          endAt: 5.55 + rng() * .6,
          size: .7 + rng() * 2.1,
          color: rng() > .82 ? '#ffe8bd' : rng() > .45 ? theme.pale : theme.primary,
          dead: !light,
          phase: rng() * TAU,
        }
      })

      ring = Array.from({ length: Math.round(230 * density) }, () => {
        const angle = rng() * TAU
        const factor = rng() > .55 ? 1.05 + rng() * .4 : .8 + rng() * .24
        return {
          angle, factor,
          size: .7 + rng() * 1.9,
          phase: rng() * TAU,
          color: rng() > .78 ? '#ffe8bd' : rng() > .4 ? theme.pale : theme.primary,
        }
      })

      ornaments = Array.from({ length: Math.round(34 * density) }, () => {
        const t = .1 + rng() * .78
        const angle = rng() * TAU
        const r = radius * (1 - t) * .98
        const roll = rng()
        return {
          t,
          x: Math.cos(angle) * r,
          y: treeH * t,
          z: Math.sin(angle) * r,
          size: 2.1 + rng() * 2.2,
          color: roll > .55 ? '#ffe1ad' : roll > .25 ? theme.pale : theme.accent,
          phase: rng() * TAU,
          onAt: 6.0 + t * 1.7,
        }
      })

      baseRing = Array.from({ length: Math.round(90 * density) }, () => {
        const angle = rng() * TAU
        return {
          angle,
          x: Math.cos(angle) * radius * (1 + rng() * .08),
          z: Math.sin(angle) * radius * (1 + rng() * .08),
          size: .6 + rng() * 1.5,
          phase: rng() * TAU,
        }
      })

      dust = Array.from({ length: Math.round(90 * density) }, () => ({
        x: rng() * width,
        y: rng() * height * .62,
        size: .4 + Math.pow(rng(), 4) * 2,
        phase: rng() * TAU,
        speed: .004 + rng() * .016,
        tint: rng() > .5 ? theme.pale : theme.primary,
      }))

      aurora = Array.from({ length: 4 }, (_, i) => ({
        y: height * (.15 + i * .065),
        amp: 22 + rng() * 32,
        freq: .0035 + rng() * .002,
        phase: rng() * TAU,
        color: i % 2 ? theme.auroraA : theme.auroraB,
      }))

      fireworks = [
        { at: .9, x: width * .22, y: height * .22, color: theme.pale },
        { at: 1.7, x: width * .78, y: height * .18, color: '#ffe2ae' },
        { at: 2.65, x: width * .13, y: height * .32, color: theme.primary },
        { at: 3.45, x: width * .86, y: height * .29, color: theme.pale },
        { at: 4.35, x: width * .22, y: height * .16, color: '#ffe2ae' },
        { at: 5.05, x: width * .76, y: height * .21, color: theme.primary },
        { at: 5.55, x: width * .16, y: height * .17, color: '#ffe2ae' },
        { at: 6.55, x: width * .18, y: height * .16, color: theme.pale },
        { at: 7.55, x: width * .82, y: height * .18, color: '#ffe2ae' },
        { at: 8.6, x: width * .12, y: height * .28, color: theme.primary },
        { at: 9.35, x: width * .86, y: height * .27, color: theme.pale },
        { at: 10.0, x: width * .26, y: height * .13, color: '#ffe2ae' },
      ].map(burstData => ({
        ...burstData,
        active: false,
        strands: null,
        age: 0,
        seed: rng() * TAU,
      }))

      // 参考动画的体积星尘：大量微小点围绕锥面，前后深度不同
      fuzz = Array.from({ length: Math.round(2800 * density) }, () => {
        const t = Math.pow(rng(), .72)
        const r = radius * (1 - t) * Math.pow(rng(), .5)
        const angle = rng() * TAU
        const roll = rng()
        return {
          x: Math.cos(angle) * r,
          y: treeH * t,
          z: Math.sin(angle) * r,
          size: .35 + Math.pow(rng(), 3) * 1.35,
          phase: rng() * TAU,
          tint: roll > .92 ? 'gold' : roll > .48 ? 'ice' : 'white',
        }
      })

      // 金/冰色散景球，对应参考动画里漂浮的暖色光斑
      bokeh = Array.from({ length: Math.round(48 * density) }, () => {
        const t = .06 + Math.pow(rng(), 1.35) * .8
        const r = radius * (1 - t) * (.92 + rng() * .16)
        const angle = rng() * TAU
        return {
          x: Math.cos(angle) * r,
          y: treeH * t,
          z: Math.sin(angle) * r,
          size: 3.2 + rng() * 7.5,
          phase: rng() * TAU,
          gold: rng() > .42,
          t,
        }
      })

      // 开场光点：和树螺旋同一条路径，圈数少 1 圈，一路画到树尖
      seed = []
      const seedCount = Math.round(1200 * density)
      const seedTurns = 12
      for (let i = 0; i <= seedCount; i++) {
        const u = i / seedCount
        const angle = u * TAU * seedTurns + .55
        const r = radius * (1 - u)
        seed.push({
          u,
          angle,
          x: Math.cos(angle) * r,
          y: treeH * u,
          z: Math.sin(angle) * r,
          size: 1.4 + (i % 5) * .28,
        })
      }

      // 爆炸后保留的圆环；粒子向环外扩散，但环本身一直在
      explosionRing = Array.from({ length: Math.round(380 * density) }, () => ({
        angle: rng() * TAU,
        factor: .96 + rng() * .08,
        size: .75 + Math.pow(rng(), 2) * 2.2,
        phase: rng() * TAU,
      }))

      // 爆炸后的三维环层：粒子固定在树尖高度，在同一水平面内向外扩散到全屏，再散成树
      ringLayer = Array.from({ length: Math.round(3400 * density) }, (_, i) => {
        const angle = rng() * TAU
        const startR = radius * (.9 + rng() * .55)
        const size = .7 + Math.pow(rng(), 2) * 2.4
        const target = fuzz[Math.floor(rng() * fuzz.length)]
        return {
          angle,
          startR,
          startY: treeH * (.985 + (rng() - .5) * .015),
          yOff: rng() - .5,
          phase: rng() * TAU,
          size,
          target,
          warm: i % 6 === 0,
        }
      })

      // 真正的三维星空：镜头转动时有前后视差
      stars3d = Array.from({ length: Math.round(420 * density) }, () => ({
        x: (rng() - .5) * width * 2.3,
        y: height * (.06 + rng() * .72),
        z: (rng() - .5) * treeH * 3.4,
        size: .45 + Math.pow(rng(), 3) * 1.9,
        phase: rng() * TAU,
        tint: rng() > .82 ? 'gold' : rng() > .4 ? 'ice' : 'white',
      }))

      // 种在三维空间里的远景松林，不再是一张屏幕贴图
      // 多层视差松林：镜头 yaw/pitch 变化时远近两层移动量不同，形成 3D 背景
      forest3d = Array.from({ length: Math.round(72 * density) }, () => {
        const h = height * (.04 + rng() * .085)
        return {
          x: rng() * width,
          y: height * (.71 + rng() * .06),
          h,
          w: h * (.36 + rng() * .24),
          shade: 6 + Math.floor(rng() * 9),
          alpha: .2 + rng() * .3,
          depth: .35 + rng() * .65,
        }
      })

      snowflakes = Array.from({ length: Math.round(72 * density) }, () => ({
        x: rng() * width,
        y: rng() * height * .78,
        size: .8 + rng() * 2.2,
        speed: 5 + rng() * 14,
        sway: 3 + rng() * 14,
        phase: rng() * TAU,
      }))

      // 远处松林剪影：参考动画里的地平线层次
      forest = Array.from({ length: 58 }, () => {
        const h = height * (.045 + rng() * .12)
        return {
          x: rng() * width,
          h,
          w: h * (.38 + rng() * .2),
          shade: 7 + Math.floor(rng() * 9),
          alpha: .22 + rng() * .26,
        }
      })

      glowWhite = makeGlowSprite('232,244,255')
      glowIce = makeGlowSprite('164,214,255')
      glowGold = makeGlowSprite('255,216,156')
    }

    function cameraAt(time) {
      const dragYaw = camDrag.current.yaw
      const dragPitch = camDrag.current.pitch
      const dragZoom = camDrag.current.zoom
      const seedEnd = 3.4
      const ringEnd = 5.9
      if (time < seedEnd) {
        const u = clamp(time / seedEnd, 0, 1)
        return {
          yaw: .55 + u * 1.5 + dragYaw,
          pitch: clamp(.07 + Math.sin(u * Math.PI) * .22 + dragPitch, -.55, 1.25),
          zoom: (1.06 - u * .03) * dragZoom,
        }
      }
      if (time < ringEnd) {
        const u = clamp((time - seedEnd) / (ringEnd - seedEnd), 0, 1)
        const rise = smooth(0, .35, u)
        const fall = smooth(.72, 1, u)
        return {
          yaw: .55 + 1.5 + u * .3 + dragYaw,
          pitch: clamp(.07 + .24 * (rise - fall) + dragPitch, -.55, 1.25),
          zoom: (1.02 + rise * .05) * dragZoom,
        }
      }
      return {
        yaw: .55 + 1.5 + .3 + (time - ringEnd) * .05 + dragYaw,
        pitch: clamp(.06 + Math.sin(time * .3) * .008 + dragPitch, -.55, 1.25),
        zoom: 1.02 * dragZoom,
      }
    }

    function project(x, y, z) {
      const camera = cameraAt(now)
      const cy = Math.cos(camera.yaw), sy = Math.sin(camera.yaw)
      const X = x * cy + z * sy
      const Z = -x * sy + z * cy
      const cp = Math.cos(camera.pitch), sp = Math.sin(camera.pitch)
      const Y = y * cp - Z * sp
      const depth = y * sp + Z * cp
      const D = geom.treeH * 1.7
      const perspective = D / (D + depth)
      return {
        x: geom.cx + X * perspective * camera.zoom,
        y: geom.base - Y * perspective * camera.zoom,
        depth,
      }
    }

    function drawAurora(time) {
      const fade = clamp((time - .65) / 1.6, 0, 1)
      if (fade <= 0) return
      context.globalCompositeOperation = 'lighter'
      const backdrop = context.createRadialGradient(
        geom.cx, geom.base - geom.treeH * .45, 0,
        geom.cx, geom.base - geom.treeH * .45, geom.radius * 3.2
      )
      backdrop.addColorStop(0, hexToRgba(theme.primary, .075 * fade))
      backdrop.addColorStop(.55, hexToRgba(theme.accent, .025 * fade))
      backdrop.addColorStop(1, hexToRgba(theme.accent, 0))
      context.globalAlpha = 1
      context.fillStyle = backdrop
      context.fillRect(0, 0, width, height)
      for (const band of aurora) {
        const gradient = context.createLinearGradient(0, 0, width, 0)
        gradient.addColorStop(0, hexToRgba(band.color, 0))
        gradient.addColorStop(.28, hexToRgba(band.color, .15 * fade))
        gradient.addColorStop(.65, hexToRgba(band.color, .1 * fade))
        gradient.addColorStop(1, hexToRgba(band.color, 0))
        const path = () => {
          context.beginPath()
          for (let x = -60; x <= width + 60; x += 18) {
            const y = band.y + Math.sin(x * band.freq + time * .28 + band.phase) * band.amp
              + Math.sin(x * band.freq * 2.1 + time * .16 + band.phase) * band.amp * .36
            x === -60 ? context.moveTo(x, y) : context.lineTo(x, y)
          }
        }
        context.strokeStyle = gradient
        context.lineWidth = 90
        context.globalAlpha = .2 * fade
        path(); context.stroke()
        context.lineWidth = 34
        context.globalAlpha = .55 * fade
        path(); context.stroke()
        context.lineWidth = 2.2
        context.globalAlpha = .8 * fade
        path(); context.stroke()
      }
      context.globalAlpha = 1
    }

    function drawFireworks(time) {
      if (fxLast < 0) fxLast = time
      if (time < fxLast - .1) {
        for (const fw of fireworks) {
          fw.active = false
          fw.strands = null
        }
        fxLast = time
      }
      const dt = clamp(time - fxLast, 0, .05)
      fxLast = time
      context.globalCompositeOperation = 'lighter'
      context.lineCap = 'round'
      context.lineJoin = 'round'

      for (const fw of fireworks) {
        if (!fw.active && time >= fw.at) {
          fw.active = true
          fw.age = 0
          fw.strands = []
          const count = mobile ? 36 : 64
          for (let i = 0; i < count; i++) {
            const angle = i / count * TAU + fw.seed * .08
            const speed = 62 + 22 * (.5 + .5 * Math.sin(i * 2.3 + fw.seed))
            const px = fw.x + Math.cos(angle) * 3
            const py = fw.y + Math.sin(angle) * 3
            fw.strands.push({
              angle,
              x: px, y: py,
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed,
              color: i % 5 === 0 ? '#fff4d8' : i % 3 === 0 ? theme.primary : fw.color,
              width: .55 + (i % 6) * .1,
              seed: fw.seed + i * .47,
              hist: Array.from({ length: mobile ? 14 : 26 }, () => ({ x: px, y: py })),
            })
          }
        }
        if (!fw.active) continue
        fw.age += dt
        if (fw.age > 2.55) {
          fw.active = false
          continue
        }
        const fade = clamp(1 - fw.age / 2.55, 0, 1)
        const gravityRamp = clamp((fw.age - .55) / .55, 0, 1)
        const turbulenceRamp = clamp((fw.age - .5) / .45, 0, 1)

        // 先是一个完整的圆，再让每个点受重力、阻力、湍流影响拉成丝线
        if (fw.age < .38) {
          const ringRadius = 3 + fw.age * 185
          context.globalAlpha = fade * (1 - fw.age / .38) * .55
          context.strokeStyle = fw.color
          context.lineWidth = 1.5
          context.beginPath()
          context.arc(fw.x, fw.y, ringRadius, 0, TAU)
          context.stroke()
          context.globalAlpha = fade * (1 - fw.age / .38) * .14
          context.lineWidth = 4
          context.stroke()
        }

        for (const p of fw.strands) {
          const t = time + p.seed
          const speed = Math.hypot(p.vx, p.vy) || 1
          p.vx += (Math.sin(t * 1.35 + p.seed) * 24 + Math.sin(t * .63) * 9) * turbulenceRamp * dt
            - (p.vy / speed) * Math.sin(t * 1.1 + p.seed) * 26 * turbulenceRamp * dt
          p.vy += (42 * gravityRamp + Math.cos(t * 1.9 + p.seed) * 12 * turbulenceRamp) * dt
            + (p.vx / speed) * Math.cos(t * .9 + p.seed) * 26 * turbulenceRamp * dt
          const drag = Math.pow(fw.age < .55 ? .997 : .991, dt * 60)
          p.vx *= drag
          p.vy *= drag
          p.x += p.vx * dt
          p.y += p.vy * dt
          p.hist.pop()
          p.hist.unshift({ x: p.x, y: p.y })

          for (let j = p.hist.length - 1; j > 0; j--) {
            const a = p.hist[j]
            const b = p.hist[j - 1]
            if (Math.abs(a.x - b.x) + Math.abs(a.y - b.y) < .3) continue
            const q = j / p.hist.length
            context.globalAlpha = fade * .08 * (1 - q)
            context.strokeStyle = p.color
            context.lineWidth = p.width * 7 * (1 - q) + .5
            context.beginPath()
            context.moveTo(a.x, a.y)
            context.lineTo(b.x, b.y)
            context.stroke()
            context.globalAlpha = fade * .68 * (1 - q)
            context.lineWidth = p.width * (1 - q) + .22
            context.stroke()
          }

          context.globalAlpha = fade * .9
          context.drawImage(glowWhite, p.x - 5, p.y - 5, 10, 10)
          context.fillStyle = '#ffffff'
          context.beginPath()
          context.arc(p.x, p.y, .85, 0, TAU)
          context.fill()
        }
      }
      context.globalAlpha = 1
    }

    function drawExplosionRing(time) {
      context.globalCompositeOperation = 'lighter'
      const y = geom.treeH
      // 爆炸闪光：树尖炸开一团强光
      if (time >= 3.45 && time <= 4.35) {
        const u = (time - 3.45) / .9
        const tip = project(0, y, 0)
        const flashR = geom.treeH * (.15 + u * 1.15)
        const glow = context.createRadialGradient(tip.x, tip.y, 0, tip.x, tip.y, flashR)
        glow.addColorStop(0, `rgba(255,255,255,${.95 * (1 - u)})`)
        glow.addColorStop(.35, hexToRgba(theme.pale, .55 * (1 - u)))
        glow.addColorStop(1, 'rgba(255,255,255,0)')
        context.globalAlpha = 1
        context.fillStyle = glow
        context.beginPath()
        context.arc(tip.x, tip.y, flashR, 0, TAU)
        context.fill()
      }
      // 冲击波环：同一高度一直扩大到全屏幕
      if (time >= 3.45 && time <= 4.8) {
        const u = clamp((time - 3.45) / 1.3, 0, 1)
        const waveR = geom.radius * (.3 + u * 6.8)
        const waveA = u < .78 ? .95 : clamp((1 - u) / .22, 0, 1) * .95
        context.strokeStyle = '#ffffff'
        context.globalAlpha = waveA * .95
        context.lineWidth = 2.2
        context.beginPath()
        for (let i = 0; i <= 128; i++) {
          const angle = i / 128 * TAU
          const point = project(Math.cos(angle) * waveR, y, Math.sin(angle) * waveR)
          i === 0 ? context.moveTo(point.x, point.y) : context.lineTo(point.x, point.y)
        }
        context.stroke()
        context.globalAlpha = waveA * .3
        context.lineWidth = 8
        context.stroke()

        const u2 = clamp((time - 3.58) / 1.15, 0, 1)
        const waveR2 = geom.radius * (.2 + u2 * 5.4)
        const waveA2 = (u2 < .78 ? 1 : clamp((1 - u2) / .22, 0, 1)) * .7
        context.globalAlpha = waveA2
        context.lineWidth = 1.2
        context.beginPath()
        for (let i = 0; i <= 96; i++) {
          const angle = i / 96 * TAU
          const point = project(Math.cos(angle) * waveR2, y, Math.sin(angle) * waveR2)
          i === 0 ? context.moveTo(point.x, point.y) : context.lineTo(point.x, point.y)
        }
        context.stroke()
      }
      // 圆环本体：粒子扩散完仍保留
      const appear = smooth(3.5, 3.75, time)
      const fade = 1 - smooth(6.5, 7.25, time)
      if (appear <= 0 || fade <= 0) {
        context.globalAlpha = 1
        return
      }
      const radius = geom.radius * (.95 + .02 * Math.sin(time * 1.2))
      context.lineCap = 'round'
      context.strokeStyle = theme.pale
      context.globalAlpha = .34 * appear * fade
      context.lineWidth = 5.2
      context.beginPath()
      for (let i = 0; i <= 96; i++) {
        const angle = i / 96 * TAU
        const point = project(Math.cos(angle) * radius, y, Math.sin(angle) * radius)
        i === 0 ? context.moveTo(point.x, point.y) : context.lineTo(point.x, point.y)
      }
      context.stroke()
      context.globalAlpha = .92 * appear * fade
      context.lineWidth = 1.05
      context.stroke()

      for (const item of explosionRing) {
        const angle = item.angle + time * .035
        const r = radius * item.factor
        const point = project(Math.cos(angle) * r, y, Math.sin(angle) * r)
        const twinkle = .55 + .45 * Math.sin(time * 2.1 + item.phase)
        context.globalAlpha = appear * fade * (.3 + .55 * twinkle)
        context.fillStyle = theme.pale
        context.beginPath()
        context.arc(point.x, point.y, item.size, 0, TAU)
        context.fill()
      }
      context.globalAlpha = 1
    }

    function drawStars3D(time) {
      const fade = clamp((time - .3) / 1.1, 0, 1)
      if (fade <= 0) return
      context.globalCompositeOperation = 'lighter'
      for (const star of stars3d) {
        const point = project(star.x, star.y, star.z)
        const near = clamp(.95 - point.depth * .0025, .18, 1)
        const twinkle = .55 + .45 * Math.sin(time * .9 + star.phase)
        const size = star.size * (.55 + near * 1.2)
        const sprite = star.tint === 'gold' ? glowGold : star.tint === 'ice' ? glowIce : glowWhite
        context.globalAlpha = fade * (.16 + .34 * near) * twinkle
        context.drawImage(sprite, point.x - size * 2.4, point.y - size * 2.4, size * 4.8, size * 4.8)
        context.globalAlpha = fade * (.28 + .5 * near)
        context.fillStyle = theme.pale
        context.beginPath()
        context.arc(point.x, point.y, Math.max(.25, size * .38), 0, TAU)
        context.fill()
      }
      context.globalAlpha = 1
    }

    function drawForest3D(time) {
      const fade = clamp((time - .35) / 1.3, 0, 1)
      if (fade <= 0) return
      const cam = cameraAt(time)
      const shiftX = (cam.yaw - .55) * 120
      const shiftY = (cam.pitch - .07) * 100
      const trees = forest3d.slice().sort((a, b) => a.depth - b.depth)
      context.globalCompositeOperation = 'source-over'
      for (const p of trees) {
        const px = p.x - shiftX * p.depth
        const py = p.y - shiftY * p.depth
        const scale = .82 + p.depth * .3
        const h = p.h * scale
        const w = p.w * scale
        context.globalAlpha = p.alpha * fade
        context.fillStyle = `rgb(${p.shade},${p.shade + 9},${p.shade + 18})`
        context.beginPath()
        context.moveTo(px, py - h)
        context.lineTo(px + w * .48, py - h * .30)
        context.lineTo(px + w * .22, py - h * .30)
        context.lineTo(px + w * .64, py - h * .04)
        context.lineTo(px - w * .64, py - h * .04)
        context.lineTo(px - w * .22, py - h * .30)
        context.lineTo(px - w * .48, py - h * .30)
        context.closePath()
        context.fill()
      }
      context.globalAlpha = 1
    }

    function drawDust(time) {
      context.globalCompositeOperation = 'lighter'
      for (const d of dust) {
        const x = d.x + Math.sin(time * .16 + d.phase) * 8
        const y = (d.y + time * d.speed * 50) % (height * .7)
        context.globalAlpha = .1 + .24 * (0.5 + 0.5 * Math.sin(time * .8 + d.phase))
        context.fillStyle = d.tint
        context.beginPath()
        context.arc(x, y, d.size, 0, TAU)
        context.fill()
      }
      context.globalAlpha = 1
    }

    function drawBase(time) {
      const fade = clamp((time - 4.8) / 1.4, 0, 1)
      if (fade <= 0) return
      const center = project(0, 0, 0)
      const radius = geom.radius * 1.45
      context.globalCompositeOperation = 'lighter'
      context.save()
      context.translate(center.x, center.y)
      context.scale(1, .22)
      const glow = context.createRadialGradient(0, 0, 0, 0, 0, radius)
      glow.addColorStop(0, hexToRgba(theme.primary, .18 * fade))
      glow.addColorStop(.45, hexToRgba(theme.primary, .06 * fade))
      glow.addColorStop(1, hexToRgba(theme.accent, 0))
      context.globalAlpha = 1
      context.fillStyle = glow
      context.beginPath()
      context.arc(0, 0, radius, 0, TAU)
      context.fill()
      context.restore()

      for (const p of baseRing) {
        const point = project(p.x, 0, p.z)
        const twinkle = .45 + .55 * Math.sin(time * 2 + p.phase)
        context.globalAlpha = fade * (.25 + .55 * twinkle)
        context.fillStyle = theme.pale
        context.beginPath()
        context.arc(point.x, point.y, p.size, 0, TAU)
        context.fill()
      }
      context.globalAlpha = 1
    }

    function drawSeed(time) {
      if (time < .3 || time > 3.75) return
      const progress = clamp((time - .35) / (3.35 - .35), 0, 1)
      const head = Math.floor(progress * (seed.length - 1))
      if (head < 1) return
      const fade = 1 - smooth(3.32, 3.72, time)
      if (fade <= 0) return
      const projected = []
      for (let i = 0; i <= head; i++) {
        const p = seed[i]
        projected.push(project(p.x, p.y, p.z))
      }
      context.globalCompositeOperation = 'lighter'
      context.lineCap = 'round'
      context.lineJoin = 'round'
      context.globalAlpha = .7 * fade
      context.strokeStyle = theme.pale
      context.lineWidth = 1.4
      context.beginPath()
      context.moveTo(projected[0].x, projected[0].y)
      for (let i = 1; i < projected.length; i++) context.lineTo(projected[i].x, projected[i].y)
      context.stroke()

      for (let i = Math.max(0, head - 180); i <= head; i += 3) {
        const p = projected[i]
        const age = (head - i) / 180
        const a = clamp(1 - age, 0, 1) * .55 * fade
        const r = seed[i].size
        context.globalAlpha = a
        context.drawImage(glowWhite, p.x - r * 2, p.y - r * 2, r * 4, r * 4)
      }
      const p = projected[head]
      const glow = context.createRadialGradient(p.x, p.y, 0, p.x, p.y, 30)
      glow.addColorStop(0, hexToRgba('#ffffff', .95 * fade))
      glow.addColorStop(.3, hexToRgba(theme.pale, .45 * fade))
      glow.addColorStop(1, hexToRgba(theme.primary, 0))
      context.globalAlpha = 1
      context.fillStyle = glow
      context.beginPath()
      context.arc(p.x, p.y, 30, 0, TAU)
      context.fill()
      context.fillStyle = `rgba(255,255,255,${fade})`
      context.beginPath()
      context.arc(p.x, p.y, 2.8, 0, TAU)
      context.fill()
      context.globalAlpha = 1
    }

    function drawRingLayer(time) {
      if (time < 3.45 || time > 6.45) return
      const grow = smooth(3.45, 3.8, time)
      const diffuse = smooth(3.7, 5.15, time)
      const scatter = smooth(4.95, 6.0, time)
      const fade = 1 - smooth(5.95, 6.4, time)
      if (fade <= 0) return
      context.globalCompositeOperation = 'lighter'
      for (const p of ringLayer) {
        const angle = p.angle + time * .09
        const ringR = p.startR * (.25 + .75 * grow) * (1 + 2.6 * diffuse)
        let x = Math.cos(angle) * ringR
        let z = Math.sin(angle) * ringR
        // 固定 z 轴高度，只在 xy 平面里向外扩散，直到铺满整个屏幕
        let y = p.startY + p.yOff * geom.treeH * .012 * diffuse
        if (scatter > 0) {
          x = lerp(x, p.target.x, scatter)
          y = lerp(y, p.target.y, scatter)
          z = lerp(z, p.target.z, scatter)
        }
        const projected = project(x, y, z)
        if (!projected) continue
        const near = clamp(.95 - projected.depth * .003, .2, 1)
        const twinkle = .62 + .38 * Math.sin(time * 2 + p.phase)
        const size = p.size * (.72 + near * .95) * (1 - scatter * .22 - diffuse * .12)
        context.globalAlpha = fade * (.2 + near * .6) * twinkle
        context.drawImage(
          p.warm ? glowGold : glowWhite,
          projected.x - size * 2.2, projected.y - size * 2.2, size * 4.4, size * 4.4
        )
        context.globalAlpha = fade * (.5 + near * .48) * twinkle
        context.fillStyle = p.warm ? '#fff0d7' : theme.pale
        context.beginPath()
        context.arc(projected.x, projected.y, Math.max(.45, size * .42), 0, TAU)
        context.fill()
      }
      context.globalAlpha = 1
    }

    function drawSkeleton(time) {
      const fade = clamp((time - 5.0) / 1.0, 0, 1)
      if (fade <= 0) return
      context.globalCompositeOperation = 'lighter'
      context.lineCap = 'round'
      context.lineJoin = 'round'
      context.strokeStyle = theme.primary
      context.lineWidth = 1

      const apex = project(0, geom.treeH, 0)
      const left = project(-geom.radius, 0, 0)
      const right = project(geom.radius, 0, 0)
      const foot = project(0, 0, 0)

      context.globalAlpha = .12 * fade
      context.beginPath()
      context.moveTo(right.x, right.y)
      context.lineTo(apex.x, apex.y)
      context.lineTo(left.x, left.y)
      context.stroke()
      context.beginPath()
      context.moveTo(foot.x, foot.y)
      context.lineTo(apex.x, apex.y)
      context.stroke()

      for (const tier of tiers) {
        context.globalAlpha = .1 * fade
        context.beginPath()
        for (let i = 0; i <= 48; i++) {
          const angle = i / 48 * TAU
          const point = project(Math.cos(angle) * tier.r, tier.y, Math.sin(angle) * tier.r)
          i === 0 ? context.moveTo(point.x, point.y) : context.lineTo(point.x, point.y)
        }
        context.stroke()
      }

      for (const rib of ribs) {
        const base = project(rib.bx, 0, rib.bz)
        context.globalAlpha = .07 * fade
        context.beginPath()
        context.moveTo(base.x, base.y)
        context.lineTo(apex.x, apex.y)
        context.stroke()
      }

      // 细枝，让骨架不只是一个空锥
      context.globalAlpha = .045 * fade
      context.lineWidth = .8
      for (let tierIndex = 0; tierIndex < tiers.length - 1; tierIndex++) {
        const tier = tiers[tierIndex]
        const root = project(0, tier.y - geom.treeH * .018, 0)
        for (let j = 0; j < 10; j++) {
          const angle = j / 10 * TAU + (tierIndex % 2) * .18
          const tip = project(Math.cos(angle) * tier.r, tier.y, Math.sin(angle) * tier.r)
          context.beginPath()
          context.moveTo(root.x, root.y)
          context.lineTo(tip.x, tip.y)
          context.stroke()
        }
      }
      context.globalAlpha = 1
    }

    function drawTrail() {
      if (!trail.length) return
      context.globalCompositeOperation = 'lighter'
      for (const p of trail) {
        const age = now - p.born
        if (age < 0 || age > .72) continue
        const x = p.x + p.vx * age
        const y = p.y + p.vy * age
        const fade = 1 - age / .72
        context.globalAlpha = fade * .7
        context.fillStyle = p.color
        context.beginPath()
        context.arc(x, y, p.size * (.5 + fade * .8), 0, TAU)
        context.fill()
        if (p.size > 1.5) {
          context.globalAlpha = fade * .08
          context.beginPath()
          context.arc(x, y, p.size * 4, 0, TAU)
          context.fill()
        }
      }
      context.globalAlpha = 1
    }

    function drawRibbon(time) {
      const reveal = clamp((time - 5.6) / 2.2, 0, 1)
      if (reveal <= 0) return
      const maxIndex = Math.floor(easeInOut(reveal) * (spiral.length - 1))
      if (maxIndex < 2) return
      const points = []
      for (let i = 0; i <= maxIndex; i++) {
        const point = spiral[i]
        points.push(project(point.x, point.y, point.z))
      }
      const path = () => {
        context.beginPath()
        context.moveTo(points[0].x, points[0].y)
        for (let i = 1; i < points.length; i++) context.lineTo(points[i].x, points[i].y)
      }
      context.globalCompositeOperation = 'lighter'
      context.lineCap = 'round'
      context.lineJoin = 'round'
      context.strokeStyle = theme.primary

      context.globalAlpha = .035 * reveal
      context.lineWidth = 20
      path(); context.stroke()

      context.globalAlpha = .12 * reveal
      context.lineWidth = 6.5
      path(); context.stroke()

      context.globalAlpha = .72 * reveal
      context.strokeStyle = theme.pale
      context.lineWidth = 1.35
      path(); context.stroke()

      // 沿螺旋线铺一圈发光珠子，让光带看起来是一条真正的灯链
      for (let i = 0; i <= maxIndex; i += (mobile ? 22 : 11)) {
        const point = project(spiral[i].x, spiral[i].y, spiral[i].z)
        const near = clamp(.95 - point.depth * .055, .22, 1)
        const size = (1.2 + spiral[i].depth * 1.4) * (0.8 + near * 1.4)
        context.globalAlpha = (.28 + .58 * near) * reveal
        context.drawImage(glowWhite, point.x - size * 2, point.y - size * 2, size * 4, size * 4)
      }
      context.globalAlpha = 1
    }

    function drawFuzz(time) {
      const reveal = clamp((time - 5.4) / 2.3, 0, 1)
      if (reveal <= 0) return
      const maxY = geom.treeH * easeInOut(reveal)
      context.globalCompositeOperation = 'lighter'
      for (const point of fuzz) {
        if (point.y > maxY) continue
        const projected = project(point.x, point.y, point.z)
        const near = clamp(.9 - projected.depth * .06, .22, 1)
        const twinkle = .62 + .38 * Math.sin(time * 1.8 + point.phase)
        const size = point.size * (1.6 + near * 2.8)
        const sprite = point.tint === 'gold' ? glowGold : point.tint === 'ice' ? glowIce : glowWhite
        context.globalAlpha = (.06 + .22 * near) * twinkle * reveal
        context.drawImage(sprite, projected.x - size * 2, projected.y - size * 2, size * 4, size * 4)
        if (point.size > 1.2) {
          context.globalAlpha = (.32 + .4 * near) * twinkle * reveal
          context.drawImage(sprite, projected.x - size * .45, projected.y - size * .45, size * .9, size * .9)
        }
      }
      context.globalAlpha = 1
    }

    function drawBokeh(time) {
      const reveal = clamp((time - 5.9) / 1.8, 0, 1)
      if (reveal <= 0) return
      context.globalCompositeOperation = 'lighter'
      for (const item of bokeh) {
        const projected = project(item.x, item.y, item.z)
        const pulse = .8 + .2 * Math.sin(time * 1.1 + item.phase)
        const size = item.size * pulse
        const sprite = item.gold ? glowGold : glowIce
        context.globalAlpha = .09 * reveal
        context.drawImage(sprite, projected.x - size * 3, projected.y - size * 3, size * 6, size * 6)
        context.globalAlpha = .22 * reveal
        context.drawImage(sprite, projected.x - size, projected.y - size, size * 2, size * 2)
      }
      context.globalAlpha = 1
    }

    function drawForest(time) {
      const fade = clamp((time - .25) / 1.3, 0, 1)
      if (fade <= 0) return
      const horizon = height * .735
      context.globalCompositeOperation = 'source-over'
      for (const pine of forest) {
        const base = horizon + pine.h * .12
        context.globalAlpha = pine.alpha * fade
        context.fillStyle = `rgb(${pine.shade},${pine.shade + 10},${pine.shade + 19})`
        context.beginPath()
        context.moveTo(pine.x, base - pine.h)
        context.lineTo(pine.x + pine.w * .5, base - pine.h * .34)
        context.lineTo(pine.x + pine.w * .23, base - pine.h * .34)
        context.lineTo(pine.x + pine.w * .66, base - pine.h * .05)
        context.lineTo(pine.x - pine.w * .66, base - pine.h * .05)
        context.lineTo(pine.x - pine.w * .23, base - pine.h * .34)
        context.lineTo(pine.x - pine.w * .5, base - pine.h * .34)
        context.closePath()
        context.fill()
      }
      const fog = context.createLinearGradient(0, horizon - height * .08, 0, horizon + height * .06)
      fog.addColorStop(0, 'rgba(8,22,36,0)')
      fog.addColorStop(.5, 'rgba(10,28,44,.38)')
      fog.addColorStop(1, 'rgba(5,15,26,0)')
      context.globalAlpha = fade
      context.fillStyle = fog
      context.fillRect(0, horizon - height * .08, width, height * .14)
      context.globalAlpha = 1
    }

    function drawSnow(time) {
      context.globalCompositeOperation = 'lighter'
      for (const flake of snowflakes) {
        const y = ((flake.y + time * flake.speed) % (height * .92) + height * .92) % (height * .92)
        const x = flake.x + Math.sin(time * .6 + flake.phase) * flake.sway
        const size = flake.size * 2.6
        context.globalAlpha = .11
        context.drawImage(glowWhite, x - size, y - size, size * 2, size * 2)
      }
      context.globalAlpha = 1
    }

    function applyBloom() {
      if (!bloomA || !bloomB) return
      const a = bloomA.getContext('2d')
      const b = bloomB.getContext('2d')
      a.setTransform(1, 0, 0, 1, 0, 0)
      a.clearRect(0, 0, bloomA.width, bloomA.height)
      a.filter = 'blur(3px)'
      a.drawImage(canvas, 0, 0, bloomA.width, bloomA.height)
      a.filter = 'none'
      b.setTransform(1, 0, 0, 1, 0, 0)
      b.clearRect(0, 0, bloomB.width, bloomB.height)
      b.filter = 'blur(6px)'
      b.drawImage(bloomA, 0, 0, bloomB.width, bloomB.height)
      b.filter = 'none'
      context.globalCompositeOperation = 'lighter'
      context.globalAlpha = .42
      context.drawImage(bloomA, 0, 0, width, height)
      context.globalAlpha = .26
      context.drawImage(bloomB, 0, 0, width, height)
      context.globalAlpha = 1
      context.globalCompositeOperation = 'source-over'
    }

    function drawLine(time) {
      const lineFade = clamp(1 - (time - (LINE_END - .02)) / .8, 0, 1)
      if (lineFade <= 0) return
      const progress = reduced ? 1 : clamp((time - LINE_START) / (LINE_END - LINE_START), 0, 1)
      const head = Math.floor(progress * (spiral.length - 1))
      if (head < 1) {
        if (time > LINE_START - .3 && time < LINE_START + .2) {
          context.globalCompositeOperation = 'lighter'
          const p = project(spiral[0].x, spiral[0].y, spiral[0].z)
          const g = context.createRadialGradient(p.x, p.y, 0, p.x, p.y, 34)
          g.addColorStop(0, hexToRgba('#ffffff', .95 * lineFade))
          g.addColorStop(.3, hexToRgba(theme.pale, .5 * lineFade))
          g.addColorStop(1, hexToRgba(theme.primary, 0))
          context.fillStyle = g
          context.beginPath()
          context.arc(p.x, p.y, 34, 0, TAU)
          context.fill()
        }
        return
      }
      const projected = []
      for (let i = 0; i <= head; i++) {
        const point = spiral[i]
        projected.push(project(point.x, point.y, point.z))
      }

      drawTrail()

      context.globalCompositeOperation = 'lighter'
      context.lineCap = 'round'
      context.lineJoin = 'round'
      const path = () => {
        context.beginPath()
        context.moveTo(projected[0].x, projected[0].y)
        for (let i = 1; i < projected.length; i++) context.lineTo(projected[i].x, projected[i].y)
      }
      context.globalAlpha = .08 * lineFade
      context.strokeStyle = theme.primary
      context.lineWidth = 9
      path(); context.stroke()
      context.globalAlpha = .34 * lineFade
      context.lineWidth = 2.6
      path(); context.stroke()
      context.globalAlpha = .94 * lineFade
      context.strokeStyle = theme.pale
      context.lineWidth = .9
      path(); context.stroke()

      for (let i = 0; i < head; i += 13) {
        const p = projected[i]
        const twinkle = .4 + .6 * (0.5 + 0.5 * Math.sin(time * 3 + i))
        context.globalAlpha = .25 * twinkle * lineFade
        context.fillStyle = theme.pale
        context.beginPath()
        context.arc(p.x, p.y, .8, 0, TAU)
        context.fill()
      }

      const point = projected[head]
      // 光点旋转时的粒子拖尾
      if (time >= LINE_START && time <= LINE_END) {
        if (time - lastTrail > .012) {
          lastTrail = time
          for (let i = 0; i < 4; i++) {
            trail.push({
              x: point.x + (rng() - .5) * 9,
              y: point.y + (rng() - .5) * 9,
              vx: (rng() - .5) * 46,
              vy: -8 - rng() * 30,
              born: time,
              size: .9 + rng() * 1.9,
              color: rng() > .45 ? theme.pale : theme.primary,
            })
          }
          if (trail.length > 260) trail.splice(0, trail.length - 260)
        }
      }

      context.globalAlpha = 1
      const g = context.createRadialGradient(point.x, point.y, 0, point.x, point.y, 30)
      g.addColorStop(0, hexToRgba('#ffffff', .98 * lineFade))
      g.addColorStop(.28, hexToRgba(theme.pale, .55 * lineFade))
      g.addColorStop(1, hexToRgba(theme.primary, 0))
      context.fillStyle = g
      context.beginPath()
      context.arc(point.x, point.y, 30, 0, TAU)
      context.fill()
      context.globalAlpha = .95 * lineFade
      context.fillStyle = '#ffffff'
      context.beginPath()
      context.arc(point.x, point.y, 2.3, 0, TAU)
      context.fill()
    }

    function drawBurst(time) {
      if (time < BURST_AT) return
      const apex = project(0, geom.treeH, 0)
      context.globalCompositeOperation = 'lighter'
      for (const p of burst) {
        if (time < p.startAt || time > p.endAt + .7) continue
        const u = clamp((time - p.startAt) / (p.endAt - p.startAt), 0, 1)
        const e = easeInOut(u)
        const target = project(p.target.x, p.target.y, p.target.z)
        const ctrlX = (apex.x + target.x) * .5 + (p.rand - .5) * geom.radius * 1.9
        const ctrlY = apex.y - 35 - p.rand * 120
        const x = (1 - e) * (1 - e) * apex.x + 2 * (1 - e) * e * ctrlX + e * e * target.x
        const y = (1 - e) * (1 - e) * apex.y + 2 * (1 - e) * e * ctrlY + e * e * target.y
        const fade = u >= 1 ? .35 : .9
        context.globalAlpha = fade
        context.fillStyle = p.color
        context.beginPath()
        context.arc(x, y, u >= 1 ? p.size * .7 : p.size, 0, TAU)
        context.fill()
        if (u >= 1) {
          context.globalAlpha = .08
          context.beginPath()
          context.arc(x, y, p.size * 4, 0, TAU)
          context.fill()
        }
      }
      context.globalAlpha = 1
    }

    function drawLights(time) {
      context.globalCompositeOperation = 'lighter'
      for (const light of lights) {
        const turnOn = clamp((time - light.onAt) / .32, 0, 1)
        if (turnOn <= 0) continue
        const point = project(light.x, light.y, light.z)
        const pulse = 1 + Math.sin(time * 2.4 + light.phase) * .18
        const twinkle = .7 + .3 * Math.sin(time * 2.1 + light.phase)
        context.globalAlpha = turnOn * twinkle
        context.fillStyle = light.color
        context.beginPath()
        context.arc(point.x, point.y, light.size * pulse * turnOn, 0, TAU)
        context.fill()
        context.globalAlpha = turnOn * .045
        context.beginPath()
        context.arc(point.x, point.y, light.size * 3.4, 0, TAU)
        context.fill()
        if (light.size > 1.9) {
          context.globalAlpha = turnOn * .05
          context.beginPath()
          context.arc(point.x, point.y, light.size * 5.2, 0, TAU)
          context.fill()
        }
      }
      context.globalAlpha = 1
    }

    function drawOrnaments(time) {
      context.globalCompositeOperation = 'lighter'
      for (const item of ornaments) {
        const turnOn = clamp((time - item.onAt) / .42, 0, 1)
        if (turnOn <= 0) continue
        const point = project(item.x, item.y, item.z)
        const pulse = 1 + Math.sin(time * 1.7 + item.phase) * .12
        const size = item.size * pulse
        context.globalAlpha = turnOn * .12
        const halo = context.createRadialGradient(point.x, point.y, 0, point.x, point.y, size * 4)
        halo.addColorStop(0, hexToRgba(item.color, .4 * turnOn))
        halo.addColorStop(1, hexToRgba(item.color, 0))
        context.fillStyle = halo
        context.beginPath()
        context.arc(point.x, point.y, size * 4, 0, TAU)
        context.fill()

        context.globalAlpha = turnOn * .95
        context.fillStyle = item.color
        context.beginPath()
        context.arc(point.x, point.y, size, 0, TAU)
        context.fill()
        context.globalAlpha = turnOn * .9
        context.fillStyle = '#ffffff'
        context.beginPath()
        context.arc(point.x - size * .25, point.y - size * .25, size * .32, 0, TAU)
        context.fill()
      }
      context.globalAlpha = 1
    }

    function drawComet(time) {
      const progress = clamp((time - COMET_START) / (STAR_AT - COMET_START), 0, 1)
      if (progress <= 0 || time > STAR_AT + .3) return
      const y = geom.treeH * easeInOut(progress)
      const point = project(0, y, 0)
      const base = project(0, 0, 0)
      const top = project(0, geom.treeH, 0)
      context.globalCompositeOperation = 'lighter'
      const g = context.createLinearGradient(base.x, base.y, point.x, point.y)
      g.addColorStop(0, hexToRgba(theme.primary, 0))
      g.addColorStop(.7, hexToRgba(theme.primary, .22))
      g.addColorStop(1, hexToRgba(theme.pale, .8))
      context.globalAlpha = .75
      context.strokeStyle = g
      context.lineWidth = 2
      context.beginPath()
      context.moveTo(base.x, base.y)
      context.lineTo(point.x, point.y)
      context.stroke()

      const glow = context.createRadialGradient(point.x, point.y, 0, point.x, point.y, 22)
      glow.addColorStop(0, hexToRgba('#ffffff', .95))
      glow.addColorStop(.35, hexToRgba(theme.pale, .45))
      glow.addColorStop(1, hexToRgba(theme.primary, 0))
      context.globalAlpha = 1
      context.fillStyle = glow
      context.beginPath()
      context.arc(point.x, point.y, 22, 0, TAU)
      context.fill()
      void top
    }

    function drawStar(time) {
      const alpha = clamp((time - STAR_AT) / .55, 0, 1)
      if (alpha <= 0) return
      const point = project(0, geom.treeH + 8, 0)
      const cx = point.x, cy = point.y
      const size = 22
      context.globalCompositeOperation = 'lighter'
      const glow = context.createRadialGradient(cx, cy, 0, cx, cy, size * 3.6)
      glow.addColorStop(0, hexToRgba('#ffffff', .42 * alpha))
      glow.addColorStop(.27, hexToRgba(theme.pale, .18 * alpha))
      glow.addColorStop(1, hexToRgba(theme.primary, 0))
      context.globalAlpha = 1
      context.fillStyle = glow
      context.beginPath()
      context.arc(cx, cy, size * 3.6, 0, TAU)
      context.fill()

      context.save()
      context.translate(cx, cy)
      context.rotate(Math.sin(time * .3) * .04)
      context.beginPath()
      for (let i = 0; i < 8; i++) {
        const r = i % 2 === 0 ? size : size * .24
        const a = -Math.PI / 2 + i * Math.PI / 4
        const x = Math.cos(a) * r, y = Math.sin(a) * r
        i === 0 ? context.moveTo(x, y) : context.lineTo(x, y)
      }
      context.closePath()
      context.fillStyle = hexToRgba('#ffffff', alpha)
      context.fill()
      context.strokeStyle = hexToRgba(theme.pale, alpha)
      context.lineWidth = .8
      context.stroke()
      context.restore()

      // 长十字星芒：中间亮、两端透明，像参考动画里的星芒
      for (const [angle, length, width] of [[0, 6.4, 1.5], [Math.PI / 2, 5.8, 1.5], [Math.PI / 4, 3.6, .7], [-Math.PI / 4, 3.6, .7]]) {
        const beamLength = size * length
        const beamWidth = Math.max(.7, width)
        const beamAlpha = length > 4 ? .62 : .16
        context.save()
        context.translate(cx, cy)
        context.rotate(angle)
        const beam = context.createLinearGradient(-beamLength, 0, beamLength, 0)
        beam.addColorStop(0, hexToRgba(theme.pale, 0))
        beam.addColorStop(.36, hexToRgba(theme.pale, .12 * alpha * beamAlpha))
        beam.addColorStop(.5, hexToRgba('#ffffff', alpha * beamAlpha))
        beam.addColorStop(.64, hexToRgba(theme.pale, .12 * alpha * beamAlpha))
        beam.addColorStop(1, hexToRgba(theme.pale, 0))
        context.fillStyle = beam
        context.fillRect(-beamLength, -beamWidth / 2, beamLength * 2, beamWidth)
        context.restore()
      }

      context.globalAlpha = alpha * .16
      context.strokeStyle = theme.pale
      context.lineWidth = .8
      context.beginPath()
      context.moveTo(cx - size * 1.8, cy - size * 1.8)
      context.lineTo(cx + size * 1.8, cy + size * 1.8)
      context.moveTo(cx + size * 1.8, cy - size * 1.8)
      context.lineTo(cx - size * 1.8, cy + size * 1.8)
      context.stroke()
      context.globalAlpha = 1
    }

    function drawRing(time) {
      const p = clamp((time - RING_AT) / 1.35, 0, 1)
      if (p <= 0) return
      const expand = easeOut(p)
      const fade = 1 - smooth(RING_AT + .95, RING_AT + 1.5, time)
      if (fade <= 0) return
      const ringRadius = geom.radius * (.16 + .94 * expand)
      const radiusFactor = 1 + p * .30
      context.globalCompositeOperation = 'lighter'
      context.globalAlpha = .14 * (1 - p) * fade
      context.strokeStyle = theme.pale
      context.lineWidth = 1
      context.beginPath()
      for (let i = 0; i <= 64; i++) {
        const angle = i / 64 * TAU
        const point = project(Math.cos(angle) * ringRadius, geom.treeH + 8, Math.sin(angle) * ringRadius)
        i === 0 ? context.moveTo(point.x, point.y) : context.lineTo(point.x, point.y)
      }
      context.stroke()

      for (const item of ring) {
        const angle = item.angle + time * .1
        const radius = ringRadius * item.factor * radiusFactor
        const y = geom.treeH + 8
        const point = project(Math.cos(angle) * radius, y, Math.sin(angle) * radius)
        const twinkle = .55 + .45 * Math.sin(time * 2.2 + item.phase)
        context.globalAlpha = fade * p * (.28 + .55 * twinkle)
        context.fillStyle = item.color
        context.beginPath()
        context.arc(point.x, point.y, item.size * (1 - p * .25), 0, TAU)
        context.fill()
        if (item.size > 1.8) {
          context.globalAlpha = fade * p * .08
          context.beginPath()
          context.arc(point.x, point.y, item.size * 4, 0, TAU)
          context.fill()
        }
      }
      context.globalAlpha = 1
    }

    function draw(time) {
      if (!width || !height) return
      now = time
      context.clearRect(0, 0, width, height)
      context.globalCompositeOperation = 'source-over'
      drawAurora(time)
      drawStars3D(time)
      drawForest3D(time)
      drawDust(time)
      drawSnow(time)
      drawFireworks(time)
      drawBase(time)
      drawSeed(time)
      drawRingLayer(time)
      drawSkeleton(time)
      drawFuzz(time)
      drawRibbon(time)
      drawLine(time)
      drawLights(time)
      drawOrnaments(time)
      drawBokeh(time)
      drawExplosionRing(time)
      drawStar(time)
      drawRing(time)
      applyBloom()
    }

    function loop(now) {
      if (!width || !height) {
        frame = requestAnimationFrame(loop)
        return
      }
      const drag = camDrag.current
      if (!dragRef.current.active) {
        drag.yaw += drag.velYaw
        drag.pitch += drag.velPitch
        drag.velYaw *= .93
        drag.velPitch *= .93
      }
      const time = reduced ? 10.2 : (now - start) / 1000
      const frameIndex = Math.floor(time * 30)
      if (reduced || frameIndex !== lastFrame) {
        lastFrame = frameIndex
        draw(time)
      }
      if (!reduced) frame = requestAnimationFrame(loop)
    }

    function resize() {
      width = canvas.clientWidth
      height = canvas.clientHeight
      dpr = Math.min(mobile ? 1.25 : 2, window.devicePixelRatio || 1)
      canvas.width = Math.max(1, Math.round(width * dpr))
      canvas.height = Math.max(1, Math.round(height * dpr))
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      bloomA = document.createElement('canvas')
      bloomA.width = Math.max(1, Math.round(canvas.width / (mobile ? 6 : 4)))
      bloomA.height = Math.max(1, Math.round(canvas.height / (mobile ? 6 : 4)))
      bloomB = document.createElement('canvas')
      bloomB.width = Math.max(1, Math.round(canvas.width / (mobile ? 12 : 8)))
      bloomB.height = Math.max(1, Math.round(canvas.height / (mobile ? 12 : 8)))
      buildGeometry()
      lastFrame = -1
      start = performance.now()
      if (reduced) {
        draw(10.2)
        setReady(true)
      }
    }

    window.addEventListener('resize', resize)
    resize()
    if (!reduced) frame = requestAnimationFrame(loop)
    const timer = reduced ? null : setTimeout(() => setReady(true), 10600)

    const wheelEl = canvasRef.current?.parentElement
    const onWheel = event => {
      event.preventDefault()
      const drag = camDrag.current
      drag.zoom = clamp(drag.zoom * Math.exp(-event.deltaY * .0012), .45, 2.6)
    }
    wheelEl?.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      window.removeEventListener('resize', resize)
      wheelEl?.removeEventListener('wheel', onWheel)
      cancelAnimationFrame(frame)
      if (timer) clearTimeout(timer)
    }
  }, [theme])

  function dragStart(event) {
    if (event.target.closest && event.target.closest('button')) return
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY })
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()]
      pinchDist.current = Math.hypot(a.x - b.x, a.y - b.y)
      dragRef.current.active = false
      return
    }
    dragRef.current = { active: true, x: event.clientX, y: event.clientY }
  }
  function dragMove(event) {
    if (!pointers.current.has(event.pointerId)) return
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY })
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()]
      const dist = Math.hypot(a.x - b.x, a.y - b.y)
      if (pinchDist.current > 0) {
        const drag = camDrag.current
        drag.zoom = clamp(drag.zoom * dist / pinchDist.current, .45, 2.6)
      }
      pinchDist.current = dist
      return
    }
    const state = dragRef.current
    if (!state.active) return
    const drag = camDrag.current
    const dx = event.clientX - state.x
    const dy = event.clientY - state.y
    state.x = event.clientX
    state.y = event.clientY
    drag.yaw += dx * .005
    drag.pitch += dy * .003
    drag.velYaw = dx * .005
    drag.velPitch = dy * .003
  }
  function dragEnd(event) {
    pointers.current.delete(event.pointerId)
    if (pointers.current.size < 2) dragRef.current.active = false
  }

  return (
    <section
      className={'intro ' + (closing ? 'intro-closing' : '')}
      aria-label="圣诞开场动画"
      data-theme={theme.id}
      style={{
        '--intro-a': theme.bgA, '--intro-b': theme.bgB, '--intro-c': theme.bgC,
        '--intro-glow-1': theme.glow1, '--intro-glow-2': theme.glow2, '--intro-glow-3': theme.glow3,
      }}
      onPointerDown={dragStart}
      onPointerMove={dragMove}
      onPointerUp={dragEnd}
      onPointerCancel={dragEnd}
      onTransitionEnd={event => { if (event.target === event.currentTarget && closing) callbacks.current.onFinish() }}
    >
      <canvas ref={canvasRef} aria-hidden="true" />
      <div className="intro-brand"><Snowflake size={18}/> AURORA NOËL</div>
      <button className="intro-skip" onClick={event => { event.stopPropagation(); finish(true) }}>跳过 <ChevronRight size={15}/></button>

      <div className="intro-theme" role="group" aria-label="主题颜色" onClick={event => event.stopPropagation()}>
        <span>主题</span>
        {themes.map(item => (
          <button
            key={item.id}
            type="button"
            className="intro-swatch"
            data-active={theme.id === item.id}
            aria-label={item.name}
            title={item.name}
            style={{ '--swatch-a': item.primary, '--swatch-b': item.accent }}
            onClick={event => { event.stopPropagation(); onTheme(item.id) }}
          />
        ))}
      </div>

      <div className="intro-copy">
        <Snowflake className="intro-flake" size={30} strokeWidth={.8} aria-hidden="true"/>
        <h1>Merry <em>Christmas</em></h1>
        <p>{name ? name + '，愿今夜的星光，落在你身旁。' : '愿今夜的星光，落在你身旁。'}</p>
        <div className="intro-rule"><span>✦</span></div>
      </div>

      <div className="intro-hint">拖动旋转视角</div>

      <div className="intro-enter">
        {ready && <button onClick={event => { event.stopPropagation(); finish() }}>
          {blocked ? <VolumeX size={17}/> : <ArrowDown size={17}/>}
          {blocked ? '进入主界面并开启音乐' : '进入主界面'}<ArrowRight size={16}/>
        </button>}
      </div>
    </section>
  )
}
