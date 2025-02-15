<template>
  <div class="animated-text"></div>
  <NewsList query="FIFAワールドカップ" />
  <linkReturn />
</template>

<script setup>
import NewsList from '~/components/news/NewsList.vue';
import linkReturn from '~/components/soccer/links/link-return.vue';
import { useGsapTextAnimation } from '~/composables/Gsap/useGsapTextAnimation';

useGsapTextAnimation("animated-text", "FIFAワールドカップのニュースです")
</script>

<style scoped>
.animated-text {
  margin-top: 2rem;
  max-width: 1200px;
  padding: 1rem;
  margin: 0 auto;
  text-align: center;
  color: aquamarine;
}

.animated-text span {
  display: inline-block;
}

@media screen and (min-width: 1024px) {
  .animated-text {
    font-size: 2.5rem;
}
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .animated-text {
    font-size: 2.25rem;
}
}

@media screen and (max-width: 767px) {
  .animated-text {
    font-size: 2rem;
    text-align: start;
}
}


</style>
  