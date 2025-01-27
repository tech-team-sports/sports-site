<script setup lang="ts">
import Button from '@/components/Button/index.vue'; // Buttonコンポーネントをインポート

definePageMeta({
  title: 'Abバド',
  description: 'バドミントンの世界へようこそ。スポーツの魅力を深掘りしていきます。',
});
</script>

<template>
  <h2 class="main-title">バドミントンの世界へようこそ！</h2>

  <!-- イントロダクションセクション -->
  <section id="intro" class="section intro">
    <h3>バドミントンとは</h3>
    <p>バドミントンは、軽いシャトルコックを使って行うスポーツで、シングルスとダブルスの形式があります。</p>
  </section>

  <!-- 歴史セクション -->
  <section id="history" class="section history">
    <h3>バドミントンの歴史</h3>
    <p>バドミントンは古代インドから発展し、19世紀にイギリスで正式な競技として確立されました。</p>
  </section>

  <!-- ルールセクション -->
  <section id="rules" class="section rules">
    <h3>バドミントンのルール</h3>
    <ul>
      <li>試合は21点制で行われます。</li>
      <li>シャトルがコートの外に出た場合、相手チームにポイントが与えられます。</li>
      <li>シングルスとダブルスのルールに若干の違いがあります。</li>
    </ul>
  </section>

  <!-- テクニックセクション -->
  <section id="techniques" class="section techniques">
    <h3>バドミントンのテクニック</h3>
    <ul>
      <li>スマッシュ：シャトルを強力に打ち込むテクニック。</li>
      <li>ドロップショット：ネットに近い場所にシャトルを落とすテクニック。</li>
      <li>クリアショット：相手のコートの後ろにシャトルを飛ばすテクニック。</li>
    </ul>
  </section>

  <!-- イベント情報セクション -->
  <section id="events" class="section events">
    <h3>バドミントンのイベント情報</h3>
    <p>今年のバドミントン大会は、6月と10月に開催される予定です。詳細は公式サイトをご確認ください。</p>
  </section>

  <!-- トップページに戻るボタン -->
  <Button label="トップページに戻る" />
</template>

<style>
/* ベーススタイル */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f4f9;
  color: #333;
}

h2.main-title {
  text-align: center;
  margin: 40px 0;
  font-size: 2.5rem;
  color: #007BFF;
}

/* セクションのスタイル */
.section {
  margin: 40px 0;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.intro {
  background-color: #ffffff;
}

.history {
  background-color: #f1f8ff;
}

.rules {
  background-color: #e6f7ff;
}

.techniques {
  background-color: #f0fff0;
}

.events {
  background-color: #fff8f0;
}

h3 {
  font-size: 1.8rem;
  color: #007BFF;
  margin-bottom: 15px;
  font-weight: 600;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

ul li {
  margin: 8px 0;
  font-size: 1.1rem;
}

ul li::before {
  content: "• ";
  color: #007BFF;
  font-weight: bold;
}
</style>
