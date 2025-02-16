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

  // Add baseURL for GitHub Pages
  app: {
    baseURL: "/sports-site/", // Change this to match your GitHub repository name
    cdnURL: "https://tech-team-sports.github.io/sports-site/" // Force absolute paths
  },
})

