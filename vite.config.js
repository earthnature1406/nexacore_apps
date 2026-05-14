// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig(() => ({
//   plugins: [react()],
//   base: process.env.VITE_BASE_URL || '/',
//   server: {
//     port: 5173,
//     proxy: {
//       '/api': {
//         target: process.env.VITE_API_PROXY || 'http://localhost:3000',
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//   },
// }));

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/nexacore_apps/',

  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
