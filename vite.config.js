import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {
  VitePWA
} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),VitePWA({
    registerType: 'autoUpdate',
    manifest: {
      "name": "coupon.io",
      "short_name": "coupon",
      "start_url": ".",
      "display": "standalone",
      "background_color": "#fff",
      "description": "Generate Coupon-UI CSS code",
      "icons": [{
        "src": "icon.svg",
        "sizes": "256x256",
      }],
      "theme_color": "#4fc08d"
    },
  })]
})
