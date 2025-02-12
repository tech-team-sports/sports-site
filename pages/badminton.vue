<template>
  <div class="badminton-intro">
    <BadTOP />
    <BadSlider />
    <h1 class="title">{{ badmintonData.title }}</h1>
    <p class="description">{{ badmintonData.description }}</p>

    <div v-for="section in badmintonData.sections" :key="section.heading">
      <h2 class="subheading">{{ section.heading }}</h2>
      <p class="description">{{ section.content }}</p>

      <!-- リストがある場合に表示 -->
      <ul v-if="section.listItems">
        <li v-for="item in section.listItems" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useBadminton } from '@/composables/useBadminton';
import BadSlider from '/components/badminton/BadSlider.vue';
import BadTOP from '/components/badminton/BadTOP.vue';
import BadAnimation from '/components/badminton/BadAnimation.vue';
const { badmintonData } = useBadminton();
</script>

<style scoped>
.title {
  font-size: 4rem; /* 一番大きいタイトルのサイズを指定 */
  font-weight: bold;
  color: #000; /* 必要に応じて色も調整 */
}
</style>
