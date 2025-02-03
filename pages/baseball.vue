<script setup lang="ts">
import { useBaseballData } from "@/composables/useBaseballData"; // コンポーザブルをインポート
import AppButton from "@/components/AppButton.vue"; // Buttonコンポーネントをインポート

const {
  introText,
  historyText,
  rules,
  techniques,
  eventsText,
  famousPlayers
} = useBaseballData();

definePageMeta({
  title: "野球",
  description: "野球の世界へようこそ。スポーツの魅力を深掘りしていきます。",
});
</script>

<template>
  <h2 class="main-title">野球の世界へようこそ！</h2>

  <!-- イントロダクションセクション -->
  <section id="intro" class="section intro">
    <h3>野球とは</h3>
    <p>{{ introText }}</p>
  </section>

  <!-- 歴史セクション -->
  <section id="history" class="section history">
    <h3>野球の歴史</h3>
    <p>{{ historyText }}</p>
  </section>

  <!-- ルールセクション -->
  <section id="rules" class="section rules">
    <h3>野球のルール</h3>
    <ul>
      <li v-for="(rule, index) in rules" :key="index">{{ rule }}</li>
    </ul>
  </section>

  <!-- テクニックセクション -->
  <section id="techniques" class="section techniques">
    <h3>野球のテクニック</h3>
    <ul>
      <li v-for="(technique, index) in techniques" :key="index">{{ technique }}</li>
    </ul>
  </section>

  <!-- イベント情報セクション -->
  <section id="events" class="section events">
    <h3>野球のイベント情報</h3>
    <p>{{ eventsText }}</p>
  </section>

  <!-- 有名選手の画像セクション -->
  <section id="famous-players" class="section famous-players">
    <h3>有名選手</h3>
    <div class="players">
      <div class="player" v-for="(player, index) in famousPlayers" :key="index">
        <img :src="player.image" :alt="player.name" class="player-image" />
        <p>{{ player.name }}</p>
      </div>
    </div>
  </section>

  <!-- トップページに戻るボタン -->
  <AppButton label="トップページに戻る" />
</template>

<style scoped>
/* ベーススタイル */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f4f9;
  color: #333;
}

h2.main-title {
  text-align: center;
  margin: 40px 0;
  font-size: 2.5rem;
  color: #007bff;
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

.famous-players {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.players {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.player {
  text-align: center;
  max-width: 200px;
}

.player-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #007bff;
}

h3 {
  font-size: 1.8rem;
  color: #007bff;
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
  color: #007bff;
  font-weight: bold;
}
</style>
