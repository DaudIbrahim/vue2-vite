import { defineConfig } from 'vite'
import { createVuePlugin as Vue2 } from 'vite-plugin-vue2'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'
const path = require('path')

export default defineConfig({
  plugins: [
    Vue2(),
    ScriptSetup({ /* options */ }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
})
