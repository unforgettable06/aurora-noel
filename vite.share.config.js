import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 单文件分享版：一个 JS + 一个 CSS，字体内联；音频由 build-share.mjs 注入 data URI
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist-share',
    emptyOutDir: true,
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        entryFileNames: 'app.js',
        assetFileNames: '[name][extname]',
      },
    },
  },
})
