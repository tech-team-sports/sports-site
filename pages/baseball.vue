<script setup lang="ts">
import Button from '@/components/Button/index.vue'; // Buttonコンポーネントをインポート

definePageMeta({
  title: 'Ab野球',
  description: '野球の世界へようこそ。スポーツの魅力を深掘りしていきます。',
});
</script>

<template>
  <h2 class="main-title">野球の世界へようこそ！</h2>

  <!-- イントロダクションセクション -->
  <section id="intro" class="section intro">
    <h3>野球とは</h3>
    <p>野球は、バットでボールを打って得点を競うスポーツで、9人対9人のチームでプレイします。</p>
  </section>

  <!-- 歴史セクション -->
  <section id="history" class="section history">
    <h3>野球の歴史</h3>
    <p>野球は19世紀にアメリカで発展し、世界中で人気のスポーツとなりました。</p>
  </section>

  <!-- ルールセクション -->
  <section id="rules" class="section rules">
    <h3>野球のルール</h3>
    <ul>
      <li>試合は9回で、各チームが攻守を交代します。</li>
      <li>1試合での得点が多いチームが勝者です。</li>
      <li>バッターは3回のストライクでアウトになります。</li>
    </ul>
  </section>

  <!-- テクニックセクション -->
  <section id="techniques" class="section techniques">
    <h3>野球のテクニック</h3>
    <ul>
      <li>ホームラン：バットで打ったボールをフェンス越えに飛ばすテクニック。</li>
      <li>ピッチング：ボールを投げる技術で、ストライクゾーンを狙います。</li>
      <li>キャッチング：ボールを受けるための手の使い方や反応力が求められます。</li>
    </ul>
  </section>

  <!-- イベント情報セクション -->
  <section id="events" class="section events">
    <h3>野球のイベント情報</h3>
    <p>今年のプロ野球リーグ戦は、4月から開催される予定です。詳細は公式サイトをご確認ください。</p>
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
