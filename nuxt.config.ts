export default defineNuxtConfig({
  css: ["@/assets/reset.css"],
  compatibilityDate: "2025-02-05",
  pages: true,
  components: true,
  build: {
    transpile: ["swiper"], 
  },
});
