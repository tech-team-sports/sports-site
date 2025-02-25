<template>
    <div class="techniques-section">
      <h1 class="title">バドミントン必勝テクニック</h1>
      <div class="techniques-list">
        <div v-for="(technique, index) in techniques" :key="index" class="technique-item">
          <div class="technique-info">
            <h2>{{ technique.name }}</h2>
            <img :src="technique.image" :alt="technique.name" class="technique-image" />
            <p>{{ technique.description }}</p>
            <h3>Point</h3> 
            <p class="point">{{ technique.pointsText }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useTechniques } from '@/composables/Badminton/useTechniques';
  
  const { techniques } = useTechniques();
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');

  .techniques-section {
    text-align: center;
    padding: 3rem;
    background-color: #f9f9f9;
  }
  
  .title {
    font-size: 3.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 3rem;
  }
  
  /* 幅を広く調整 */
  .techniques-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    justify-content: center;
    max-width: 1200px; /* 最大幅を広げる */
    margin: 0 auto;
    padding-left: 1rem;  /* 左の余白を追加 */
    padding-right: 1rem; /* 右の余白を追加 */
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
    max-width: 450px;
    height: auto;
    border-radius: 15px;
    margin-bottom: 1.5rem;
  }
  
  /* 情報セクション */
  .technique-info {
    text-align: left;
    width: 100%;
    max-width: 900px; /* 最大幅を少し広げる */
    margin: 0 auto;
  }
  
  .technique-info h2 {
    font-size: 2rem;
    margin-bottom: 0.75rem;
    color: #fff; /* タイトルの色を白に変更 */
    background-color: #333; /* 背景色を濃い色に */
    padding: 0.7rem 1.2rem; /* パディングを追加して四角い背景を作る */
    border-radius: 8px; /* 角を丸める */
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2); /* 軽いシャドウを追加して立体感を出す */
  }

  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    font-weight: bold;
    color: #ff0000;
    padding: 20px;
    margin-top: 30px;
    margin-left: 40px;
    letter-spacing: 2px; /* 文字間隔を広げて強調 */
}

.point {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #ffffff;
    line-height: 1.6; /* 読みやすさ向上のため行間を広げる */
    background-color: #ff6464;
    border-radius: 20px;
    padding: 30px;
    width: 800px;
    margin: 0 auto; /* 中央に配置 */
}

@media (max-width: 1024px) {
  .title {
    font-size: 2.5rem;
    margin-top: 30px;
  }

  .techniques-list {
    flex-direction: column;
    align-items: center;
  }

  .technique-info {
    max-width: 100%;
    padding: 0 15px;
  }

  .technique-info h2 {
    font-size: 1.8rem;
    padding: 0.6rem 1rem;
  }

  h3 {
    font-size: 2rem;
    margin-left: 20px;
    padding: 15px;
  }

  .point {
    font-size: 1rem;
    padding: 20px;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .techniques-section {
    padding: 20px;
  }

  .title {
    font-size: 2.2rem;
  }

  .technique-info h2 {
    font-size: 1.5rem;
    padding: 0.5rem 0.8rem;
  }

  h3 {
    font-size: 1.8rem;
    padding: 10px;
  }

  .point {
    font-size: 0.9rem;
    padding: 15px;
  }
}

@media (max-width: 500px) {
  .techniques-section {
    padding: 10px;
  }

  .title {
    font-size: 1.8rem;
  }

  .technique-image {
    max-width: 100%;
  }

  .technique-info h2 {
    font-size: 1.3rem;
    padding: 0.4rem 0.7rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  .point {
    font-size: 0.85rem;
    padding: 10px;
  }
}

  </style>
  