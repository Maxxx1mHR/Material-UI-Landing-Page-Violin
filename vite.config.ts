import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@context": path.resolve(__dirname, "src/context"),
      "@components": path.resolve(__dirname, "src/components"),
      "@interfaces": path.resolve(__dirname, "src/interfaces"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
});
