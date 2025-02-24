<template>
    <div class="Baseball-info">
        <h1>野球の基本情報</h1>

        <!-- 野球の魅力 -->
        <section class="intro-section">
            <h2>野球の魅力</h2>
            <p>
                野球は、素早い反応と戦略が求められるエキサイティングなスポーツです。シンプルなルールながらも奥深いゲーム性を持っており、プレイヤー同士の緊張感溢れる戦いが繰り広げられます。
            </p>
        </section>

        <!-- 野球のルール -->
        <section class="rule-section">
            <h2>野球のルール</h2>
            <p>
                野球は、9人制のチームで行うスポーツです。ピッチャーが投げたボールをバッターが打ち、守備側はボールをキャッチしてアウトを取ることで得点を防ぎます。得点は、バッターが塁を回りホームプレートに戻ることで得られます。
            </p>
            <ul>
                <li><strong>ゲームの開始：</strong>試合はピッチャーがボールを投げることから始まります。</li>
                <li><strong>得点：</strong>プレイヤーがベースを一周してホームプレートに戻ることで1点が入ります。</li>
                <li><strong>アウトのルール：</strong>三振やキャッチャーが打球をキャッチすることなどでアウトになります。</li>
                <li><strong>イニング：</strong>1回のイニングで攻撃と守備が交互に行われます。</li>
            </ul>
        </section>

        <!-- 必要な用具 -->
        <section class="equipment-section">
            <h2>必要な用具</h2>
            <p>野球をプレイするためには、以下の用具が必要です。</p>
            <div class="equipment-cards">
                <div class="card">
                    <h3>バット</h3>
                    <p>バットは、打撃を行うための重要な道具です。軽量で丈夫なものを選びます。</p>
                </div>
                <div class="card">
                    <h3>ボール</h3>
                    <p>野球専用のボールは、硬式と軟式があります。硬式は主にプロや大学で使われます。</p>
                </div>
                <div class="card">
                    <h3>グローブ</h3>
                    <p>キャッチャー用や外野用など、ポジションに応じたグローブが必要です。</p>
                </div>
            </div>
        </section>

        <!-- 得点方法 -->
        <section class="scoring-section">
            <h2>野球の得点方法</h2>
            <p>
                野球では、ランナーが塁を回ってホームに帰ることによって得点が入ります。得点は、バッターがヒットを打つか、守備のミスを誘って塁を進めることで得られます。
            </p>
            <ul>
                <li><strong>得点：</strong>バッターが打ったボールがフェアゾーンに飛ぶと、ランナーは塁を回ります。</li>
                <li><strong>アウトの方法：</strong>ピッチャーがバッターを三振させる、または守備がボールをキャッチすることでアウトになります。</li>
            </ul>
        </section>

        <!-- 面白い事実 -->
        <section class="fun-facts-section">
            <h2>面白い野球の事実</h2>
            <ul>
                <li>野球は、アメリカで最も人気のあるスポーツの一つです。</li>
                <li>野球のボールは、1試合で何度も使用されますが、毎回ボールが交換されます。</li>
                <li>MLB（メジャーリーガー）では、1試合に30～40個のボールを使うこともあります。</li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    name: "BaseballInfo",
};
</script>

<style scoped>
.Baseball-info {
    margin: 40px auto;
    max-width: 1200px;
    font-family: 'Lora', serif;
    color: #2c3e50;
    background-color: #ffffff;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.15);
}

h1 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 30px;
    color: #00aaff;
    font-weight: bold;
    letter-spacing: 4px;
    text-transform: uppercase;
}

h2 {
    font-size: 2rem;
    margin-top: 25px;
    color: #2c3e50;
    padding-bottom: 12px;
    border-bottom: 3px solid #00aaff;
}

section {
    margin-bottom: 60px;
}

ul {
    list-style-type: circle;
    margin-left: 30px;
}

ul li {
    margin-bottom: 12px;
    font-size: 1.1rem;
    line-height: 1.6;
}

strong {
    font-weight: bold;
    color: #00aaff;
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
    background-color: #f5f5f5;
    border-radius: 15px;
    padding: 25px;
    text-align: center;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
}

.card h3 {
    margin-top: 10px;
    font-size: 1.6rem;
    color: #34495e;
}

.card p {
    font-size: 1.1rem;
    color: #7f8c8d;
    line-height: 1.6;
}

.card:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 80px rgba(0, 0, 0, 0.2);
}

.card:hover p {
    color: #2980b9;
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
