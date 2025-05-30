import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv/config'


// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.TOKEN_KEY': JSON.stringify(process.env.TOKEN_KEY)
    },
    plugins: [react()],
    base: "/foodie-recipe",
  }}
)