<template>
    <section class="container">
        <h2 class="sports">バドミントンの詳細情報</h2>
        <ul class="items">
            <li class="item">
                <NuxtLink to="/Badminton/badpage">
                    <div class="box">
                        <img src="/assets/img/badminton/bad.jpg" alt="バドミントン1">
                        <div class="content">
                            <i class="iconbadminton"></i>バドミントンルール<i class="arrow"></i>
                        </div>
                    </div>
                </NuxtLink>
            </li>
            <li class="item">
                <NuxtLink to="#">
                    <div class="box">
                        <img src="/assets/img/badminton/bad.jpg" alt="バドミントン2">
                        <div class="content">
                            <i class="iconbadminton"></i>選手紹介
                        </div>
                    </div>
                </NuxtLink>
            </li>
            <li class="item">
                <NuxtLink to="#">
                    <div class="box">
                        <img src="/assets/img/badminton/bad.jpg" alt="バドミントン3">
                        <div class="content">
                            <i class="iconbadminton"></i>テクニック
                        </div>
                    </div>
                </NuxtLink>
            </li>
            <li class="item">
                <NuxtLink to="#">
                    <div class="box">
                        <img src="/assets/img/badminton/bad.jpg" alt="バドミントン4">
                        <div class="content">
                            <i class="iconbadminton"></i>用具
                        </div>
                    </div>
                </NuxtLink>
            </li>
            <li class="item">
                <NuxtLink to="#">
                    <div class="box">
                        <img src="/assets/img/badminton/bad.jpg" alt="バドミントン5">
                        <div class="content">
                            <i class="iconbadminton"></i>大会
                        </div>
                    </div>
                </NuxtLink>
            </li>
            <li class="item">
                <NuxtLink to="#">
                    <div class="box">
                        <img src="/assets/img/badminton/bad.jpg" alt="バドミントン6">
                        <div class="content">
                            <i class="iconbadminton"></i>歴史
                        </div>
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </section>
</template>

<script setup>
// 特にスクリプト部分には変更は不要ですが、必要なデータを追加することができます。
</script>

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
    grid-template-columns: repeat(3, 1fr); /* 1列に3つ並べる */
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
}

.box img {
    width: 100%;
    height: auto;
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
    transition: background 0.3s ease;
}

.box:hover .content {
    background: rgba(0, 0, 0, 0.8);
}

.arrow {
    margin-left: 8px;
    font-size: 14px;
}

@media screen and (min-width: 1024px) {
    .items {
        grid-template-columns: repeat(3, 1fr); /* 1列に3つ並べる */
    }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
    .items {
        grid-template-columns: repeat(2, 1fr); /* 2列に変更 */
    }
}

@media screen and (max-width: 767px) {
    .items {
        grid-template-columns: repeat(1, 1fr); /* 1列に変更 */
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
