<script setup>
import { ref } from 'vue'
const greeting = ref('Hello World!')
</script>

<template>
  <div>
    <img src="/assets/img/ami.png">
    <!-- 画像の下にリンクを追加 -->
    <div class="links">
      <a href="/badminton" class="link">バドミントン</a>
      <a href="/soccer" class="link">サッカー</a>
      <a href="/baseball" class="link">野球</a>
    </div>
  </div>
</template>

<style>
.greeting {
  color: royalblue;
  font-weight: bold;
  font-size: calc(16px + 2vw);
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
