import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: './env',
  publicDir: './public',
  build: {
    sourcemap: true,
  },
  define: {
    // By default, Vite doesn't include shims for NodeJS/
    // necessary for segment analytics lib to work
    global: {},
  },
  resolve: {
    alias: {
      '@/': `${__dirname}/src/`,
      '@public/': `${__dirname}/public/`,
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
});
