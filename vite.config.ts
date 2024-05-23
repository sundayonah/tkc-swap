// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@web3modal/ethers/react': '@web3modal/ethers5/react' // Adjust if necessary
    }
  }
})
