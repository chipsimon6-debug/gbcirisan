import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        // Exclude verification files and sitemaps from SW caching/rewriting
        navigateFallbackDenylist: [/^\/google.*\.html$/, /^\/sitemap\.xml$/],
        globIgnores: ['google*.html', 'sitemap.xml'],
      },
      manifest: {
        name: 'Grace Baptist Church Irisan Mission',
        short_name: 'GBC Irisan',
        description:
          'A gospel-centered church committed to Christ, His Word, and serving the people of Irisan with compassion and grace.',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})