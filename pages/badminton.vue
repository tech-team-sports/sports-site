<template>
  <div class="badminton-intro">
    <BadTOP />
    <BadSlider />
    
    <!-- データがロードされる前に表示しないように条件分岐 -->
    <h1 class="title" v-if="badmintonData.title">{{ badmintonData.title }}</h1>
    <p class="description" v-if="badmintonData.description">{{ badmintonData.description }}</p>

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
.badminton-intro {
  font-family: 'Poppins', sans-serif;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.title {
  font-size: 4rem; /* タイトルのサイズを統一 */
  font-weight: bold;
  color: #000; /* 必要に応じて色も調整 */
  text-align: center;
}

.subheading {
  font-size: 1.5rem;
  margin-top: 20px;
  color: #444;
}

.description {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
}

.rules {
  list-style-type: disc;
  margin-left: 20px;
}

.rules li {
  font-size: 1rem;
  color: #444;
  margin-bottom: 10px;
}
</style>
