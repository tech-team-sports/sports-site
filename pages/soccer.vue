<script setup lang="ts">
import AppButton from "@/components/AppButton.vue"; // Buttonコンポーネントをインポート

definePageMeta({
    title: "サッカー",
    description: "サッカーの世界へようこそ。スポーツの魅力を深掘りしていきます。",
});
</script>

<template>
    <h2 class="main-title">サッカーの世界へようこそ！</h2>

    <!-- イントロダクションセクション -->
    <section id="intro" class="section intro">
        <h3>サッカーとは</h3>
        <p>
            サッカーは、ボールを足で扱い、ゴールを目指して得点を競うスポーツで、11人対11人のチームでプレイします。
        </p>
    </section>

    <!-- 歴史セクション -->
    <section id="history" class="section history">
        <h3>サッカーの歴史</h3>
        <p>
            サッカーは、19世紀のイギリスで発展し、世界中で最も人気のあるスポーツとなりました。
        </p>
    </section>

    <!-- ルールセクション -->
    <section id="rules" class="section rules">
        <h3>サッカーのルール</h3>
        <ul>
            <li>試合は90分で、前後半45分ずつ行います。</li>
            <li>得点が多いチームが勝者です。</li>
            <li>オフサイドやファウルのルールがあります。</li>
        </ul>
    </section>

    <!-- テクニックセクション -->
    <section id="techniques" class="section techniques">
        <h3>サッカーのテクニック</h3>
        <ul>
            <li>
                ドリブル：ボールを足で巧みに扱いながら相手を抜く技術。
            </li>
            <li>
                パス：仲間にボールを送る技術で、正確さとタイミングが求められます。
            </li>
            <li>
                シュート：ゴールを狙ってボールを蹴り込む技術。
            </li>
        </ul>
    </section>

    <!-- イベント情報セクション -->
    <section id="events" class="section events">
        <h3>サッカーのイベント情報</h3>
        <p>
            欧州CLが始まります。
        </p>
    </section>

    <!-- 有名選手の画像セクション -->
    <section id="famous-players" class="section famous-players">
        <h3>有名選手</h3>
        <div class="players">
            <div class="player">
                <img src="/assets/img/soccer/zidan.jpg" alt="リオネル・メッシ" class="player-image" />
                <p>ジダン</p>
            </div>
            <div class="player">
                <img src="/assets/img/soccer/ke.jpg" alt="クリスティアーノ・ロナウド" class="player-image" />
                <p>エムバペ</p>
            </div>
            <div class="player">
                <img src="/assets/img/soccer/benzema.jpg" alt="ネイマール" class="player-image" />
                <p>ベンゼマ</p>
            </div>
        </div>
    </section>

    <!-- トップページに戻るボタン -->
    <AppButton label="トップページに戻る" />
</template>


<style>
/* ベーススタイル */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f4f9;
    color: #333;
}

h2.main-title {
    text-align: center;
    margin: 40px 0;
    font-size: 2.5rem;
    color: #007bff;
}

/* セクションのスタイル */
.section {
    margin: 40px 0;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.intro {
    background-color: #ffffff;
}

.history {
    background-color: #f1f8ff;
}

.rules {
    background-color: #e6f7ff;
}

.techniques {
    background-color: #f0fff0;
}

.events {
    background-color: #fff8f0;
}

.famous-players {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.players {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
}

.player {
    text-align: center;
    max-width: 200px;
}

.player-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #007bff;
}

h3 {
    font-size: 1.8rem;
    color: #007bff;
    margin-bottom: 15px;
    font-weight: 600;
}

ul {
    list-style-type: none;
    padding-left: 0;
}

ul li {
    margin: 8px 0;
    font-size: 1.1rem;
}

ul li::before {
    content: "• ";
    color: #007bff;
    font-weight: bold;
}
</style>
