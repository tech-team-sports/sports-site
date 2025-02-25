<template>
  <div class="timeline">
    <h1>バドミントンの歴史タイムライン</h1>

    <div class="timeline-nav">
      <!-- ナビゲーションボタン（左） -->
      <div class="nav-left">
        <button @click="moveLeft"></button>
      </div>

    <!-- タイムラインの映画項目表示 -->
    <div class="timeline-container">
      <ul class="timeline-items">
        <li
          v-for="(item, index) in items"
          :key="item.year || index"
          @click="selectItem(item)"
          class="timeline-item"
          :class="{ selected: selectedItem === item }"
        >
          <span>{{ item.year }}</span> <!-- 年号のみ表示 -->
        </li>
      </ul>
    </div>

      <!-- ナビゲーションボタン（右） -->
      <div class="nav-right">
          <button @click="moveRight"></button>
      </div>
    </div>

    <!-- バド詳細情報 -->
    <div class="timeline-info" v-if="selectedItem">
      <div class="timeline-info-content">
        <div class="text-content">
          <h2>{{ selectedItem.year }} - {{ selectedItem.info }}</h2>
          <p>{{ selectedItem.description }}</p>
        </div>
        <img :src="selectedItem.image" :alt="selectedItem.year" class="selected-item-image" v-show="selectedItem" loading="lazy"  />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          year: 1873,
          info: 'バドミントンの起源',
          description: 'バドミントンは、インディアンバードというゲームに由来しており、イギリスで発展しました。このゲームはインディアからイギリスに持ち込まれたもので、羽根付きのシャトルを使用します。',
          image: '/img/badminton/History/bad1873.jpg',
        },
        {
          year: 1934,
          info: '国際バドミントン連盟の設立',
          description: '国際バドミントン連盟（IBF）が設立され、バドミントンが国際競技として普及しました。競技ルールが整備され、世界大会が開催されるようになりました。1981年に名前が改称されて世界バドミントン連盟（BWF）となりました。',
          image: '/img/badminton/History/bad1934.jpg',
        },
        {
          year: 1992,
          info: 'バドミントンがオリンピック競技に',
          description: '1992年のバルセロナオリンピックで、バドミントンが正式なオリンピック競技として採用されました。これにより、世界中でバドミントンの人気が急上昇しました。',
          image: '/img/badminton/History/bad1992.jpg',
        },
        {
          year: 2000,
          info: 'バドミントンの普及',
          description: '21世紀に入り、バドミントンは世界中でますます人気を集め、特にアジア諸国で非常に活発にプレイされています。中国、インドネシア、韓国などの国々ではトップレベルの選手が登場しています。',
          image: '/img/badminton/History/bad2000.jpg',
        },
        {
          year: 2020,
          info: '東京オリンピックでの活躍',
          description: '2020年の東京オリンピックでは、日本が女子ダブルスで金メダルを獲得するなど、バドミントンの競技に新たな光が当たりました。国内外でバドミントン人気が高まりました。',
          image: '/img/badminton/History/bad2020.jpg',
        },
        {
          year: 2025,
          info: 'バドミントンの未来',
          description: '今後、バドミントンはさらに進化を遂げ、テクノロジーの進歩や新たな競技形式が導入されることが予想されます。世界中の多くの国々で、バドミントンはますます注目される競技となるでしょう。',
          image: '/img/badminton/History/bad2025.jpg',
        },
      ],
      selectedItem: null,
    };
  },
  created() {
    this.selectedItem = this.items[0]; // 初期値として最初の項目を表示
  },
  methods: {
    // バドミントンの歴史アイテムを選択したときの処理
    selectItem(item) {
      this.selectedItem = item;
    },
    // 前の年に移動
    moveLeft() {
      const currentIndex = this.items.findIndex(item => item === this.selectedItem);
      if (currentIndex > 0) {
        this.selectedItem = this.items[currentIndex - 1];
      }
    },
    // 次の年に移動
    moveRight() {
      const currentIndex = this.items.findIndex(item => item === this.selectedItem);
      if (currentIndex < this.items.length - 1) {
        this.selectedItem = this.items[currentIndex + 1];
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Han+Sans+JP:wght@700&display=swap');

.timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 3.3rem;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 20px;
}

.timeline-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  width: 60%; /* 下線の長さ */
  border-bottom: 6px solid black; /* 下線 */
  padding-bottom: 10px; /* コンテンツと下線の空白 */
}

.timeline-items {
  display: flex;
  list-style-type: none;
  padding: 15px;
  overflow-x: auto;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

.timeline-item {
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
}

.timeline-item.selected {
  color: #ffffff;
  background-color: black;
  border-radius: 10px;
  padding: 10px;
}

.timeline-item:hover {
  color: #8a8a8a;
}

.nav-left button, .nav-right button {
  width: 50px;
  height: 50px;
  background-color: white; /* 中を白 */
  color: black; /* 矢印を黒に */
  border: 4px solid black; /* 外枠を黒の丸線 */
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, transform 0.2s;
}

.nav-left button::before,
.nav-right button::before {
  content: "";
  display: inline-block;
  width: 15px;
  height: 15px;
  border: solid black;
  border-width: 0 0 4px 4px; /* 矢印を太くする */
}

.nav-left button::before {
  transform: rotate(45deg);
}

.nav-right button::before {
  transform: rotate(-135deg);
}

.nav-left button:hover, .nav-right button:hover {
  background-color: #f0f0f0;
}

.nav-left {
  margin-right: 20px;
  margin-left: 10px;
}

.nav-right {
  margin-left: 20px;
  margin-right: 10px;
}

/* タイムライン情報のスタイル */
.timeline-info {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 1000px;
  width: 100%;
}

.timeline-info-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.text-content {
  flex: 1;
  text-align: left;
  margin-top: -100px;
}

h2 {
  font-family: 'Source Han Sans JP', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 30px;
}

p {
  font-size: 17px;
  font-weight: 500;
  line-height: 1.5;
}

.timeline-info img {
  width: 400px;   /* 固定の幅 */
  height: 280px;  /* 固定の高さ */
  object-fit: cover; /* 画像の比率を保ちながら、領域に合わせて切り抜く */
  border-radius: 12px;
}

@media (max-width: 1024px) {
  .timeline {
    padding: 20px;
  }

  h1 {
    font-size: 2.6rem;
  }

  .timeline-items {
    gap: 30px; /* アイテムの間隔を狭く */
    padding: 10px;
  }

  h2  {
    margin-top: 80px;
  }
}

@media (max-width: 768px) {
  /* タイムラインの全体的なレイアウト */
  .timeline {
    padding: 20px;
  }

  h1 {
    font-size: 2.3rem; /* 見出しサイズを小さく */
    margin-top: 20px;
    margin-bottom: 15px;
  }

  .timeline-nav {
    width: 90%; /* ナビゲーションの幅を広げる */
    margin: 20px auto;
    padding-bottom: 10px;
  }

  .timeline-items {
    gap: 20px; /* アイテムの間隔を狭く */
    padding: 10px;
  }

  .timeline-item {
    font-size: 20px; /* アイテムの文字サイズを小さく */
  }

  .timeline-info {
    padding: 15px;
    flex-direction: column; /* アイテムを縦並びに */
    align-items: flex-start;
    max-width: 100%; /* 最大幅を100%に */
  }

  .timeline-info-content {
    flex-direction: column; /* テキストと画像を縦並びに */
    align-items: flex-start;
    gap: 15px;
  }

  .text-content {
    text-align: left;
    margin-top: 0;
  }

  h2 {
    font-size: 1.8rem; /* タイトルのフォントサイズを小さく */
    margin-top: 10px;
    margin-bottom: 15px;
  }

  p {
    font-size: 14px; /* 説明文のフォントサイズを小さく */
  }

  .timeline-info img {
    width: 100%; /* 画像を親要素の幅に合わせる */
    height: auto; /* 高さを自動調整 */
    border-radius: 8px; /* 画像の角を少し丸める */
  }

  .nav-left button, .nav-right button {
    width: 40px; /* ボタンサイズを小さく */
    height: 40px;
    font-size: 18px;
  }

  .nav-left button::before,
  .nav-right button::before {
    width: 12px;
    height: 12px;
  }
}

@media (max-width: 600px) {
  .timeline-item {
    font-size: 16px; /* アイテムの文字サイズを小さく */
  }

  h1 {
    font-size: 1.9rem;
  }

  .nav-left button, .nav-right button {
    width: 36px; /* ボタンサイズを小さく */
    height: 36px;
  }

  .nav-left button::before,
  .nav-right button::before {
    width: 12px;
    height: 12px;
  }

  .nav-left {
    margin-right: 8px;
  }

  .nav-right {
    margin-left: 8px;
  }
}

@media (max-width: 500px) {
  h1 {
    font-size: 1.7rem; /* 見出しのフォントサイズをさらに小さく */
  }

  .timeline-nav {
    width: 100%;
    margin: 15px 0;
  }

  .timeline-items {
    gap: 10px; /* アイテム間隔をさらに狭く */
  }

  .timeline-info {
    padding: 10px;
  }

  .timeline-info-content {
    gap: 10px;
  }

  h2 {
    font-size: 1.6rem; /* タイトルをさらに小さく */
  }

  p {
    font-size: 16px; /* 説明文も小さく */
  }

  .timeline-info img {
    width: 100%;
    height: 200px;
  }

  .nav-left button, .nav-right button {
    width: 33px; /* ボタンサイズを小さく */
    height: 33px;
    font-size: 18px;
  }

  .nav-left button::before,
  .nav-right button::before {
    width: 12px;
    height: 12px;
  }
  .nav-left {
    margin-right: 3px;
  }

  .nav-right {
    margin-left: 3px;
  }
}

</style>
