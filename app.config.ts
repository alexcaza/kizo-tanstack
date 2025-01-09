import { defineConfig } from "@tanstack/start/config";
import path from 'path'
import { fileURLToPath } from 'url'

// Require since we're using ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    vite: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'app'),
                '@/db': path.resolve(__dirname, 'db')
            }
        }
    }
});
