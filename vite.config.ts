import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: isSsrBuild ? 'dist/server' : 'dist/client',
    copyPublicDir: !isSsrBuild,
  },
}));
