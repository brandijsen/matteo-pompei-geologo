import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/matteo-pompei-geologo/', // Sostituisci con il nome del tuo repository

  plugins: [react()],
})
