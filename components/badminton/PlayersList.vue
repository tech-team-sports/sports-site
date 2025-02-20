<template>
  <div class="players-container">
    <h1>日本のバドミントン選手一覧</h1>
    <div class="players-list">
      <div v-for="player in players" :key="player.id" class="player-item">
        <img :src="player.image" :alt="player.name" class="player-image" />
        <div class="player-info">
          <h2>{{ player.name }}</h2>
          <p class="info-item"><strong>国籍:</strong> {{ player.nationality }}</p>
          <p class="info-item"><strong>生年:</strong> {{ player.birthYear }}</p>
          <p class="info-item"><strong>身長:</strong> {{ player.height }} cm</p>
          <p class="info-item"><strong>体重:</strong> {{ player.weight }} kg</p>
          <p class="info-item"><strong>利き手:</strong> {{ player.hand }}</p>
          <p class="info-item"><strong>プレースタイル:</strong> {{ player.playStyle }}</p>
          <p class="info-item"><strong>主な実績:</strong> {{ player.achievements }}</p>
          <p class="info-item"><strong>キャリアのハイライト:</strong> {{ player.careerHighlight }}</p>
          <p class="info-item"><strong>プレースタイル詳細:</strong> {{ player.playStyleDetail }}</p>
          <p class="info-item"><strong>名言:</strong> "{{ player.quote }}"</p>
          <p class="description">{{ player.description }}</p>
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
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  color: #1c1c1c;
}

h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 40px;
  color: #1e3a8a;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  background: linear-gradient(45deg, #1e88e5, #1565c0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.players-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding: 20px;
  justify-items: center;
}

.player-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  width: 100%;
  max-width: 600px;
}

.player-item img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;
}

.player-info {
  padding: 20px;
  line-height: 1.6;
  border-top: 2px solid #ddd; /* 上部の区切り線 */
  border-bottom: 2px solid #ddd; /* 下部の区切り線 */
}

.player-info h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #0d47a1;
  border-bottom: 3px solid #1e88e5;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.info-item {
  font-size: 1.2rem;
  margin: 10px 0;
  color: #37474f;
  font-weight: 500;
}

.info-item strong {
  color: #ff6f00;
  font-weight: 700;
}

.description {
  font-size: 1.1rem;
  margin-top: 15px;
  color: #263238;
}

@media (max-width: 768px) {
  .players-list {
    grid-template-columns: 1fr;
  }
}
</style>
