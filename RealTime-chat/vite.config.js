import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@mui/icons-material': '@mui/icons-material/Menu', // Example alias
    },
  },
});