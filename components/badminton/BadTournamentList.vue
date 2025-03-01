<template>
  <div class="tournament-container">
      <div v-for="(tournament, index) in tournaments" :key="index" class="tournament-card">
        <div class="tournament-header">
          <h1>{{ tournament.title }}</h1>
          <div class="tournament-details">
            <div class="detail-item">
              <h2>開催時期</h2>
              <p>{{ tournament.date }}</p>
            </div>
            <div class="detail-item">
              <h2>開催地</h2>
              <p>{{ tournament.location }}</p>
            </div>
            <div class="detail-item">
              <h2>大会の歴史</h2>
              <p>{{ tournament.history }}</p>
            </div>
            <div class="detail-item">
              <h2>大会の格式と重要性</h2>
              <p>{{ tournament.importance }}</p>
            </div>
            <div class="detail-item">
              <h2>視聴方法・放送情報</h2>
              <p>{{ tournament.broadcast }}</p>
            </div>
          </div>
        </div>
        <hr v-if="index !== tournaments.length - 1" /> <!-- 最後のカード以外に hr を表示 -->
      </div>
  </div>
</template>

<script setup>
  import useTournaments from "/composables/Badminton/useTournaments";
  
  const { tournaments } = useTournaments();
</script>

<style scoped>
.tournament-container {
  padding: 0 150px;
}

.tournament-card {
  margin-bottom: 30px;
}

.tournament-header h1 {
  display: inline-block;
  background-color: #ff6347; /* 背景色を追加 */
  color: white; /* 文字色を白に */
  padding: 10px 20px; /* 余白を調整 */
  font-size: 1.8rem;
  font-weight: bold;
  border-radius: 8px; /* 角を丸める */
  text-align: center;
  width: fit-content; /* テキストの長さに合わせる */
}

.tournament-details {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 30px 0;
}

h2 {
  flex: 0.8; /* 幅を少し狭める */
  text-align: left;
  font-size: 1.2rem;
  font-weight: bold;
  color: #616161;
}

p {
  flex: 1.5; /* h2と合わせて全体のバランスを縮小 */
  text-align: left;
  font-size: 1rem;
  font-weight: 600;
  color: #000000;
}

@media (max-width: 1200px) {
  .tournament-container {
    padding: 0 100px;
  }

  h2 {
    font-size: 1rem;
  }

  p {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .tournament-container {
    padding: 0 30px;
  }

  .tournament-header h1 {
    font-size: 1.6rem;
    padding: 6px 14px;
  }

  .tournament-details {
    gap: 8px;
  }

  .detail-item {
    flex-direction: column; /* 縦並びにする */
    align-items: flex-start;
    padding: 15px 0;
  }

  h2 {
    flex: none;
    font-size: 1.4rem;
    margin-bottom: 15px;
  }

  p {
    flex: none;
    font-size: 1rem;
    text-align: left;
  }
}

@media (max-width: 576px) {
  .tournament-container {
    padding: 0 15px;
  }

  .tournament-header h1 {
    font-size: 1.45rem;
    padding: 5px 12px;
  }

  .detail-item {
    padding: 10px 0;
  }

  h2 {
    font-size: 1.2rem;
  }

  p {
    font-size: 0.9rem;
  }
}

</style>
