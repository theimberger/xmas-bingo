import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    manifest: {
      "name": "Xmas Bingo",
      "short_name": "Xmas Bingo",
      "start_url": ".",
      "display": "standalone",
      "background_color": "#335555",
      "description": "The simplist budgeting app.",
      "icons": [],
      "theme_color": "#335555",
      "related_applications": []
    }
  })],
  base: '/xmas-bingo/'
})
