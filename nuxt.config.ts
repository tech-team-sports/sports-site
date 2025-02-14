export default defineNuxtConfig({
  css: ["@/assets/common/reset.css","@/assets/common/global.css"],
  compatibilityDate: "2025-02-05",
  pages: true,
  components: true,
  build: {
    transpile: ["swiper","gsap"], 
  },
});
