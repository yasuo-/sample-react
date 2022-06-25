import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: "./env",
  publicDir: "./public",
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@/": `${__dirname}/src/`,
      "@public/": `${__dirname}/public/`,
    },
  },
})
