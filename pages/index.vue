<script setup>
import { ref } from 'vue'
const greeting = ref('Hello World!')
</script>

<template>
  <div>
    <h1>sports site</h1>
    <div class="intro-text">
      <h1>スポーツサイトへようこそ！</h1>
      <p>私たちのサイトでは、野球、サッカー、バドミントンに関する最新情報をお届けします。各スポーツの試合結果や選手情報、戦略分析など、スポーツファンの皆さんにとって欠かせない情報源です。</p>
      
      <h2>野球</h2>
      <p>野球ファン必見！最新の試合結果や注目選手の活躍をリアルタイムでチェックできます。プロ野球や高校野球の情報も充実しています。</p>
      
      <h2>サッカー</h2>
      <p>国内外のリーグ戦からワールドカップまで、サッカーの魅力を余すことなくお届けします。試合のハイライトや選手分析を通じて、さらに深くサッカーを楽しんでいただけます。</p>
      
      <h2>バドミントン</h2>
      <p>バドミントンの最新ニュースや大会結果をお届けします。トップ選手のインタビューや戦術分析もあり、バドミントンの楽しさをより深く感じられます。</p>
    </div>
  </div>
</template>

<style>
.greeting {
  color: royalblue;
  font-weight: bold;
  font-size: calc(16px + 2vw);
}

.intro-text {
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.intro-text h1 {
  font-size: 2em;
  color: #333;
}

.intro-text h2 {
  font-size: 1.5em;
  color: #007BFF;
  margin-top: 20px;
}

.intro-text p {
  font-size: 1.1em;
  line-height: 1.6;
  color: #555;
}

/* リンクのスタイル */
.links {
  margin-top: 20px;
  text-align: center;
}

.link {
  margin: 0 15px;
  text-decoration: none;
  color: #007BFF;
  font-size: 18px;
  font-weight: bold;
}

.link:hover {
  text-decoration: underline;
  color: #0056b3;
}
</style>
