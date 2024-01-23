import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ogPlugin from 'vite-plugin-open-graph'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ogPlugin({
      // your Open Graph information config
      basic: {
        title: 'Celebfie - Chat with your favorite celebrities',
        description: 'Celebfie is a platform where you can chat with your favorite celebrities and get to know them better.',
        image: 'https://res.cloudinary.com/dzhl8bgd9/image/upload/v1705949513/prfdawpa7qmthwtk3tcb.png',
        url: 'https://celebfie.io',
        siteName: 'Celebfie',
      },
    }),
  ],
})