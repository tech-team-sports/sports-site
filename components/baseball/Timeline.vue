<template>
    <div class="slider-container">
        <swiper
            :modules="modules"
            :slides-per-view="5"
            :space-between="20"
            navigation
            :scrollbar="{ draggable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            ref="swiperRef"
            class="custom-swiper"
        >
            <swiper-slide
                v-for="(year, index) in years"
                :key="year"
                @click="showContent(index)"
                class="year-slide"
            >
                <h3>{{ year }}年</h3>
            </swiper-slide>
        </swiper>

        <transition name="fade">
            <div v-if="currentContent" class="content-section">
                <h3>{{ currentContent.title }}</h3>
                <p>{{ currentContent.text }}</p>
            </div>
        </transition>
    </div>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ref } from "vue";

export default {
    components: { Swiper, SwiperSlide },
    setup() {
        const years = [
            1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000,
        ];
        const contents = [
            { title: "1900年 - 野球の歴史", text: "1900年、野球はアメリカでさらに発展し、プロリーグが盛んになり始めました。新たなルールが導入され、試合の戦術が洗練されていきました。" },
            { title: "1910年 - 野球の普及", text: "1910年、メジャーリーグが成長し、アメリカ国内での人気が急上昇しました。この時期に名選手が数多く誕生し、球場の観客数も増えました。" },
            { title: "1920年 - ベーブ・ルースの活躍", text: "1920年、ベーブ・ルースが本塁打王として活躍し、野球人気を世界的に押し上げました。この年は、パワーヒッターの時代の幕開けとなりました。" },
            { title: "1930年 - 日本プロ野球の誕生", text: "1930年、日本でプロ野球が誕生し、初の公式リーグが設立されました。これにより、日本国内での野球人気が急激に高まりました。" },
            { title: "1940年 - 戦争の影響", text: "1940年、第二次世界大戦の影響で多くのプロ野球リーグが中断されました。しかし、戦後すぐにリーグは復活し、再び野球人気が高まりました。" },
            { title: "1950年 - 日本プロ野球の本格化", text: "1950年、日本プロ野球がセ・リーグとパ・リーグに分かれ、現在のリーグ制が確立されました。" },
            { title: "1960年 - 野球の国際化", text: "1960年、野球がアメリカだけでなく、世界中に広まり、各国でプロリーグが発足し始めました。" },
            { title: "1970年 - MLBの拡大", text: "1970年、MLBは新たな球団を増やし、リーグの規模を拡大しました。テレビ中継も本格化し、世界中で野球が観戦されるようになりました。" },
            { title: "1980年 - 日本人選手の挑戦", text: "1980年、日本人選手がMLBに挑戦し始め、野球の国際交流が活発化しました。" },
            { title: "1990年 - 野茂英雄のMLB進出", text: "1990年、野茂英雄がMLBに進出し、日本人選手の海外挑戦の道を切り開きました。これを機に多くの日本人選手がアメリカで活躍するようになりました。" },
            { title: "2000年 - WBCの開催", text: "2000年、ワールド・ベースボール・クラシック（WBC）が構想され、国際的な野球大会の開催が決まりました。これにより、野球の世界的な発展がさらに進みました。" },
        ];
        const currentContent = ref(null);

        const showContent = (index) => {
            currentContent.value = contents[index];
        };

        return { years, contents, currentContent, showContent, modules: [Navigation, Pagination, Scrollbar, A11y] };
    },
};
</script>

<style scoped>
.slider-container {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
}

.custom-swiper {
    background: linear-gradient(to right, #4facfe, #00f2fe);
    padding: 10px;
    border-radius: 10px;
}

.year-slide {
    background: white;
    padding: 15px;
    border-radius: 10px;
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
}

.year-slide:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.content-section {
    margin-top: 30px;
    text-align: center;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.content-section h3 {
    font-size: 2rem;
    margin-bottom: 10px;
}

.content-section p {
    font-size: 1.2rem;
    color: #555;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
