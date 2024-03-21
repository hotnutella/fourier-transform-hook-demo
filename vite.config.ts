import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fourier-transform-hook-demo/',
  build: {
    outDir: 'dist',
  },
});
