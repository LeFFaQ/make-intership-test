import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    base: "https://LeFFaQ.github.io/make-intership-test/",
    plugins: [
        tailwindcss(),
    ],
})