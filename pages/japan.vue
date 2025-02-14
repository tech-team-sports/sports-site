<template>
  <div class="title">
    <h1 id="myText">This is the new text</h1>
  </div>
  <NewsList query="サッカー日本リーグ" />
  <linkReturn />
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import NewsList from "~/components/news/NewsList.vue";
import linkReturn from "~/components/soccer/links/link-return.vue";

gsap.registerPlugin(TextPlugin);

// onMounted を使って DOM がレンダリングされた後に GSAP を実行
onMounted(() => {
  gsap.to("#myText", { duration: 4, text: "Jリーグ", delay: 1 });
});
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 3rem;
}
</style>
