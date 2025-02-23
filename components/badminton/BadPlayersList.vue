<template>
    <div class="players-container">
      <h1>日本のバドミントン選手一覧</h1>
      <p class="click">↓選手詳細はクリックで</p>
      <div class="players-list">
        <div
          v-for="player in players"
          :key="player.id"
          class="player-item"
          @click="toggleDetails(player.id)"
        >
          <div class="player-image-container">
            <img :src="player.image" :alt="player.name" class="player-image" />
          </div>
          <h2>{{ player.name }}</h2>
        </div>
      </div>
  
      <!-- モーダル -->
      <div v-if="modalVisible" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="close-btn" @click="closeModal">×</button>
          <div class="modal-player-details">
            <img :src="selectedPlayerDetails.image" :alt="selectedPlayerDetails.name" class="modal-player-image" />
            <div class="modal-player-info">
              <h2>{{ selectedPlayerDetails.name }}</h2>
              <p><strong>国籍:</strong> {{ selectedPlayerDetails.nationality }}</p>
              <p><strong>生年月日:</strong> {{ selectedPlayerDetails.birthYear }}</p>
              <p><strong>利き手:</strong> {{ selectedPlayerDetails.hand }}</p>
              <p><strong>プレースタイル:</strong> {{ selectedPlayerDetails.playStyle }}</p>
              <p><strong>主な実績:</strong> {{ selectedPlayerDetails.achievements }}</p>
              <p><strong>キャリアのハイライト:</strong> {{ selectedPlayerDetails.careerHighlight }}</p>
              <p><strong>プレースタイル詳細:</strong> {{ selectedPlayerDetails.playStyleDetail }}</p>
              <p><strong>名言:</strong> "{{ selectedPlayerDetails.quote }}"</p>
              <p>{{ selectedPlayerDetails.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onBeforeUnmount } from 'vue';
  import usePlayers from '@/composables/Badminton/usePlayers';
  
  export default {
    name: "Players",
    setup() {
      const { players } = usePlayers();
      const selectedPlayer = ref(null);
      const modalVisible = ref(false);
      const selectedPlayerDetails = ref({});
  
      const toggleDetails = (id) => {
        if (selectedPlayer.value === id) {
          closeModal();
        } else {
          selectedPlayer.value = id;
          selectedPlayerDetails.value = players.find(player => player.id === id);
          modalVisible.value = true;
          document.body.style.overflow = 'hidden'; // モーダル表示時にスクロール無効化
          document.documentElement.style.overflow = 'hidden'; // body以外に対してもスクロール無効化
        }
      };
  
      const closeModal = () => {
        modalVisible.value = false;
        selectedPlayer.value = null;
        document.body.style.overflow = ''; // モーダル閉じた時に元に戻す
        document.documentElement.style.overflow = ''; // 元に戻す
      };
  
      // コンポーネント破棄時にもスクロール無効化を解除
      onBeforeUnmount(() => {
        document.body.style.overflow = ''; 
        document.documentElement.style.overflow = '';
      });
  
      return { players, selectedPlayer, modalVisible, selectedPlayerDetails, toggleDetails, closeModal };
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@400;700&display=swap');
  
  .players-container {
    text-align: center;
    padding: 40px 20px;
  }
  
  h1 {
    font-size: 2.8rem;
    font-weight: 800;
    margin-bottom: 30px;
    color: #1e3a8a;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }

  .click {
    font-size: 1.6rem;
    color: #d32f2f;
    font-family: 'Kaisei Decol', sans-serif; /* おしゃれでかわいい雰囲気のフォントを指定 */
    font-weight: 700; /* 太字でサブタイトルらしさを強調 */
    margin-bottom: 40px;
  }
  
  .players-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
    justify-items: center;
  }
  
  .player-item {
  background-color: #ededed;
  width: 100%;
  max-width: 350px;
  height: auto;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 0 auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
}

.player-item:hover {
  opacity: 0.6; /* ホバー時に薄くする */
}

  .player-image-container {
    width: 100%;
    height: 250px;
    overflow: hidden;
  }
  
  .player-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .player-item h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 15px 0;
  }
  
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    max-width: 1000px;
    width: 100%;
    text-align: left;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-height: 90vh;
  }
  
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 3.2rem;
    color: #424242;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  
  .close-btn:hover {
    color: #d32f2f;
  }
  
  .modal-player-details {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  
  .modal-player-image {
    width: 45%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    margin-right: 20px;
  }
  
  .modal-player-info {
    width: 50%;
    text-align: left;
    padding-top: 20px;
  }
  
  .modal-player-info h2 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 15px;
  }
  
  .modal-player-info p {
    font-size: 1.1rem;
    line-height: 1.5;
    margin-bottom: 10px;
  }
  
  .modal-player-info p strong {
    font-weight: 700;
  }
  
  @media (min-width: 1600px) {
    .players-list {
      grid-template-columns: repeat(4, 1fr);
    }
  
    .modal-player-info p {
      font-size: 1.1rem;
    }
  
    .modal-player-info h2 {
      font-size: 2.1rem;
    }
  
    .modal-player-image {
      height: 320px;
    }
  }
  
  @media (max-width: 1024px) {
    .players-list {
      grid-template-columns: repeat(2, 1fr);
    }
  
    .player-item {
      max-width: 300px;
    }
  
    .modal-player-info p {
      font-size: 1.1rem;
    }
  
    .modal-player-info h2 {
      font-size: 2.0rem;
    }
  
    .modal-player-image {
      height: 280px;
    }
  }
  
  @media (max-width: 768px) {
    .players-list {
      grid-template-columns: repeat(1, 1fr);
    }
  
    .player-item {
      max-width: 320px;
      height: 300px;
    }
  
    .modal-player-details {
      flex-direction: column;
      align-items: center;
    }
  
    .modal-player-image {
      width: 80%;
      height: 250px;
      margin-bottom: 15px;
    }
  
    .modal-player-info {
      width: 100%;
    }
  
    .modal-player-info h2 {
      font-size: 1.8rem;
    }
  
    .modal-player-info p {
      font-size: 1.1rem;
    }
  
    .close-btn {
      font-size: 2.8rem;
    }
  }
  
  @media (max-width: 500px) {
    .player-item {
      max-width: 300px;
      height: 280px;
    }
  
    .modal-player-info h2 {
      font-size: 1.6rem;
    }
  
    .modal-player-info p {
      font-size: 1rem;
    }
  
    .close-btn {
      font-size: 2.5rem;
    }
  
    .modal-player-image {
      height: 220px;
    }
  }
  </style>
  