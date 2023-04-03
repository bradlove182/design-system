/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.tsx"
    ],
    darkMode: "class",
    theme: {
        colors: {
            gray: {
                0: "#ffffff",
                100: "#F6F7F9"
            }
        },
        extend: {},
    },
    plugins: [],
}

