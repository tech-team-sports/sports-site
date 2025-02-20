<template>
  <section class="container">
    <div class="overlay"></div>
    <div class="text-overlay">
      <h1 class="title">{{ title }}</h1>
    </div>
    <div class="sub-overlay">
      <p class="sub">{{ subTitle }}</p>
    </div>
    <img :src="imageSrc" alt="Dynamic Image" />
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');

.container {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明の黒いオーバーレイ */
  z-index: 0;
}

.text-overlay {
  position: absolute;
  top: 20px;  /* 左上に配置 */
  left: 20px;
  z-index: 1;
}

.title {
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  font-size: 3rem;
  padding: 10px 70px; /* 背景のパディングを増やして長くする */
  background-color: white; /* 背景色（初期は白） */
  color: black; /* 文字色を黒に */
  position: relative;
  left: -60px; /* 左の隠れを防ぐため、位置を修正 */
  z-index: 1; /* 画像やオーバーレイより前面に表示 */
  overflow: visible; /* 文字が隠れないように */
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%); /* 斜めにカット */
}



.sub-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 完全に中央に配置 */
  width: 100%; /* 幅を100%に設定 */
  text-align: center; /* テキストを中央揃え */
  z-index: 1;
}

.sub {
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  font-size: 3.5rem; /* 少し大きめに */
  color: #ffffff; /* 白い文字色 */
  letter-spacing: 2px; /* 文字の間隔を広げて視覚的に強調 */
  white-space: nowrap; /* テキストが改行されないようにする */
  overflow: hidden; /* はみ出した部分を隠す */
  text-overflow: ellipsis; /* テキストが溢れた場合に「...」で表示 */
  
  /* マーカー風の背景 */
  background-color: rgba(255, 255, 0, 0.7); /* 明るい黄色の背景 */
  padding: 10px 20px; /* 背景と文字の間に余白を追加 */
  border-radius: 5px; /* 丸みをつけて、柔らかい印象を与える */
  
  /* 文字にふち文字（アウトライン）を追加 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7), 
               -2px -2px 4px rgba(0, 0, 0, 0.7), /* 左上と右下の影 */
               2px -2px 4px rgba(0, 0, 0, 0.7), 
               -2px 2px 4px rgba(0, 0, 0, 0.7); /* 右上と左下の影 */
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 0;
}
</style>
