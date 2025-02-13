<template>
  <div class="players-page">
    <h1>バドミントン選手の紹介</h1>
    <div class="players-list">
      <div 
        v-for="(player, index) in players" 
        :key="index" 
        class="player-card"
      >
      <img :src="'/assets/img/badminton/' + player.image" :alt="player.name" class="player-image" />
        <div class="player-info">
          <h2>{{ player.name }}</h2>
          <p>{{ player.bio }}</p>
          <ul>
            <li>国籍: {{ player.country }}</li>
            <li>生年: {{ player.birthYear }}</li>
            <li>主な成績: {{ player.achievements.join(', ') }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { usePlayers } from '@/composables/Badminton/usePlayers';

export default {
  setup() {
    const { players } = usePlayers();
    return { players };
  }
}
</script>

<style scoped>
.players-page {
  padding: 40px 20px;
  background: linear-gradient(135deg, #a7c7e7, #e0e7f7);
  min-height: 100vh;
}

h1 {
  font-family: 'Poppins', sans-serif;
  text-align: center;
  font-size: 36px;
  margin-bottom: 40px;
  color: #333;
  letter-spacing: 1px;
}

.players-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
  justify-items: center;
}

.player-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background-color: #fff;
  padding: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  width: 100%;
  max-width: 350px;
}

.player-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.player-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #e0e7f7;
  margin-bottom: 20px;
}

.player-info {
  text-align: center;
}

.player-info h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.player-info p {
  font-size: 16px;
  color: #666;
  margin-bottom: 15px;
  line-height: 1.6;
}

.player-info ul {
  list-style-type: none;
  padding: 0;
}

.player-info li {
  font-size: 14px;
  color: #444;
  margin-bottom: 8px;
}

.player-info li span {
  font-weight: bold;
  color: #2a6fa6;
}
</style>
