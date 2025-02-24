<template>
    <section class="container">
        <h1 class="sports">バドミントンの詳細情報</h1>
        <ul class="items">
            <li class="item">
                <NuxtLink to="/Badminton/badrule">
                    <div class="box">
                        <img src="/assets/img/badminton/kyougi.jpg" alt="バドミントン1">
                        <div class="content">
                            <i class="iconbadminton"></i>
                            <div>
                                <p class="title">競技紹介</p>
                                <p class="description">基本的なルールを詳しく解説</p>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </li>
            <li class="item">
                <NuxtLink to="/Badminton/badHistory">
                    <div class="box">
                        <img src="/assets/img/badminton/rekisi.jpg" alt="バドミントン2">
                        <div class="content">
                            <i class="iconbadminton"></i>
                            <div>
                                <p class="title">歴史</p>
                                <p class="description">バドミントンの歴史を知ろう</p>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </li>
            <li class="item">
                <NuxtLink to="/Badminton/badplayer">
                    <div class="box">
                        <img src="/assets/img/badminton/momota.jpg" alt="バドミントン3">
                        <div class="content">
                            <i class="iconbadminton"></i>
                            <div>
                                <p class="title">選手紹介</p>
                                <p class="description">有名なバドミントン選手を紹介</p>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </li>
            <li class="item">
                <NuxtLink to="/Badminton/badTechniques">
                    <div class="box">
                        <img src="/assets/img/badminton/gijutu.jpg" alt="バドミントン4">
                        <div class="content">
                            <i class="iconbadminton"></i>
                            <div>
                                <p class="title">テクニック</p>
                                <p class="description">試合で使える技術を学ぼう</p>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </li>
            <li class="item">
                <NuxtLink to="/Badminton/badtool">
                    <div class="box">
                        <img src="/assets/img/badminton/racket.jpg" alt="バドミントン5">
                        <div class="content">
                            <i class="iconbadminton"></i>
                            <div>
                                <p class="title">用具</p>
                                <p class="description">ラケットやシャトルの選び方</p>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </li>
            <li class="item">
                <NuxtLink to="/Badminton/badTournament">
                    <div class="box">
                        <img src="/assets/img/badminton/taikai.jpg" alt="バドミントン6">
                        <div class="content">
                            <i class="iconbadminton"></i>
                            <div>
                                <p class="title">大会</p>
                                <p class="description">バドミントンの主要大会を紹介</p>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </section>
</template>

<script setup>
</script>

<style scoped>
.container {
    padding: 1.1rem;
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 50px;
}

.sports {
    margin: 4rem 0 1rem 0;
    margin-bottom: 40px;
    font-size: 3rem;
    font-weight: bold;
    color: #306fad;
    text-align: center;
}

.items {
    display: grid;
    gap: 1.2rem;
    grid-template-columns: repeat(3, 1fr);
}

.item {
    text-align: center;
}

.box {
    position: relative;
    display: block;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 100%;
    /* アスペクト比を16:9に設定 */
    padding-top: 66.66%; /* 16:8の比率 */
    display: flex;
    justify-content: center;
    align-items: center;
}

.box img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* 画像のアスペクト比を保ちながらボックスに合わせる */
    transition: opacity 0.3s ease;
}

.box:hover img {
    opacity: 0.7;
}

.content {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    transition: background 0.3s ease;
}

/* ホバー時の背景色 */
.box:hover .content {
    background: rgba(0, 0, 0, 0.8);
}

/* タイトルと説明のスタイル */
.title {
    font-size: 1.2rem;
    font-weight: bold;
}

.description {
    font-size: 0.9rem;
    margin-top: 2px;
    color: #ddd;
}

/* レスポンシブ対応 */
@media screen and (max-width: 1023px) {
    .items {
        grid-template-columns: repeat(2, 1fr);
    }

    .content {
        padding: 8px;
        font-size: 1rem;
        gap: 6px;
    }

    .title {
        font-size: 1.1rem;
    }

    .description {
        font-size: 0.8rem;
    }
}

@media screen and (max-width: 767px) {
    .content {
        padding: 6px;
        font-size: 0.9rem;
        gap: 4px;
    }

    .sports {
        font-size: 2.4rem;
    }

    .title {
        font-size: 1rem;
    }

    .description {
        font-size: 0.75rem;
    }

    /* アイコンのサイズ調整 */
    .iconbadminton::before {
        width: 16px;
        height: 16px;
        margin-right: 6px;
    }
}

@media screen and (max-width: 480px) {
    .items {
        grid-template-columns: 1fr;
    }

    .sports {
        font-size: 2.2rem;
    }

    .box {
        padding-top: 60%; /* 16:8の比率 */
    }
}

/* ------------------------------
    アイコン
  ------------------------------ */
.iconbadminton::before {
    content: "";
    background-image: url("/assets/img/icon/badoicon.png");
    background-size: contain;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-right: 8px;
    margin-bottom: 1px;
    vertical-align: middle;
}

</style>
