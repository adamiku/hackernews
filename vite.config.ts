import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());
    const envWithProcessPrefix = Object.entries(env).reduce(
        (prev, [key, val]) => {
            return {
                ...prev,
                ['process.env.' + key]: `"${val}"`,
            };
        },
        {}
    );
    return {
        define: envWithProcessPrefix,
        plugins: [react()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
    };
});
