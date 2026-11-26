// 主题是「开头动画 + 3D 场景 + 界面强调色」共用的一套色板。
// 预设之外还支持任意十六进制颜色，会自动推导出配套的极光、灯光和装饰色。

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

function hexToRgb(hex) {
  const value = hex.replace('#', '')
  const full = value.length === 3 ? value.split('').map(c => c + c).join('') : value
  return {
    r: parseInt(full.slice(0, 2), 16) / 255,
    g: parseInt(full.slice(2, 4), 16) / 255,
    b: parseInt(full.slice(4, 6), 16) / 255,
  }
}

function rgbToHex(r, g, b) {
  const to = value => Math.round(clamp(value, 0, 1) * 255).toString(16).padStart(2, '0')
  return '#' + to(r) + to(g) + to(b)
}

function rgbToHsl({ r, g, b }) {
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  const lightness = (max + min) / 2
  if (max === min) return { h: 0, s: 0, l: lightness }
  const delta = max - min
  const saturation = lightness > .5 ? delta / (2 - max - min) : delta / (max + min)
  let hue
  if (max === r) hue = (g - b) / delta + (g < b ? 6 : 0)
  else if (max === g) hue = (b - r) / delta + 2
  else hue = (r - g) / delta + 4
  return { h: hue * 60, s: saturation, l: lightness }
}

function hslToHex(h, s, l) {
  const hue = ((h % 360) + 360) % 360
  const sat = clamp(s, 0, 1)
  const light = clamp(l, 0, 1)
  const c = (1 - Math.abs(2 * light - 1)) * sat
  const x = c * (1 - Math.abs((hue / 60) % 2 - 1))
  const m = light - c / 2
  let r = 0, g = 0, b = 0
  if (hue < 60) [r, g, b] = [c, x, 0]
  else if (hue < 120) [r, g, b] = [x, c, 0]
  else if (hue < 180) [r, g, b] = [0, c, x]
  else if (hue < 240) [r, g, b] = [0, x, c]
  else if (hue < 300) [r, g, b] = [x, 0, c]
  else [r, g, b] = [c, 0, x]
  return rgbToHex(r + m, g + m, b + m)
}

function rgba(hex, alpha) {
  const { r, g, b } = hexToRgb(hex)
  return `rgba(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)},${alpha})`
}

export const THEMES = {
  silver: {
    id: 'silver', name: '月光银',
    primary: '#eaf4ff', accent: '#9fc7ff', pale: '#ffffff', ui: '#d6e7f5',
    line: 'rgba(210,232,255,.22)', soft: '#b9ccd8',
    star: '#ffffff', garland: '#dff0ff',
    warm: '#eaf5ff', cool: '#9bbcff', rim: '#cfe6ff',
    auroraA: '#bfe6ff', auroraB: '#7f9fff', fog: '#162431',
    needleTint: '#e6f2ff', needleAmount: .78, needleEmissive: '#9fc7ff',
    bgA: '#1a2a3a', bgB: '#0d1826', bgC: '#03070c',
    glow1: '#eaf4ff', glow2: '#8fb8ff', glow3: '#ffffff',
    settings: { primary: '#eaf4ff', accent: '#9fc7ff', box1: '#3b4d6b', box2: '#7a8fa8', bellColor: '#eaf4ff' },
  },
  rose: {
    id: 'rose', name: '玫瑰粉',
    primary: '#ff9ecb', accent: '#ff5f9e', pale: '#ffe6f0', ui: '#f3b8d0',
    line: 'rgba(255,183,212,.22)', soft: '#d8bcc7',
    star: '#ffd9e8', garland: '#ffc0d4',
    warm: '#ffd0e0', cool: '#b9c8ff', rim: '#ff6fae',
    auroraA: '#ff5fa2', auroraB: '#7b3cff', fog: '#2a1830',
    needleTint: '#ff6fae', needleAmount: .64, needleEmissive: '#ff4f93',
    bgA: '#2c1224', bgB: '#180d1d', bgC: '#05050c',
    glow1: '#ff5f9e', glow2: '#7b3cff', glow3: '#ffbfd8',
    settings: { primary: '#ffb7d4', accent: '#ff5f9e', box1: '#7a2340', box2: '#6b3a5a', bellColor: '#ffd1e8' },
  },
  gold: {
    id: 'gold', name: '经典金',
    primary: '#ffd98a', accent: '#ff5964', pale: '#fff3d9', ui: '#eec999',
    line: 'rgba(189,217,222,.19)', soft: '#bac9ce',
    star: '#ffd48c', garland: '#f3ad56',
    warm: '#ffe1a6', cool: '#a0dfff', rim: '#69cba3',
    auroraA: '#2fe8a8', auroraB: '#5f2a9e', fog: '#142b3b',
    needleTint: '#ffffff', needleAmount: 0, needleEmissive: '#000000',
    bgA: '#19394a', bgB: '#102633', bgC: '#030c15',
    glow1: '#1a796a', glow2: '#4d2564', glow3: '#425a80',
    settings: { primary: '#ffd98a', accent: '#ff5964', box1: '#a02a41', box2: '#2d7561', bellColor: '#f2c14e' },
  },
  ice: {
    id: 'ice', name: '冰蓝',
    primary: '#bfe8ff', accent: '#5f8eff', pale: '#eef8ff', ui: '#bcd9ee',
    line: 'rgba(180,220,255,.2)', soft: '#b8cbd7',
    star: '#eaf7ff', garland: '#cfe6ff',
    warm: '#dceaff', cool: '#8bbcff', rim: '#6fd8ff',
    auroraA: '#4fc9ff', auroraB: '#6f7bff', fog: '#152834',
    needleTint: '#9fd8ff', needleAmount: .22, needleEmissive: '#2b7cae',
    bgA: '#162b3c', bgB: '#0f1d2e', bgC: '#040910',
    glow1: '#4fc9ff', glow2: '#6f7bff', glow3: '#b7e4ff',
    settings: { primary: '#c9ecff', accent: '#5f8eff', box1: '#274a75', box2: '#2c6b6b', bellColor: '#dbeeff' },
  },
  aurora: {
    id: 'aurora', name: '极光绿',
    primary: '#9fffd4', accent: '#ffd98a', pale: '#eafff5', ui: '#a9e6c9',
    line: 'rgba(159,255,212,.2)', soft: '#b6cdc4',
    star: '#d8ffe9', garland: '#8fffc4',
    warm: '#ffe6b0', cool: '#9fd8ff', rim: '#6fffc0',
    auroraA: '#4dffc0', auroraB: '#5b3cff', fog: '#142b2b',
    needleTint: '#8fffc4', needleAmount: .16, needleEmissive: '#1b7a55',
    bgA: '#123a33', bgB: '#0d2029', bgC: '#030b0d',
    glow1: '#13e59c', glow2: '#5b3cff', glow3: '#9fffd4',
    settings: { primary: '#9fffd4', accent: '#ffd98a', box1: '#7a2340', box2: '#2e6b5b', bellColor: '#d8ffe9' },
  },
}

export const PRESET_THEMES = Object.values(THEMES)

export function themeFromColor(hex) {
  const h = hexToRgb(hex)
  const { h: hue, s, l } = rgbToHsl(h)
  const primary = rgbToHex(h.r, h.g, h.b)
  const accent = hslToHex(hue + 18, clamp(s + .08, 0, 1), clamp(l - .16, .38, .7))
  const pale = hslToHex(hue, clamp(s * .65, 0, .6), .92)
  const ui = hslToHex(hue, clamp(s * .75, 0, .7), .76)
  const star = pale
  const garland = hslToHex(hue, clamp(s, 0, .9), .78)
  const warm = hslToHex(hue, clamp(s * .7, 0, .8), .8)
  const cool = hslToHex(hue + 180, .42, .74)
  const rim = accent
  const auroraA = hslToHex(hue, clamp(s, .45, .95), .62)
  const auroraB = hslToHex(hue + 52, .7, .55)
  const needleTint = hslToHex(hue, .72, .64)
  const bgA = hslToHex(hue, .38, .14)
  const bgB = hslToHex(hue - 8, .34, .08)
  const box1 = hslToHex(hue - 10, .55, .24)
  const box2 = hslToHex(hue + 160, .32, .25)
  return {
    id: 'custom', name: '自定义',
    primary, accent, pale, ui,
    line: rgba(primary, .22), soft: hslToHex(hue, .18, .72),
    star, garland, warm, cool, rim,
    auroraA, auroraB, fog: hslToHex(hue, .3, .12),
    needleTint, needleAmount: .72, needleEmissive: accent,
    bgA, bgB, bgC: '#04050b',
    glow1: primary, glow2: auroraB, glow3: pale,
    settings: { primary: pale, accent, box1, box2, bellColor: pale },
  }
}

export function getTheme(key) {
  if (THEMES[key]) return THEMES[key]
  if (typeof key === 'string' && /^#[0-9a-f]{6}$/i.test(key)) return themeFromColor(key)
  return THEMES.silver
}
