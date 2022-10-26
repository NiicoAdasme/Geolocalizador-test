import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // 'autoUpdate'
      injectRegister: 'auto', // default: 'auto',
      strategies: 'injectManifest',
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      devOptions: {
        enabled: true,
        type: 'module'
      },
      manifest: {
        name: 'Geolocalizador',
        short_name: 'Geolocalizador',
        description: 'Aplicacion de Geolocalizacion',
        theme_color: '#00000',
        icons: [
          {
            src: 'camanchaca300x204.jpg',
            sizes: '192x192',
            type: 'image/jpg'
          },
          {
            src: 'camanchaca512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'camanchaca400.jpeg',
            sizes: '400x400',
            type: 'image/jpeg'
          },
          {
            src: 'camanchaca680.png',
            sizes: '680x680',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        cleanupOutdatedCaches: true,
        sourcemap: true
      }
    })
  ]
})
