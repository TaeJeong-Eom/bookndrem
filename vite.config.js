import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: '/src/components' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@routers', replacement: '/src/routers' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@zustands', replacement: '/src/zustands' },
      { find: '@axios', replacement: '/src/axios' },
      { find: '@', replacement: '/src' },
    ],
  },
});
