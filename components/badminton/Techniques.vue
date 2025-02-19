<template>
    <div class="techniques-section">
      <h2 class="title">✨ バドミントン必勝テクニック ✨</h2>
      <div class="techniques-list">
        <div v-for="(technique, index) in techniques" :key="index" class="technique-item">
          <div class="technique-info">
            <h3>{{ technique.name }}</h3>
            <p>{{ technique.description }}</p>
            <ul>
              <li v-for="(point, i) in technique.points" :key="i">{{ point }}</li>
            </ul>
          </div>
          <img :src="technique.image" :alt="technique.name" class="technique-image" />
        </div>
      </div>
    </div>
</template>
  
<script setup>
import { useTechniques } from '@/composables/Badminton/useTechniques';

const { techniques } = useTechniques();
</script>
  
<style scoped>
.techniques-section {
  text-align: center;
  padding: 3rem;
  background-color: #f9f9f9;
}
  
.title {
  font-size: 2.2rem;
  font-weight: bold;
  color: #333;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
}
  
/* 1つのアイテム表示に変更 */
.techniques-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  max-width: 1400px;
  margin: 0 auto;
}
  
/* 各技のデザイン */
.technique-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
  
/* 画像デザイン */
.technique-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 15px;
  margin-bottom: 1.5rem;
}
  
/* 情報セクション */
.technique-info {
  text-align: left;
  width: 100%;
}
  
.technique-info h3 {
  font-size: 1.8rem;
  margin-bottom: 0.75rem;
  color: #fff; /* タイトルの色を白に変更 */
  background-color: #333; /* 背景色を濃い色に */
  padding: 0.5rem 1rem; /* パディングを追加して四角い背景を作る */
  border-radius: 8px; /* 角を丸める */
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2); /* 軽いシャドウを追加して立体感を出す */
  display: inline-block; /* 背景がタイトルにぴったり合わせるように */
}

  
.technique-info p {
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
}
  
.technique-info ul {
  padding-left: 1.8rem;
}
  
.technique-info li {
  font-size: 1rem;
  list-style: disc;
}
  
/* レスポンシブ対応 */
@media (max-width: 800px) {
  .technique-info h3 {
    font-size: 1.6rem;
  }
  
  .technique-info p {
    font-size: 1rem;
  }
  
  .technique-info li {
    font-size: 0.9rem;
  }
}
</style>
