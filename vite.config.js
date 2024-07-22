import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@components', replacement: '/src/components' },
            { find: '@hooks', replacement: '/src/components' },
            { find: '@pages', replacement: '/src/components' },
            { find: '@routers', replacement: '/src/components' },
            { find: '@styles', replacement: '/src/components' },
            { find: '@zustands', replacement: '/src/components' },
            { find: '@axios', replacement: '/src/components' },
            { find: '@', replacement: '/src' },
        ],
    },
});
