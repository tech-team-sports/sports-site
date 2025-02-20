<template>
  <div class="timeline">
    <!-- ナビゲーションボタン（左右別々） -->
    <div class="timeline-nav">
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

    <div class="nav-right">
        <button @click="moveRight"></button>
      </div>
    </div>

    <!-- 映画詳細情報 -->
    <div class="timeline-info" v-if="selectedItem">
      <h2>{{ selectedItem.year }} - {{ selectedItem.info }}</h2>
      <p>{{ selectedItem.description }}</p>
      <img :src="selectedItem.image" :alt="selectedItem.year" class="selected-item-image" />
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
          image: '/img/badminton/momota.jpg',
        },
        {
          year: 1934,
          info: '国際バドミントン連盟の設立',
          description: '国際バドミントン連盟（IBF）が設立され、バドミントンが国際競技として普及しました。競技ルールが整備され、世界大会が開催されるようになりました。',
          image: '/img/badminton/hukusima.jpg',
        },
        {
          year: 1992,
          info: 'バドミントンがオリンピック競技に',
          description: '1992年のバルセロナオリンピックで、バドミントンが正式なオリンピック競技として採用されました。これにより、世界中でバドミントンの人気が急上昇しました。',
          image: '/img/badminton/higasino.jpg',
        },
        {
          year: 2000,
          info: 'バドミントンの普及',
          description: '21世紀に入り、バドミントンは世界中でますます人気を集め、特にアジア諸国で非常に活発にプレイされています。中国、インドネシア、韓国などの国々ではトップレベルの選手が登場しています。',
          image: '/img/badminton/watanabe.jpg',
        },
        {
          year: 2020,
          info: '東京オリンピックでの活躍',
          description: '2020年の東京オリンピックでは、日本が女子ダブルスで金メダルを獲得するなど、バドミントンの競技に新たな光が当たりました。国内外でバドミントン人気が高まりました。',
          image: '/img/badminton/yamaguti.jpg',
        },
        {
          year: 2024,
          info: 'バドミントンの未来',
          description: '今後、バドミントンはさらに進化を遂げ、テクノロジーの進歩や新たな競技形式が導入されることが予想されます。世界中の多くの国々で、バドミントンはますます注目される競技となるでしょう。',
          image: '/img/badminton/okuhara.jpg',
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
.timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline-nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin-top: 30px;
  margin-bottom: 20px;
  border-bottom: 4px solid black; /* 下線を太く */
  padding-bottom: 10px; /* 下線とコンテンツの間に空白を追加 */
}

.nav-left button, .nav-right button {
  width: 50px;
  height: 50px;
  background-color: white; /* 中を白 */
  color: black; /* 矢印を黒に */
  border: 2px solid black; /* 外枠を黒の丸線 */
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
  width: 10px;
  height: 10px;
  border: solid black;
  border-width: 0 0 2px 2px;
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

.timeline-items {
  display: flex;
  list-style-type: none;
  padding: 10px;
  overflow-x: auto;
  margin: 0;
  background-color: black;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
}

.timeline-item {
  margin: 0 15px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  color: white;
}

.timeline-item.selected {
  color: #007bff;
}

.timeline-item:hover {
  color: #0056b3;
}

.timeline-info {
  margin-top: 20px;
  text-align: center;
}

.timeline-info img {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
  border-radius: 8px;
}
</style>
