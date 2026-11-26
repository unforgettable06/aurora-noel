import { cp, mkdir, readdir } from 'node:fs/promises'

const source = new URL('../node_modules/@mediapipe/hands/', import.meta.url)
const target = new URL('../public/mediapipe/hands/', import.meta.url)
await mkdir(target, { recursive: true })
for (const filename of await readdir(source)) {
  if (filename.startsWith('hands') || filename.endsWith('.tflite')) {
    await cp(new URL(filename, source), new URL(filename, target))
  }
}
