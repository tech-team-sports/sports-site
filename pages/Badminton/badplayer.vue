<template>
  <div>
    <BadTitle />
    <PlayersList />
    <Button />
  </div>
</template>

<script setup>
import BadTitle from '/components/badminton/BadTitle.vue';
import PlayersList from '/components/badminton/PlayersList.vue';
import Button from "/components/badminton/Button.vue";
</script>

<style scoped>
.players-page {
  padding: 60px 20px;
  background: linear-gradient(135deg, #3b8d99, #5aabbb);
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
}

h1 {
  text-align: center;
  font-size: 40px;
  margin-bottom: 50px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
}

.players-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  justify-items: center;
  padding: 0 20px;
}

.player-card {
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transform: scale(1);
  transition: all 0.3s ease-in-out;
  position: relative;
}

.card-inner {
  position: relative;
  overflow: hidden;
  height: 100%;
}

.player-card:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
}

.player-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.player-card:hover .player-image {
  transform: scale(1.1);
}

.player-info {
  padding: 20px;
  background-color: #f9f9f9;
  text-align: center;
}

.player-info h2 {
  font-size: 26px;
  color: #333;
  margin-bottom: 10px;
  font-weight: 600;
}

.player-info p {
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 15px;
}

.player-info ul {
  list-style-type: none;
  padding: 0;
}

.player-info li {
  font-size: 14px;
  color: #444;
  margin-bottom: 8px;
  font-weight: 500;
}

.player-info li span {
  font-weight: bold;
  color: #007BFF;
}

@media (max-width: 768px) {
  h1 {
    font-size: 32px;
  }

  .players-list {
    grid-template-columns: 1fr 1fr;
  }

  .player-card {
    max-width: 400px;
  }
}

@media (max-width: 480px) {
  .players-list {
    grid-template-columns: 1fr;
  }
}
</style>
