import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, './src/styles'),
      "@components": path.resolve(__dirname, './src/components'),
      "@layouts": path.resolve(__dirname, './src/layouts'),
      "@base": path.resolve(__dirname, './src/base'),
      "@utils": path.resolve(__dirname, './src/utils'),
      "@fonts": path.resolve(__dirname, './src/fonts'),
    }
  },
  plugins: [react()],
})
