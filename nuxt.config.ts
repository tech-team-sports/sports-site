export default defineNuxtConfig({
  css: ["@/assets/common/reset.css", "@/assets/common/global.css"],
  build: {
    transpile: ["swiper", "gsap"], 
  },
  components: true,
  pages: true,
  nitro: {
    preset: "static", 
  },
  compatibilityDate: "2025-02-15",
})