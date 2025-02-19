<template>
    <div class="competition-rules">
        <div class="top">
            <h1>バドミントンの競技ルール</h1>
            <img src="/assets/img/badminton/kyougi.jpg" alt="バドミントンのルール">
        </div>
        <hr>
      <div class="rule-item">
        <h2 class="description">試合の形式</h2>
        <p class="text">バドミントンの試合は、シングルス（1対1）またはダブルス（2対2）で行われます。試合は通常、ゲーム形式で進行し、1セット11点または21点を先取した選手がそのセットを勝利します。3セットマッチが一般的で、最初に2セットを先取した選手が勝者となります。セットの間に1分間の休憩が設けられることが多いです。</p>
      </div>
      <hr>
      <div class="rule-item">
        <h2 class="description">サーブ</h2>
        <p class="text">サーブはゲームを開始する際に重要な役割を果たします。シングルスの場合、サーブは右側のサービスエリアから始まり、次に左側のエリアにサーブを打ちます。サーブが不正の場合、相手に得点が与えられます。ダブルスでは、サーブが交互に行われます。</p>
      </div>
      <hr>
      <div class="rule-item">
        <h2 class="description">得点方法</h2>
        <p class="text">バドミントンでは、シャトルが相手コートに落ちるか、相手がシャトルを返せなかった場合に得点が入ります。また、相手が規則に違反した場合にも得点が加算されます。</p>
      </div>
      <hr>
      <div class="rule-item">
        <h2 class="description">反則</h2>
        <p class="text">バドミントンの反則には、シャトルがネットを越えない、コート外に出る、相手のコートに立ち入るなどがあります。反則が発生すると、得点が相手に与えられます。</p>
      </div>
      <hr>
      <div class="rule-item">
        <h2 class="description">ゲームの進行</h2>
        <p class="text">ゲームが進行する中で、選手はシャトルの飛び方やスピードを読みながら、素早く反応する必要があります。ダブルスではパートナーとの連携も重要です。</p>
      </div>
      <hr>
      <div class="rule-item">
        <h2 class="description">ラリー</h2>
        <p class="text">ラリーとは、サーブが行われた後、シャトルが双方のプレイヤー間で打ち合われる場面です。選手は様々なショットを使い分けて、相手の隙間を狙う戦術を取ります。</p>
      </div>
      <hr>
      <div class="rule-item">
        <h2 class="description">試合の終了</h2>
        <p class="text">試合が終了する条件は、最初に2セットを取った選手が勝者となることです。試合が終わると、両選手はお互いにスポーツマンシップを持って握手を交わします。</p>
      </div>

      <div class="sub">
      <h2 class="subtitle">バドミントンの見どころ</h2>
      <p class="subdescription">
        バドミントンの魅力はそのスピード感と戦略性にあります。選手は俊敏な動きでシャトルを打ち返し、
        相手の隙を突くスマッシュやネットプレーが試合の見どころです。また、持久力と瞬発力が求められるため、
        体力と技術の駆け引きが楽しめます。
      </p>
    </div>

    </div>
</template>

<style scoped>
.competition-rules {
  background-color: #3d3fb6;
  padding: 40px;
  border-radius: 80px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.top {
    margin-bottom: 40px;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}

img {
  display: block;
  margin: 0 auto;
  width: 80%;
  max-width: 600px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.description {
  color: #d2ff00;
  font-size: 1.5rem;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: bold;
  display: inline-block;
  width: 30%;
  text-align: center;
}

.text {
  line-height: 1.6;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 15px;
  display: inline-block;
  width: 65%;
}

hr {
  border: none;
  border-top: 2px solid #ecf0f1;
  margin: 20px 0;
}

.rule-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.sub {
  background-color: #f9ff12;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin-top: 40px;
  margin-bottom: 20px;
  color: white;
  width: 80%; /* 幅を50%に設定して小さくします */
  margin-left: auto; /* 右寄せにするために自動的に左のマージンを設定 */
  margin-right: 0; /* 右のマージンを0に設定 */
}

.subtitle {
  font-size: 1.8rem;
  font-weight: bold;
  color: #3535af;
  margin-bottom: 10px;
}

.subdescription {
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.6;
  color: #384149;
}
</style>
