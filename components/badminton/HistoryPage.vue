<template>
  <div class="history-page">
    <h1>もっと詳しく</h1>
    <div class="history-content">
      <!-- 起源と発展 -->
      <div class="history-section">
        <h2>起源と発展</h2>
        <div class="history-img">
          <img src="/assets/img/badminton/History/bad1873.jpg" alt="起源と発展のイメージ">
        </div>
        <p>
          バドミントンは、古代インドの「プーナ」という遊びが起源とされています。この遊びは19世紀にイギリスに伝わり、イギリス国内で独自のルールが整備されました。イギリスの貴族たちの間で流行し、バドミントンという名前がつけられました。バドミントンは最初、貴族の間で社交的な遊びとして楽しまれていましたが、次第に競技としての要素も強くなり、世界中に広まりました。20世紀に入り、競技スポーツとしての位置を確立したのです。
        </p>
      </div>
      
      <!-- オリンピック競技へ -->
      <div class="history-section">
        <h2>オリンピック競技へ</h2>
        <div class="history-img">
          <img src="/assets/img/badminton/History/bad1992.jpg" alt="オリンピック競技へ">
        </div>
        <p>
          バドミントンは1992年のバルセロナオリンピックで正式にオリンピック競技として採用されました。これにより、バドミントンは世界的な注目を集め、競技者のレベルも向上しました。オリンピックでの金メダルを目指す選手たちは、世界中で活躍しており、その競技レベルは年々向上しています。アジア諸国、特に中国、韓国、インドネシアなどの国々では、バドミントンが非常に人気のあるスポーツとなっており、世界大会ではこれらの国々から多くの選手が出場しています。
        </p>
      </div>
      
      <!-- 現代のバドミントン -->
      <div class="history-section">
        <h2>現代のバドミントン</h2>
        <div class="history-img">
          <img src="/assets/img/badminton/History/bad2000.jpg" alt="現代のバドミントン">
        </div>
        <p>
          現代のバドミントンは、BWF（世界バドミントン連盟）によって統括され、世界選手権やスディルマンカップなどの国際大会が定期的に開催されています。これらの大会は、選手たちが競い合うための重要な舞台となっています。また、バドミントンは他のスポーツに比べて非常に速いラリーが特徴であり、そのスピード感や戦略的なプレーが観客を魅了しています。テクノロジーの進歩により、選手たちはより効率的なトレーニングを行い、競技のレベルも高まっています。
        </p>
      </div>
      
      <!-- 日本のバドミントンの成長 -->
      <div class="history-section">
        <h2>日本のバドミントンの成長</h2>
        <div class="history-img">
          <img src="/assets/img/badminton/History/badjapan.jpg" alt="日本のバドミントンの成長">
        </div>
        <p>
          日本のバドミントンは近年急速に成長しており、特に女子選手が注目されています。佐藤翔馬や奥原希望といった選手が世界舞台で活躍し、日本国内でもバドミントンへの関心が高まっています。これらの選手たちは、世界ランキングでも高い位置におり、そのパフォーマンスは多くのファンを魅了しています。また、日本国内でのバドミントンの普及活動や、ジュニア選手の育成にも力を入れています。将来的には、さらなる強化が期待されています。
        </p>
      </div>
      
      <!-- 未来のバドミントン -->
      <div class="history-section">
        <h2>未来のバドミントン</h2>
        <div class="history-img">
          <img src="/assets/img/badminton/History/bad2025.jpg" alt="未来のバドミントン">
        </div>
        <p>
          未来のバドミントンは、テクノロジーの進化とともに大きく変わることが予想されています。例えば、選手のパフォーマンスを支援するウェアラブルデバイスや、試合の分析ツールがさらに普及することで、戦術の緻密さが増すでしょう。さらに、バドミントンのエンターテイメント性も向上し、観客との距離が縮まるような試みが進められるでしょう。また、世界中でバドミントンがさらに人気を集め、より多くの国々が競技に参加することが期待されています。これにより、バドミントンはますますグローバルなスポーツとなることでしょう。
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
  background-color: #fff;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
  color: #333;
}

h1 {
  text-align: center;
  font-size: 3.5rem;
  margin-bottom: 60px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
}

.history-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.history-section {
  margin-bottom: 50px;
}

.history-section h2 {
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 15px;
  font-weight: 700;
  text-align: center;
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.history-section p {
  font-size: 16px;
  color: #555;
  line-height: 1.8;
  text-align: justify;
  margin-bottom: 20px;
}

.history-img {
  text-align: center;
  margin-bottom: 20px;
}

.history-img img {
  width: 650px;
  height: 350px;
  object-fit: cover; /* 画像の比率を保ちながら、領域に合わせて切り抜く */
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  h1 {
    font-size: 32px;
  }

  .history-content {
    padding: 20px;
  }

  .history-section h2 {
    font-size: 22px;
  }

  .history-section p {
    font-size: 14px;
  }
}
</style>
