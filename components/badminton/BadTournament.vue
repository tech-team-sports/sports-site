<template>
    <div class="tournament-info">
      <h1>{{ tournament.name }} バドミントン大会</h1>
      <p><strong>日程:</strong> {{ tournament.date }}</p>
      <p><strong>場所:</strong> {{ tournament.location }}</p>
  
      <h2>参加者</h2>
      <ul>
        <li v-for="player in tournament.players" :key="player.id">
          {{ player.name }} (国: {{ player.country }})
        </li>
      </ul>
  
      <h2>結果</h2>
      <div v-if="tournament.results.length > 0">
        <ul>
          <li v-for="(result, index) in tournament.results" :key="index">
            {{ result.player1 }} vs {{ result.player2 }} - {{ result.winner }} 勝者
          </li>
        </ul>
      </div>
      <div v-else>
        <p>結果はまだ発表されていません。</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tournament: {
          name: '2025年バドミントン世界選手権',
          date: '2025年8月20日〜2025年8月30日',
          location: '東京体育館（東京）',
          players: [
            { id: 1, name: '佐藤 大輔', country: '日本' },
            { id: 2, name: '李 明軒', country: '中国' },
            { id: 3, name: '張 磊', country: '中国' },
            { id: 4, name: 'バド・ジョン・アントニー', country: 'インド' },
          ],
          results: [
            { player1: '佐藤 大輔', player2: '李 明軒', winner: '佐藤 大輔' },
            { player1: '張 磊', player2: 'バド・ジョン・アントニー', winner: 'バド・ジョン・アントニー' },
          ],
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .tournament-info {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 8px;
  }
  
  h1 {
    color: #2c3e50;
  }
  
  h2 {
    color: #3498db;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  strong {
    font-weight: bold;
  }
  </style>
  