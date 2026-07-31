import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import path from "node:path";
import { fileURLToPath } from "node:url";

const currentFilePath =
  fileURLToPath(import.meta.url);

const currentDirectory =
  path.dirname(currentFilePath);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(
        currentDirectory,
        "./src",
      ),
    },
  },

  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },

  preview: {
    host: true,
    port: 4173,
    strictPort: true,
  },

  build: {
    target: "es2022",
    cssMinify: true,
    sourcemap: false,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 900,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            !id.includes(
              "node_modules",
            )
          ) {
            return undefined;
          }

          if (
            id.includes(
              "/react/",
            ) ||
            id.includes(
              "/react-dom/",
            ) ||
            id.includes(
              "/scheduler/",
            )
          ) {
            return "react-core";
          }

          if (
            id.includes(
              "framer-motion",
            ) ||
            id.includes(
              "/lenis/",
            ) ||
            id.includes(
              "/gsap/",
            )
          ) {
            return "animation";
          }

          if (
            id.includes(
              "i18next",
            ) ||
            id.includes(
              "react-i18next",
            ) ||
            id.includes(
              "i18next-browser-languagedetector",
            )
          ) {
            return "i18n";
          }

          if (
            id.includes(
              "lucide-react",
            )
          ) {
            return "icons";
          }

          if (
            id.includes(
              "@tanstack/react-query",
            ) ||
            id.includes(
              "/axios/",
            )
          ) {
            return "data";
          }

          if (
            id.includes(
              "@react-three/fiber",
            ) ||
            id.includes(
              "@react-three/drei",
            ) ||
            id.includes(
              "/three/",
            )
          ) {
            return "three";
          }

          return undefined;
        },
      },
    },
  },

  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "framer-motion",
      "lucide-react",
      "lenis",
      "i18next",
      "react-i18next",
      "i18next-browser-languagedetector",
    ],
  },
});