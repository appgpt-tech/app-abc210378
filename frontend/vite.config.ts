//Source code generated by AppGPT (www.appgpt.tech)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/abc210378/',
  build: {
    outDir: '.output/abc210378',
    emptyOutDir: true,
  },
  server: {
    host: true,
    strictPort: true,
    port: 5173,
  },
});
