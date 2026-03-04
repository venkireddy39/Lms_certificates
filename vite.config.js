import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        open: true,
        proxy: {
            '/api': {
                target: 'http://192.168.1.63:5151',
                changeOrigin: true,
                secure: false,
            }
        }
    }
})
