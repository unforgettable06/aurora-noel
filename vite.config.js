import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    // OneDrive / 编辑器原子写入会产生临时目录，避免 watcher 因此 EBUSY 崩溃
    watch: { ignored: ['**/.*.tmpdir/**', '**/.*.tmpdir', '**/*.tmp'] },
  },
})
