import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
    },
  },
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['yukifury.ngrok.dev', '0ab4172df512.ngrok-free.app'],
  },
});
