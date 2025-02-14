<template>
    <div class="players-container">
      <h1>日本のバドミントン選手一覧</h1>
      <div class="players-grid">
        <div v-for="player in players" :key="player.id" class="player-card">
          <img :src="player.image" :alt="player.name" class="player-image" />
          <div class="player-info">
            <h2>{{ player.name }}</h2>
            <p><strong>国籍:</strong> {{ player.nationality }}</p>
            <p><strong>生年:</strong> {{ player.birthYear }}</p>
            <p><strong>身長:</strong> {{ player.height }} cm</p>
            <p><strong>体重:</strong> {{ player.weight }} kg</p>
            <p><strong>利き手:</strong> {{ player.hand }}</p>
            <p><strong>プレースタイル:</strong> {{ player.playStyle }}</p>
            <p><strong>主な実績:</strong> {{ player.achievements }}</p>
            <p>{{ player.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import usePlayers from '@/composables/Badminton/usePlayers';
  
  export default {
    name: "Players",
    setup() {
      const { players } = usePlayers();
      return { players };
    },
  };
  </script>
  
  <style scoped>
  .players-container {
    text-align: center;
    padding: 40px 20px;
    background-color: #2c3e50; /* ダークな背景 */
    color: #ecf0f1; /* 白っぽい文字 */
  }
  
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 40px;
    color: #e74c3c; /* 明るい赤色 */
  }
  
  .players-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    padding: 20px;
    justify-items: center;
  }
  
  .player-card {
    background: linear-gradient(145deg, #ffffff, #dcdde1); /* グラデーション効果 */
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .player-card:hover {
    transform: translateY(-10px); /* カードの浮かび上がるアニメーション */
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2); /* ホバー時の影 */
  }
  
  .player-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
    transition: opacity 0.3s ease;
  }
  
  .player-image:hover {
    opacity: 0.8; /* 画像にホバー効果 */
  }
  
  .player-info h2 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #34495e; /* 少し暗い青 */
    margin-bottom: 15px;
  }
  
  .player-info p {
    font-size: 1rem;
    margin: 10px 0;
    color: #7f8c8d; /* 少し薄い色 */
  }
  
  .player-info strong {
    color: #e74c3c; /* 赤い強調色 */
  }
  </style>
  