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
        display: "standalone",
      },
    }),
  ],
  root: "src",
  test: {
    environment: "happy-dom",
  },
});
