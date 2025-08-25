import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // Use relative paths
  build: {
    assetsInlineLimit: 0, // Disable inlining assets
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Create an alias for src directory
    },
  },
});
