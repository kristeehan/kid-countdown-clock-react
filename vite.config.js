import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Kid Countdown Clock",
        short_name: "Countdown Clock",
        description: "A visual countdown clock for kids",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
          {
            src: "/path/to/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/path/to/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  root: "src",
  test: {
    environment: "happy-dom",
  },
});
