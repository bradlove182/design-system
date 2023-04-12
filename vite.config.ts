import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: "./src/index.ts",
            formats: ["es"],
            name: "Design System",
            fileName: "index",
        },
        target: "esnext",
        minify: false,
        sourcemap: true,
        rollupOptions: {
            external: ["react", "react-dom"],
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
    plugins: [dts()],
});
