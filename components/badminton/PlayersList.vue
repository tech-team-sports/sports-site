<template>
  <div class="players-container">
    <h1>日本のバドミントン選手一覧</h1>
    <div class="players-list">
      <div v-for="player in players" :key="player.id" class="player-item">
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
          <p><strong>キャリアのハイライト:</strong> {{ player.careerHighlight }}</p>
          <p><strong>プレースタイル詳細:</strong> {{ player.playStyleDetail }}</p>
          <p><strong>名言:</strong> "{{ player.quote }}"</p>
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
  background-color: #f4f4f9;
  color: #333;
}

h1 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 40px;
  color: #e74c3c;
}

.players-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* デフォルトでは2列 */
  gap: 30px;
  padding: 20px;
  justify-items: center;
}

.player-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  padding: 20px;
  width: 100%;
  max-width: 600px;
}

.player-item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
}

.player-info {
  padding: 15px;
  border-top: 2px solid #ddd; /* 上部の区切り線 */
  border-bottom: 2px solid #ddd; /* 下部の区切り線 */
}

.player-info h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #34495e;
  margin-bottom: 10px;
}

.player-info p {
  font-size: 1.1rem;
  margin: 8px 0;
  color: #7f8c8d;
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .players-list {
    grid-template-columns: 1fr; /* 画面が768px以下の時は1列 */
  }
}
</style>
