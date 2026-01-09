import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "react-path"; // Some setups use 'path' directly from node
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Set to '/' because you are using a custom domain
  base: "/",

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    // Only runs the tagger in development mode for better debugging
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      // Standard Lovable alias for cleaner imports (e.g., import from '@/components')
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    // Ensures the build output folder matches what GitHub Actions expects
    outDir: "dist",
    reportCompressedSize: true,
  }
}));
