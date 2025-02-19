<template>
    <div class="history-page">
        <h1>野球の歴史</h1>
        <div class="history-content">
            <!-- 起源と発展 -->
            <div class="history-section">
                <div class="history-img">
                    <img
                        src="/assets/img/baseball/baseball-history.jpg"
                        alt="起源と発展のイメージ"
                    />
                </div>
                <h2>起源と発展</h2>
                <p>
                    野球は、アメリカ合衆国で生まれたとされています。19世紀の初め、イギリスから移民した人々の間で似たような遊びが行われていましたが、アメリカで現在のようなルールが整備され、発展しました。最初は子供たちの遊びとして広まりましたが、次第に競技としての性格を強め、プロフェッショナルスポーツとして確立されました。20世紀に入り、野球は世界的に広まり、特にアメリカでは「国民的スポーツ」としての地位を確立しました。
                </p>
            </div>

            <!-- オリンピック競技へ -->
            <div class="history-section">
                <div class="history-img">
                    <img
                        src="/assets/img/baseball/baseball-olympics.jpg"
                        alt="オリンピック競技へ"
                    />
                </div>
                <h2>オリンピック競技へ</h2>
                <p>
                    野球は1992年のバルセロナオリンピックで正式にオリンピック競技として採用されました。これにより、野球は世界的な注目を集め、競技者のレベルも向上しました。オリンピックでの金メダルを目指す選手たちは、世界中で活躍しており、その競技レベルは年々向上しています。アジア諸国、特に日本、韓国、台湾などの国々では、野球が非常に人気のあるスポーツとなっており、世界大会ではこれらの国々から多くの選手が出場しています。
                </p>
            </div>

            <!-- 現代の野球 -->
            <div class="history-section">
                <div class="history-img">
                    <img
                        src="/assets/img/baseball/baseball-modern.jpg"
                        alt="現代の野球"
                    />
                </div>
                <h2>現代の野球</h2>
                <p>
                    現代の野球は、WBSC（世界野球ソフトボール連盟）によって統括され、世界選手権やワールドカップなどの国際大会が定期的に開催されています。これらの大会は、選手たちが競い合うための重要な舞台となっています。また、野球は他のスポーツに比べて非常に戦略的であり、その戦術やチームワークが観客を魅了しています。テクノロジーの進歩により、選手たちはより効率的なトレーニングを行い、競技のレベルも高まっています。
                </p>
            </div>

            <!-- 日本の野球の成長 -->
            <div class="history-section">
                <div class="history-img">
                    <img
                        src="/assets/img/baseball/baseball-japan.jpg"
                        alt="日本の野球の成長"
                    />
                </div>
                <h2>日本の野球の成長</h2>
                <p>
                    日本の野球は近年急速に成長しており、特にプロ野球が非常に盛り上がりを見せています。日本の野球リーグ（NPB）は、国内外で注目を集めており、多くの選手がメジャーリーグに挑戦しています。また、日本国内での野球の普及活動や、ジュニア選手の育成にも力を入れています。世界的にも注目される選手が増えており、日本の野球はこれからますます発展することが期待されています。
                </p>
            </div>

            <!-- 未来の野球 -->
            <div class="history-section">
                <div class="history-img">
                    <img
                        src="/assets/img/baseball/baseball-future.jpg"
                        alt="未来の野球"
                    />
                </div>
                <h2>未来の野球</h2>
                <p>
                    未来の野球は、テクノロジーの進化とともに大きく変わることが予想されています。例えば、選手のパフォーマンスを支援するウェアラブルデバイスや、試合の分析ツールがさらに普及することで、戦術の緻密さが増すでしょう。さらに、野球のエンターテイメント性も向上し、観客との距離が縮まるような試みが進められるでしょう。また、世界中で野球がさらに人気を集め、より多くの国々が競技に参加することが期待されています。これにより、野球はますますグローバルなスポーツとなることでしょう。
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
    font-family: "Arial", sans-serif;
    color: #333;
}

h1 {
    text-align: center;
    font-size: 40px;
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
    padding: 15px;
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
    width: 500px; /* 幅を指定 */
    max-width: 500px; /* 親要素の幅に合わせる */
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
