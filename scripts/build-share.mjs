import { build } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const out = path.join(root, 'dist-share')
const shareDir = path.join(root, 'share')

await build({ root, configFile: path.join(root, 'vite.share.config.js') })

const indexPath = path.join(out, 'index.html')
let html = fs.readFileSync(indexPath, 'utf8')
const jsFile = fs.readdirSync(out).find(file => file === 'app.js') || fs.readdirSync(out).find(file => file.endsWith('.js'))
const cssFile = fs.readdirSync(out).find(file => file.endsWith('.css'))
if (!jsFile || !cssFile) throw new Error('single-file build: app.js / css not found')

let js = fs.readFileSync(path.join(out, jsFile), 'utf8').replace(/<\/script/gi, '<\\/script')
let css = fs.readFileSync(path.join(out, cssFile), 'utf8').replace(/<\/style/gi, '<\\/style')
const audioFiles = {
  biscuit: 'biscuit-and-tea.mp3',
  mismatch: 'mismatch.mp3',
  'silent-night': 'silent-night-music-box.mp3',
}
const audioTracks = Object.fromEntries(Object.entries(audioFiles).map(([id, file]) => [
  id,
  `data:audio/mpeg;base64,${fs.readFileSync(path.join(root, 'public/audio', file)).toString('base64')}`,
]))

// 音频、分享标记必须在模块执行前就位
const boot = `<script>window.__AURORA_SHARE__=true;window.__AURORA_AUDIO_TRACKS__=${JSON.stringify(audioTracks)};</script>`

html = html
  .replace(/<link[^>]+rel=["']icon["'][^>]*>/gi, '')
  .replace(/<link[^>]+rel=["']modulepreload["'][^>]*>/gi, '')
  .replace(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi, () => `<style>${css}</style>`)
  .replace(/<script[^>]*src=["'][^"']*\.js["'][^>]*><\/script>/i, () => `${boot}<script type="module">${js}</script>`)

fs.mkdirSync(shareDir, { recursive: true })
fs.writeFileSync(path.join(shareDir, 'index.html'), html)
const size = fs.statSync(path.join(shareDir, 'index.html')).size
console.log(`share/index.html  ${(size / 1024 / 1024).toFixed(2)} MB`)
if (/src=["']\.\/|href=["']\.\/(?!data:)/i.test(html.replace(/<style>[\s\S]*?<\/style>/i, ''))) {
  console.warn('warning: share html still references a relative asset')
}
