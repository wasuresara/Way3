import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

function thankYouPage() {
  const rewrite = (req, _res, next) => {
    const path = req.url?.split("?")[0];
    if (path === "/thankyou" || path === "/thankyou/") {
      req.url = "/thankyou.html";
    }
    next();
  };

  return {
    name: "thankyou-page",
    configureServer(server) {
      server.middlewares.use(rewrite);
    },
    configurePreviewServer(server) {
      server.middlewares.use(rewrite);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [thankYouPage(), react()],
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
