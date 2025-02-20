<template>
  <div class="badminton-gear">
    <h1>バドミントン用具紹介</h1>

    <!-- ラケット選び方 -->
    <section class="racket-section">
      <h2>ラケットの選び方</h2>
      <p>
        バドミントンラケットは、プレイスタイルやレベルに応じて選ぶことが大切です。ラケットの選び方を理解することで、より良いパフォーマンスを発揮できます。以下のポイントを参考にして、最適なラケットを選びましょう。
      </p>
      <ul>
        <li>
          <h3>ラケットの重量</h3>
          <p>軽いラケットは速いショットに適しており、重いラケットはパワーを重視するプレイヤーに向いています。初心者の方は軽めのラケットを選ぶことをおすすめします。</p>
        </li>
        <li>
          <h3>シャフトの硬さ</h3>
          <p>硬いシャフトはパワーショットに、柔らかいシャフトはコントロールに優れています。特にシャフトの硬さは、打球感や反応に大きく影響します。</p>
        </li>
        <li>
          <h3>グリップサイズ</h3>
          <p>グリップサイズは手のひらにフィットするものを選びましょう。グリップが小さすぎると、ラケットをしっかり握れず、操作性が悪くなります。逆に大きすぎても手首に負担がかかります。</p>
        </li>
        <li>
          <h3>バランス</h3>
          <p>ラケットのバランスは、ヘッドライト（先端が軽い）とヘッドヘビー（先端が重い）の2タイプがあります。ヘッドライトはコントロールが良く、ヘッドヘビーはパワーを重視しています。</p>
        </li>
        <li>
          <h3>素材</h3>
          <p>ラケットのフレームやシャフトは、カーボンやアルミ、グラファイトなどさまざまな素材で作られています。カーボンは軽くて強い反発力がありますが、高価です。</p>
        </li>
      </ul>
    </section>

    <!-- シャトル選び方 -->
    <section class="shuttle-section">
      <h2>シャトルの選び方</h2>
      <p>
        シャトルはバドミントンの試合や練習において非常に重要なアイテムです。シャトルには主に羽根シャトルとプラスチックシャトルがありますが、プレイ環境に応じて適切なシャトルを選ぶことが大切です。
      </p>
      <ul>
        <li>
          <h3>羽根シャトル</h3>
          <p>羽根シャトルはプロや競技者向けに使われることが多いです。ナチュラルな飛行をし、安定した飛距離を保ちます。主にカナリア羽根など自然素材で作られており、価格は高めですが、試合における飛び方が自然で、打球感も優れています。</p>
        </li>
        <li>
          <h3>プラスチックシャトル</h3>
          <p>初心者や練習用に適しています。耐久性が高く、価格が安価で、風や天候に影響されにくいため、屋外での練習に最適です。品質が上がっており、今では十分にゲームプレイに耐えることができます。</p>
        </li>
        <li>
          <h3>耐久性</h3>
          <p>プラスチックシャトルは耐久性が高く、長時間使用できますが、羽根シャトルに比べて飛行の安定性が劣る場合があります。特に羽根シャトルを使用する際は、どれくらいの頻度で交換するかがポイントになります。</p>
        </li>
      </ul>
    </section>

    <!-- 用具おすすめ -->
    <section class="gear-recommendation">
      <h2>おすすめ用具</h2>
      <p>
        ここでは、初心者から上級者まで、様々なレベルに対応したおすすめのラケットやシャトルを紹介します。自分にぴったりの用具を見つけ、より楽しいバドミントンライフを送りましょう。
      </p>
      <div class="gear-list">
        <div class="gear-item">
          <img src="/assets/img/badminton/racket.jpg" alt="高性能ラケット" />
          <h3>高性能ラケット</h3>
          <p>軽量で反応が速く、競技用としても活躍する高性能ラケット。バランスが良く、パワーとコントロールの両方を兼ね備えています。</p>
        </div>
        <div class="gear-item">
          <img src="/assets/img/badminton/racket.jpg" alt="羽根シャトル" />
          <h3>羽根シャトル</h3>
          <p>プロの試合でも使用される高品質な羽根シャトル。優れた飛距離とナチュラルな飛行で、競技の精度を高めます。</p>
        </div>
        <div class="gear-item">
          <img src="/assets/img/badminton/racket.jpg" alt="プラスチックシャトル" />
          <h3>プラスチックシャトル</h3>
          <p>練習用や屋外での使用に最適なプラスチックシャトル。耐久性が高く、風の影響を受けにくいため、長時間の練習に向いています。</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "BadmintonGear",
};
</script>

<style scoped>
.badminton-gear {
  font-family: 'Arial', sans-serif;
  color: #333;
  line-height: 1.6;
  background-color: #f4f4f9;
  padding: 3rem 1rem;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  font-size: 3.5rem;
  font-weight: bold;
  color: #007BFF;
  text-transform: uppercase;
  letter-spacing: 2px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
  position: relative;
}

h2::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #007BFF;
}

.racket-section h3, .shuttle-section h3 {
  font-size: 1.4rem; /* 少し大きめに */
  color: #007BFF;   /* 青色で強調 */
  font-weight: 600;  /* 太字で強調 */
  margin-bottom: 0.5rem; /* 少し下に余白を */
  text-transform: capitalize; /* 各単語の頭文字を大文字に */
  letter-spacing: 0.5px; /* 文字間隔を少し広げて読みやすく */
  padding: 0.5rem 1rem; /* ボックス内にパディングを追加 */
  background-color: #e6f0ff; /* 背景色に淡い青色 */
  border-radius: 8px; /* 丸みをつけて柔らかい印象 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 薄いシャドウで浮き上がる効果 */
}



.gear-item h3 {
  margin-top: 1rem;
  font-size: 1.6rem; /* 文字サイズを少し大きく */
  color: #007BFF;   /* 青色で目立たせる */
  font-weight: 600;  /* 少し太めにして強調 */
  text-transform: uppercase; /* 大文字にして強調 */
  letter-spacing: 1px; /* 文字間隔を広げて読みやすく */
}


section {
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.gear-list {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.gear-item {
  text-align: center;
  max-width: 300px;
  flex: 1;
  margin: 0 1rem;
}

.gear-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.gear-item img:hover {
  transform: scale(1.05);
}

.gear-item h3 {
  margin-top: 1rem;
  font-size: 1.4rem;
  color: #007BFF;
}

.gear-item p {
  font-size: 1.1rem;
  color: #555;
}
</style>
