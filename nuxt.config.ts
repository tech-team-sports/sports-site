export default defineNuxtConfig({
  app: {
    baseURL: '/sports-site/',  
  },
  css: ["@/assets/common/reset.css", "@/assets/common/global.css"],
  build: {
    transpile: ["swiper", "gsap"], 
  },
  components: true,
  pages: true,
  nitro: {
    preset: "static", 
  },
})
