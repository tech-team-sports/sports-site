<template>
  <div class="animated-text"></div>
  <NewsList query="サッカー日本リーグ" />
  <linkReturn />
</template>

<script setup>
import NewsList from "~/components/news/NewsList.vue";
import linkReturn from "~/components/soccer/links/link-return.vue";
import { useGsapTextAnimation } from "~/composables/Gsap/useGsapTextAnimation";

useGsapTextAnimation("animated-text","Jリーグのニュースです")
</script>

<style scoped>
.animated-text {
  display: flex;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
}

</style>