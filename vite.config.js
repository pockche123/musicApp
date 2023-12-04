import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: false,
    preprocessorOptions: {
      scss: {
        // Include an alias for Bootstrap's CSS
        additionalData: `@import "bootstrap/dist/css/bootstrap.min.css";`,
      },
    },
  },
});
