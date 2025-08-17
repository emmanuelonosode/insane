import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default async () => {
  // load ESM-only plugin dynamically so esbuild/require doesn't try to load it
  const {cloudflare} = await import('@cloudflare/vite-plugin')

  return defineConfig({
    plugins: [
      react(),
      // configure the plugin as needed; adjust options below if you have any
      cloudflare(),
    ],
  })
}
