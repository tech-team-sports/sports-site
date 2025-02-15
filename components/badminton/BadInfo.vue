<template>
    <div class="badminton-info">
      <h1>バドミントンの基本情報</h1>
      
      <!-- バドミントンの魅力 -->
      <section class="intro-section">
        <h2>バドミントンの魅力</h2>
        <p>バドミントンは、素早い反応と戦略が求められるエキサイティングなスポーツです。シンプルなルールながらも奥深いゲーム性を持っており、プレイヤー同士の緊張感溢れる戦いが繰り広げられます。</p>
      </section>
  
      <!-- バドミントンのルール -->
      <section class="rule-section">
        <h2>バドミントンのルール</h2>
        <p>バドミントンは、2人または4人で行うスポーツです。ラケットでシャトルを相手のコートに打ち合い、得点を競います。ポイントは、シャトルが相手のコートに落ちたとき、または相手のミスによって得られます。</p>
        <ul>
          <li><strong>ゲームの開始：</strong>最初にサーブを行う選手は、コインで決めます。</li>
          <li><strong>得点：</strong>1ゲームは21点先取。2点差がついた場合、勝者が決まります。</li>
          <li><strong>サーブのルール：</strong>サーブは交互に行い、サーバーが得点した場合にのみ、サーブ権が交代します。</li>
          <li><strong>ネット越し：</strong>シャトルはネットを越えて相手側に飛ばさなければならず、ネットに触れるとポイントは相手に渡ります。</li>
        </ul>
      </section>
  
      <!-- 必要な用具 -->
      <section class="equipment-section">
        <h2>必要な用具</h2>
        <p>バドミントンをプレイするためには、以下の用具が必要です。</p>
        <div class="equipment-cards">
          <div class="card">
            <h3>ラケット</h3>
            <p>軽くて丈夫なラケットを選びます。</p>
          </div>
          <div class="card">
            <h3>シャトル</h3>
            <p>羽根でできたシャトルを使用します。プラスチック製や羽根製が一般的です。</p>
          </div>
          <div class="card">
            <h3>シューズ</h3>
            <p>滑りにくく、足を保護するシューズが必要です。</p>
          </div>
        </div>
      </section>
  
      <!-- 得点方法 -->
      <section class="scoring-section">
        <h2>バドミントンの得点方法</h2>
        <p>バドミントンは、ラリー（シャトルの打ち合い）でポイントを競います。プレイヤーまたはチームが相手のミスを誘うことでポイントを得ます。</p>
        <ul>
          <li><strong>ラリー：</strong>シャトルがコート内に落ちる、または相手がミスした場合に得点になります。</li>
          <li><strong>サービスの順番：</strong>サービスが成功した場合、サーバーは次のサーブを行います。</li>
        </ul>
      </section>
  
      <!-- 面白い事実 -->
      <section class="fun-facts-section">
        <h2>面白いバドミントンの事実</h2>
        <ul>
          <li>バドミントンは、最も速いスポーツの一つで、シャトルが時速300km以上で飛ぶことがあります。</li>
          <li>バドミントンは、インドで起源を持つスポーツです。</li>
          <li>オリンピック競技として正式に採用されたのは1992年です。</li>
        </ul>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BadmintonInfo',
  }
  </script>
  
  <style scoped>
  .badminton-info {
    margin: 20px;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
  }
  
  h1 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 20px;
    color: #f39c12;
  }
  
  h2 {
    font-size: 2.5rem;
    margin-top: 30px;
    color: #2c3e50;
    border-bottom: 3px solid #f39c12;
    padding-bottom: 10px;
  }
  
  section {
    margin-bottom: 40px;
  }
  
  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  
  ul li {
    margin-bottom: 12px;
    font-size: 1.2rem;
  }
  
  strong {
    font-weight: bold;
  }
  
  .intro-section,
  .rule-section,
  .fun-facts-section {
    margin: 20px 0;
  }
  
  .equipment-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 20px;
  }
  
  .card {
    background: #ecf0f1;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  
  .card h3 {
    margin-top: 10px;
    color: #2c3e50;
    font-size: 1.5rem;
  }
  
  .card p {
    font-size: 1.1rem;
    color: #7f8c8d;
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  
  .card:hover p {
    color: #f39c12;
  }
  
  @media (max-width: 768px) {
    .equipment-cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 480px) {
    .equipment-cards {
      grid-template-columns: 1fr;
    }
  }
  </style>
  