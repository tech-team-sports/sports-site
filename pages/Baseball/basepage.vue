<template>
    <div>
        <BaseTitle />
        <div class="baseball-intro">
            <h1 class="title" v-if="baseballData.title">
                {{ baseballData.title }}
            </h1>
            <p class="description" v-if="baseballData.description">
                {{ baseballData.description }}
            </p>

            <div
                v-for="section in baseballData.sections"
                :key="section.heading"
                class="section"
            >
                <h2 class="subheading">{{ section.heading }}</h2>
                <div
                    v-for="subsection in section.subsections"
                    :key="subsection.title"
                    class="subsection"
                >
                    <h3 class="sub-subheading">{{ subsection.title }}</h3>
                    <p class="description">{{ subsection.content }}</p>

                    <ul v-if="subsection.listItems" class="list-items">
                        <li
                            v-for="item in subsection.listItems"
                            :key="item"
                            class="list-item"
                        >
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <BaseButton />
    </div>
</template>

<script setup>
import { useBaseball } from "@/composables/Baseball/useBaseball";
import BaseTitle from "/components/baseball/BaseTitle.vue";
import BaseButton from "/components/baseball/BaseButton.vue";

const { baseballData } = useBaseball();
</script>

<style scoped>
/* 全体レイアウト */
.baseball-intro {
    padding: 5rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    background-color: #f8f9fa;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

/* タイトル */
.title {
    font-size: 4.5rem;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    text-align: center;
    color: #34495e;
    letter-spacing: -1px;
    margin-bottom: 2rem;
    text-transform: uppercase;
    animation: fadeIn 1.5s ease-in-out;
}

/* 概要テキスト */
.description {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #7f8c8d;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 4rem;
}

/* セクションごとのデザイン */
.section {
    margin-bottom: 4rem;
    animation: fadeIn 2s ease-in-out;
}

/* サブタイトルのデザイン */
.subheading {
    font-size: 2.8rem;
    font-weight: 700;
    color: #2980b9;
    margin-bottom: 1.5rem;
    border-bottom: 3px solid #2980b9;
    padding-bottom: 0.5rem;
    transition: color 0.3s ease;
}

.subheading:hover {
    color: #3498db;
}

/* サブセクションのタイトル */
.sub-subheading {
    font-size: 2.2rem;
    font-weight: 600;
    margin-top: 2rem;
    color: #2ecc71;
    text-transform: capitalize;
}

/* 各リストアイテムのスタイル */
.list-items {
    margin-top: 1rem;
    padding-left: 20px;
    font-size: 1.1rem;
    list-style: none;
}

.list-item {
    margin-bottom: 1rem;
    color: #34495e;
    line-height: 1.6;
    position: relative;
    padding-left: 30px;
}

/* リストアイテムにアイコンを追加 */
.list-item::before {
    content: "▶";
    position: absolute;
    left: 0;
    color: #2ecc71;
    font-size: 1.5rem;
}

/* ホバーエフェクト */
.list-item:hover {
    color: #2ecc71;
    transition: color 0.3s ease-in-out;
}

/* アニメーション */
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* レスポンシブデザイン */
@media (max-width: 768px) {
    .title {
        font-size: 3rem;
    }

    .subheading {
        font-size: 2rem;
    }

    .sub-subheading {
        font-size: 1.8rem;
    }

    .description {
        font-size: 1.1rem;
    }
}
</style>
