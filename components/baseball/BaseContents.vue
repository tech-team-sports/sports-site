<template>
    <section class="container">
        <h2 class="sports">野球の詳細情報</h2>
        <ul class="items">
            <li class="item">
                <NuxtLink to="/baseball/baserule">
                    <div class="box">
                        <img src="/assets/img/baseball/base1.jpg" alt="野球1" />
                        <div class="content">
                            <i class="iconbaseball"></i>
                            <div>
                                <p class="title">野球ルール</p>
                                <p class="description">
                                    基本的なルールを詳しく解説
                                </p>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </li>
            <li class="item">
                <NuxtLink to="/baseball/baseplayer">
                    <div class="box">
                        <img
                            src="/assets/img/baseball/name.jpg"
                            alt="野球2"
                        />
                        <div class="content">
                            <i class="iconbaseball"></i>
                            <div>
                                <p class="title">選手紹介</p>
                                <p class="description">有名な野球選手を紹介</p>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </li>
            <li class="item">
                <NuxtLink to="/baseball/basepage">
                    <div class="box">
                        <img src="/assets/img/baseball/base3.jpg" alt="野球3" />
                        <div class="content">
                            <i class="iconbaseball"></i>
                            <div>
                                <p class="title">テクニック</p>
                                <p class="description">
                                    試合で使える技術を学ぼう
                                </p>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </li>
            <li class="item">
                <NuxtLink to="/baseball/basetool">
                    <div class="box">
                        <img
                            src="/assets/img/baseball/base2.jpg"
                            alt="野球4"
                        />
                        <div class="content">
                            <i class="iconbaseball"></i>
                            <div>
                                <p class="title">用具</p>
                                <p class="description">
                                    グローブやバットの選び方
                                </p>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </li>
            <li class="item">
                <NuxtLink to="/baseball/baseTournament">
                    <div class="box">
                        <img src="/assets/img/baseball/base5.jpg" alt="野球5" />
                        <div class="content">
                            <i class="iconbaseball"></i>
                            <div>
                                <p class="title">大会</p>
                                <p class="description">野球の主な大会紹介</p>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </li>
            <li class="item">
                <NuxtLink to="/baseball/baseHistory">
                    <div class="box">
                        <img src="/assets/img/baseball/base6.jpg" alt="野球6" />
                        <div class="content">
                            <i class="iconbaseball"></i>
                            <div>
                                <p class="title">歴史</p>
                                <p class="description">野球の歴史を知ろう</p>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </section>
</template>

<script setup></script>

<style scoped>
.container {
    padding: 1.1rem;
    max-width: 1200px;
    margin: 0 auto;
}

.sports {
    margin: 2rem 0 1rem 0;
    font-size: 2rem;
    color: #00796b;
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
    height: 250px; /* ボックスの高さを統一 */
}

.box img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 画像の比率を統一 */
    transition: opacity 0.3s ease;
}

.box:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
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

.box:hover .content {
    background: rgba(0, 0, 0, 0.8);
}

.title {
    font-size: 1.2rem;
    font-weight: bold;
}

.description {
    font-size: 0.9rem;
    margin-top: 2px;
    color: #ddd;
}

@media screen and (min-width: 1024px) {
    .items {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
    .items {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 767px) {
    .items {
        grid-template-columns: repeat(1, 1fr);
    }
}

/* ------------------------------
    アイコン
  ------------------------------ */
.iconbaseball::before {
    content: "";
    background-image: url("/assets/img/icon/yakyuicon.png");
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
