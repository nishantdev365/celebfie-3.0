// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import ogPlugin from 'vite-plugin-open-graph'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     ogPlugin({
//       // your Open Graph information config
//       basic: {
//         title: 'Celebfie 3.0 - Connect and converse with Celebs',
//         description: 'Celebfie 3.0 is a Conversational AI powered, where you can chat and connect with celebs',
//         image: 'https://res.cloudinary.com/dzhl8bgd9/image/upload/v1705949513/prfdawpa7qmthwtk3tcb.png',
//         url: 'https://celebfie.io',
//         siteName: 'Celebfie',
//       },
//     }),
//   ],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})