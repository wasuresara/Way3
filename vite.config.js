/* eslint-env node */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { GET, POST } from "./api/chat.js";

function chatApi() {
  const handle = async (req, res, next) => {
    const path = req.url?.split("?")[0];
    if (path !== "/api/chat") {
      next();
      return;
    }
    const chunks = [];
    if (req.method !== "GET" && req.method !== "HEAD") {
      for await (const chunk of req) chunks.push(chunk);
    }
    const body = Buffer.concat(chunks);
    const request = new Request(
      `http://${req.headers.host || "127.0.0.1"}${req.url}`,
      {
        method: req.method,
        headers: req.headers,
        body: req.method === "GET" || req.method === "HEAD" ? undefined : body,
      },
    );
    const response = req.method === "GET" ? GET() : await POST(request);
    res.statusCode = response.status;
    response.headers.forEach((value, key) => res.setHeader(key, value));
    if (!response.body) {
      res.end();
      return;
    }
    const reader = response.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(value);
    }
    res.end();
  };

  return {
    name: "chat-api",
    configureServer(server) {
      server.middlewares.use(handle);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handle);
    },
  };
}

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
  plugins: [chatApi(), thankYouPage(), react()],
  base: "/",
  build: {
    assetsInlineLimit: 0, // Disable inlining assets
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // Create an alias for src directory
    },
  },
});
