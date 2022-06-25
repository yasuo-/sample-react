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
  resolve: {
    alias: {
      '@/': `${__dirname}/src/`,
      '@public/': `${__dirname}/public/`,
    },
  },
});
