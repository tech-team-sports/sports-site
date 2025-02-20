<template>
  <div class="tournament-page">
    <section class="tournament-types">
      <h1>大会の種類</h1>
      <ul class="tournament-list">
        <li class="tournament-card">
          <img src="/assets/img/badminton/racket.jpg" alt="オリンピック大会" class="tournament-image" />
          <div class="card-content">
            <div class="title">
              <div class="icon">&#x1F3C6;</div>
              <h2>オリンピック大会</h2>
            </div>
            <p>オリンピック大会は、世界中のトップアスリートが集まる最高峰のスポーツイベントです。バドミントンは1992年のバルセロナオリンピックで正式競技に採用され、以後、シングルス、ダブルス、混合ダブルスの3種目が行われます。選手にとって人生をかけた舞台であり、金メダルを目指して戦います。特に、オリンピックで金メダルを獲得することは、選手のキャリアを一段と輝かせる成果となり、バドミントンの魅力が世界中に広まります。</p>
          </div>
        </li>
        <li class="tournament-card">
          <img src="/assets/img/badminton/racket.jpg" alt="地方大会" class="tournament-image" />
          <div class="card-content">
            <div class="title">
              <div class="icon">&#x1F3C3;&#x200D;&#x2640;&#xFE0F;</div>
              <h2>地方大会</h2>
            </div>
            <p>地域ごとの大会で、都道府県選手権や地区予選大会があります。優秀な選手は全国大会や大きな大会へ進むチャンスを得ます。地域に密着した大会で、バドミントンの普及にも貢献しています。これらの大会は、地元選手にとっては一大イベントであり、地元の応援を受けながら技術を磨く場でもあります。また、ここで好成績を収めることが、次のステップへの大きな足掛かりとなります。</p>
          </div>
        </li>
        <li class="tournament-card">
          <img src="/assets/img/badminton/racket.jpg" alt="日本バドミントン選手権大会" class="tournament-image" />
          <div class="card-content">
            <div class="title">
              <div class="icon">&#x1F3C0;</div>
              <h2>日本バドミントン選手権大会</h2>
            </div>
            <p>国内最も権威のある大会で、シングルス、ダブルス、混合ダブルスの競技が行われます。全国から集まるトップ選手が、名実ともに日本一の座を争います。特に、この大会で優勝することは、選手にとって誇りとなり、国際大会への道を開く重要なステップとなります。日本バドミントン界の実力者たちが集まり、観客も熱狂するイベントです。</p>
          </div>
        </li>
        <li class="tournament-card">
          <img src="/assets/img/badminton/racket.jpg" alt="インターハイ（高校総体）" class="tournament-image" />
          <div class="card-content">
            <div class="title">
              <div class="icon">&#x1F3D1;</div>
              <h2>インターハイ（高校総体）</h2>
            </div>
            <p>全国の高校生が集まり競う大会で、将来のプロ選手や大学生選手にも注目される大会です。シングルス、ダブルス、団体戦が行われ、若き才能たちがしのぎを削ります。この大会で活躍することは、次の世代のスター選手が誕生する瞬間でもあり、参加者にとっては、全国レベルの競技力を証明する絶好の機会となります。インターハイの成績は、大学推薦やプロ入りのきっかけにもなるため、高校生選手にとっては非常に重要な大会です。</p>
          </div>
        </li>
        <li class="tournament-card">
          <img src="/assets/img/badminton/racket.jpg" alt="全日本社会人バドミントン大会" class="tournament-image" />
          <div class="card-content">
            <div class="title">
              <div class="icon">&#x1F3C6;&#xFE0F;</div>
              <h2>全日本社会人バドミントン大会</h2>
            </div>
            <p>社会人選手が集まり、企業チームやクラブチームが競う大会です。仕事を持ちながら競技を続ける選手たちが集まり、競技レベル向上に寄与しています。選手たちは忙しい仕事の合間を縫って練習を重ね、バドミントンに対する情熱を燃やし続けています。この大会は、プロ選手とはまた異なる視点での競技力が求められるため、非常にユニークな大会と言えるでしょう。</p>
          </div>
        </li>
        <li class="tournament-card">
          <img src="/assets/img/badminton/racket.jpg" alt="アジア選手権大会" class="tournament-image" />
          <div class="card-content">
            <div class="title">
              <div class="icon">&#x1F3C8;</div>
              <h2>アジア選手権大会</h2>
            </div>
            <p>アジア各国のトップ選手が集まり、アジアナンバーワンを決める大会です。オリンピックや世界選手権に匹敵する重要な大会であり、アジアのバドミントンの実力を知る絶好の機会です。選手たちは、アジアの名誉をかけて戦い、その後の世界大会へのチャンスをつかむための大きな舞台として位置付けられています。</p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TournamentPage',
};
</script>

<style scoped>
.tournament-page {
  font-family: 'Arial', sans-serif;
  margin: 0 auto;
  padding: 20px;
  max-width: 1200px;
}

section {
  margin-bottom: 40px;
}

h1 {
  text-align: center;
  font-size: 3.5rem;
  font-weight: bold;
  color: #333;
  margin-top: 30px;
  margin-bottom: 40px;
}

.tournament-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
  gap: 20px;
}

.tournament-card {
  background-color: #f9f9f9;
  border-left: 5px solid #4caf50;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tournament-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
}

.tournament-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}

.card-content {
  text-align: center;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}

.icon {
  font-size: 2rem;
  color: #4caf50;
  margin-right: 10px;
}

h2 {
  font-size: 1.5rem;
  color: #333;
}

p {
  font-size: 1rem;
  color: #666;
  text-align: justify;
  line-height: 1.6;
}

li:hover .icon {
  color: #ff5722;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.3rem;
  }

  p {
    font-size: 0.9rem;
  }
}
</style>
