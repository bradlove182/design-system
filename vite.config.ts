import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        minify: true,
        rollupOptions: {
            output: {
                globals: {
                    react: "React",
                },
            },
            plugins: [react()],
        },
    },
    resolve: {
        alias: [
            {
                find: "@components",
                replacement: path.resolve(__dirname, "src/index.ts"),
            },
        ],
    },
});
