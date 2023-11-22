import path from "path";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vitest/config";

// NOTE: 現状はテストにのみ利用している
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  test: {
    watch: false,
    globals: true,
    environment: "jsdom",
    include: ["**/__tests__/*.[jt]s?(x)"],
  },
});
