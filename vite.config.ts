import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Em domínio próprio (ou Vercel/Netlify) fica "/".
  // No GitHub Pages sem domínio: VITE_BASE=/nome-do-repositorio/
  base: process.env.VITE_BASE || '/',
})
