import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import terser from "@rollup/plugin-terser";
import dts from "vite-plugin-dts";
import * as path from "path";
import { name } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            formats: ["es"],
            name,
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
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
    resolve: {
        alias: [
            {
                find: "@lib",
                replacement: path.resolve(__dirname, "src/index.ts"),
            },
        ],
    },
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
        terser(),
    ],
});
