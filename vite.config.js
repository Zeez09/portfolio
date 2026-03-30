import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 800, // optional
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react-vendor";
            if (id.includes("gsap")) return "gsap";
            if (id.includes("swiper")) return "swiper";
            if (id.includes("react-icons") || id.includes("lucide-react")) return "icons";
            return "vendor";
          }
        },
      },
    },
  },
});