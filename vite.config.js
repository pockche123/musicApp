import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: false,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "bootstrap/dist/css/bootstrap.min.css";`,
      },
    },
  },
  server: {
    port: 3000, // Customize the port if needed
    open: true, // Automatically open the browser on server start
  },
  resolve: {
    alias: {
      // Add any custom aliases for your project
      '@components': '/src/components',
      '@styles': '/src/styles',
    },
  },
  build: {
    outDir: 'dist', // Specify the output directory for production builds
    sourcemap: true, // Generate source maps for better debugging
  },
});
