import { defineConfig } from 'vite';

export default defineConfig({
    test: {
        environment: 'jsdom',
        setupFiles: './vite.setup.ts',
        globals: true,
    },
});
