
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: "./src/components/index.tsx",
            name: "Design System",
            fileName: "design-system"
        },
        rollupOptions: {
            external: ["react"],
            output: {
                globals: {
                    react: "React"
                }
            },
            plugins: [react()]
        }
    }
})
