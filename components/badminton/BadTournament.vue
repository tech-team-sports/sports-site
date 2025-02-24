<template>
  <div>
    <div class="top">
      <h1>バドミントンの主要大会</h1>
      <div class="image-container">
          <img src="/assets/img/badminton/kaijou.jpg" alt="会場" />
      </div>
        <p>
          バドミントンは世界中で愛され、多くの国際大会が開催されています。
          特に世界ランク上位の選手が集まる大会では、白熱した試合が繰り広げられ、観客を魅了します。
          これらの大会は、選手のキャリアにおいて重要な節目となるだけでなく、次世代の育成にも大きな影響を与えます。
          また、各大会ごとに異なる特色や歴史があり、会場の雰囲気や試合のレベルも大会によって変わります。
          ここでは、バドミントンの主要な大会について詳しく紹介します。
        </p>
      </div>
    <div class="section-top">
      <BadTournamentList />
    </div>
  </div>
</template>

<script setup>
import BadTournamentList from './components/badminton/BadTournamentList.vue';
</script>

<style scoped>
.top {
  font-family: 'Arial', sans-serif;
  padding: 50px 160px;
  text-align: center;
}

h1 {
  font-size: 3rem;
  font-weight: bold;
  color: #2d4cc9;
  margin-bottom: 30px;
}

.image-container {
  margin-bottom: 20px;
}

.image-container img {
  max-width: 60%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

p {
  line-height: 1.8;
  max-width: 900px;
  margin: 50px auto;
  padding: 0 70px;
  color: #333;
  text-align: left;
}
</style>
