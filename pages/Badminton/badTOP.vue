<template>
  <div>
    <BadSlider />
    <BadContents />
    
    <div class="badminton-intro">
      <h1 class="title" v-if="badmintonData.title">{{ badmintonData.title }}</h1>
      <p class="description" v-if="badmintonData.description">{{ badmintonData.description }}</p>

      <div v-for="section in badmintonData.sections" :key="section.heading" class="section">
        <h2 class="subheading">{{ section.heading }}</h2>
        <div v-for="subsection in section.subsections" :key="subsection.title" class="subsection">
          <h3 class="sub-subheading">{{ subsection.title }}</h3>
          <p class="description">{{ subsection.content }}</p>

          <ul v-if="subsection.listItems" class="list-items">
            <li v-for="item in subsection.listItems" :key="item" class="list-item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
    <NewsList query="バドミントン" />
  </div>
</template>

<script setup>
import { useBadminton } from '@/composables/Badminton/useBadminton';
import BadSlider from '/components/badminton/BadSlider.vue';
import BadContents from '/components/badminton/BadContents.vue';
import NewsList from "@/components/news/NewsList.vue";

const { badmintonData } = useBadminton();
</script>

<style scoped>
/* 全体レイアウト */
.badminton-intro {
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* タイトル */
.title {
  font-size: 4.5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  text-align: center;
  color: #333;
  letter-spacing: -1px;
  margin-bottom: 2rem;
}

/* 概要テキスト */
.description {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 4rem;
}

/* セクションごとのデザイン */
.section {
  margin-bottom: 4rem;
}

/* サブタイトルのデザイン */
.subheading {
  font-size: 2.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #4CAF50;
  padding-bottom: 0.5rem;
}

/* サブセクションのタイトル */
.sub-subheading {
  font-size: 2.2rem;
  font-weight: 600;
  margin-top: 2rem;
  color: #4CAF50;
}

/* 各リストアイテムのスタイル */
.list-items {
  margin-top: 1rem;
  padding-left: 20px;
  font-size: 1.1rem;
}

.list-item {
  margin-bottom: 1rem;
  color: #333;
  line-height: 1.6;
  position: relative;
}

/* リストアイテムにアイコンを追加 */
.list-item::before {
  content: '▶';
  position: absolute;
  left: -25px;
  color: #4CAF50;
  font-size: 1.5rem;
}

/* ホバーエフェクト */
.list-item:hover {
  color: #4CAF50;
  transition: color 0.3s ease-in-out;
}


/* スクロールに伴う動き */
@media (max-width: 768px) {
  .title {
    font-size: 3rem;
  }

  .subheading {
    font-size: 2rem;
  }

  .sub-subheading {
    font-size: 1.8rem;
  }
}
</style>
