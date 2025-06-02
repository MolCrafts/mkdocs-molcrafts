import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
    plugins: [pluginReact()],
    html: {
        template({ entryName }) {
            const templates = {
                main: './src/main.html',
                404: './src/404.html',
            };
            return templates[entryName] || './src/main.html';
        },
    },
    source: {
        entry: {
            main: './src/main.tsx',
            404: './src/404.tsx',
        },
    },
});