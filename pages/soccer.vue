
<template>
    <soccerSlider />
    <soccerLinks />
    <div class="container">
        <ul class="items">
          <li class="item">
            <h2>基本ルール</h2>
            <img src="/assets/img/socce rule/soccer.jpg" alt="">
            <ul>
              <li><strong>試合時間:</strong> 前半45分、後半45分の合計90分 (延長戦やPK戦あり)</li>
              <li><strong>プレイヤー:</strong> 1チーム11人(GK1人＋フィールドプレイヤー10人)</li>
              <li><strong>ボールのインプレー・アウトプレー:</strong> ボールがサイドラインやゴールラインを完全に超えたらアウト</li>
              <li><strong>得点:</strong> ボールが完全にゴールラインを越えたら得点</li>
            </ul>
          </li>
          <li class="item">
            <h2>セットプレー</h2>
            <img src="/assets/img/socce rule/set.jpg" alt="">
            <ul>
              <li><strong>フリーキック:</strong> 相手チームの反則時に与えられる</li>
              <li><strong>ゴールキック:</strong> 攻撃側チームがボールをゴールライン外へ出した場合に与えられる</li>
              <li><strong>コーナーキック:</strong> 相手チームがボールをゴールライン外へ出した場合に与えられる</li>
              <li><strong>ペナルティキック:</strong> ペナルティエリア内で相手がファウルをした場合に与えられる</li>
              <li><strong>スローイン:</strong> サイドラインをボールが超えた場合に、相手チームに与えられる</li>
            </ul>
          </li>
          <li class="item">
            <h2>主要な反則</h2>
            <img src="/assets/img/socce rule/foul.jpg" alt="">
            <ul>
              <li><strong>遅延行為:</strong> 時間稼ぎを目的としたプレー</li>
              <li><strong>ファウル:</strong> ラフプレー（押す・蹴る・引っ張るなど）</li>
              <li><strong>オフサイド:</strong> 攻撃側選手が相手ゴール前でボールより前にいて、相手の最後のDFよりも後ろにいるとオフサイド</li>
              <li><strong>ハンド:</strong> 手や腕で意図的にボールを扱う</li>
          </ul>
          </li>
          <li class="item">
            <h2>カード制度</h2>
            <img src="/assets/img/socce rule/card.jpg" alt="">
            <ul>
              <li><strong>イエローカード:</strong> 警告 (2枚で退場)</li>
              <li><strong>レッドカード:</strong> 一発退場（その試合に出場不可）</li>
            </ul>
          </li>
        </ul>
      </div>
  </template>
  
  <script setup>
  import soccerSlider from "~/components/soccer/Slider/soccerSlider.vue";
  import soccerLinks from "~/components/soccer/links/soccer-links.vue";
  

  </script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.1rem;
}

.items {
  margin-top: 1rem;
}

.item {
  margin-top: 1rem;
}

.item img {
  max-width: 600px;
  padding: 1rem 0;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: var(--border-radius);
}

.item > h2 {
  padding: 0.25rem 0.5rem;
  color: royalblue;
  background: transparent;
  border-left: solid 5px royalblue;
}

@media screen and (min-width: 1024px) {
  .item > h2 {
    font-size: 1.75rem;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .item > h2 {
    font-size:1.5rem ;
  }
}

@media screen and (max-width: 767px) {
  .item > h2 {
    font-size:1.25rem ;
  }
}
</style>
  