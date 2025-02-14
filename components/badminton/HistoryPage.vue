<template>
    <div class="history-page">
      <h1>バドミントンの歴史</h1>
      <div class="history-content">
        <div class="history-section">
          <h2>起源と発展</h2>
          <p>
            バドミントンの起源は、インドの「プーナ」という遊びに由来します。19世紀にイギリスの将校たちがこの遊びを持ち帰り、
            その後、イギリス国内でルールが整備され、現在のバドミントンの形になりました。
          </p>
        </div>
        <div class="history-section">
          <h2>オリンピック競技へ</h2>
          <p>
            1992年のバルセロナオリンピックで正式種目として採用され、以降、世界的な人気スポーツとして発展しました。
            特にアジア諸国では強豪選手が多く、熾烈な戦いが繰り広げられています。
          </p>
        </div>
        <div class="history-section">
          <h2>現代のバドミントン</h2>
          <p>
            現在では、BWF（世界バドミントン連盟）が競技を統括し、
            世界選手権やスディルマンカップなどの国際大会が開催されています。
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HistoryPage",
  };
  </script>
  
  <style scoped>
  .history-page {
    padding: 60px 20px;
    background: linear-gradient(135deg, #4a90e2, #50b4e6);
    min-height: 100vh;
    font-family: 'Arial', sans-serif;
    color: #fff;
  }
  
  h1 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 50px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
  }
  
  .history-content {
    max-width: 800px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.9);
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    color: #333;
  }
  
  .history-section {
    margin-bottom: 30px;
  }
  
  .history-section h2 {
    font-size: 26px;
    color: #2c3e50;
    margin-bottom: 10px;
    font-weight: 600;
  }
  
  .history-section p {
    font-size: 16px;
    color: #555;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 32px;
    }
  
    .history-content {
      padding: 20px;
    }
  }
  </style>
  