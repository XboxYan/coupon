import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {
  VitePWA
} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),VitePWA({
    manifest: {
      "name": "coupon.io",
      "short_name": "coupon",
      "start_url": ".",
      "display": "standalone",
      "background_color": "#fff",
      "description": "Generate Coupon-UI CSS code",
      "icons": [ {
        "src": "public/favicon.svg",
        "sizes": "72x72",
        "type": "image/png"
      }, {
        "src": "public/favicon.svg",
        "sizes": "144x144",
        "type": "image/png"
      }, {
        "src": "public/favicon.svg",
        "sizes": "192x192",
        "type": "image/png"
      }],
      "theme_color": "#4fc08d"
    },
  })]
})
