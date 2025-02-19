<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const swiperOptions = {
    centeredSlides: true, // スライドが中央に表示される
    slidesPerView: 1, // 1枚ずつ表示
    loop: true, // ループ
    autoplay: {
        delay: 3200, // 自動再生の遅延
        disableOnInteraction: false, // ユーザーが操作しても自動再生を停止しない
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: false,
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1, // 小さなスクリーンでも1枚ずつ表示
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 1, // 大きなスクリーンでも1枚ずつ表示
            spaceBetween: 20,
        },
    },
};
</script>

<template>
    <section class="section slider-section">
        <div class="container slider-column">
            <swiper
                v-bind="swiperOptions"
                :modules="[Pagination, Navigation, Autoplay, Keyboard]"
                class="swiper-slider"
            >
                <swiper-slide>
                    <img
                        src="/assets/img/baseball/basetop.jpg"
                        alt="Canyon Image"
                        loading="lazy"
                    />
                </swiper-slide>
                <swiper-slide>
                    <img
                        src="/assets/img/baseball/basetop.jpg"
                        alt="Autumn Image"
                        loading="lazy"
                    />
                </swiper-slide>
                <swiper-slide>
                    <img
                        src="/assets/img/baseball/basetop.jpg"
                        alt="Landscape Image"
                        loading="lazy"
                    />
                </swiper-slide>
                <swiper-slide>
                    <img
                        src="/assets/img/baseball/basetop.jpg"
                        alt="Mountain Image"
                        loading="lazy"
                    />
                </swiper-slide>
                <swiper-slide>
                    <img
                        src="/assets/img/baseball/basetop.jpg"
                        alt="Trees Image"
                        loading="lazy"
                    />
                </swiper-slide>
                <swiper-slide>
                    <img
                        src="/assets/img/baseball/basetop.jpg"
                        alt="Mountains Image"
                        loading="lazy"
                    />
                </swiper-slide>

                <!-- Pagination & Navigation Buttons -->
                <div class="swiper-pagination"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </swiper>
        </div>
    </section>
</template>

<style scoped>
.swiper-slider {
    width: 100%;
    height: 80vh; /* 高さを80%に変更して小さくする */
}

.swiper-slide img {
    width: 100%;
    height: 100%; /* 画像がスライダーの高さに合わせる */
    object-fit: cover; /* 画像が切り取られないように */
}

.swiper-pagination {
    position: relative;
    text-align: center;
    margin-top: 20px;
}

.swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    margin: 0 5px;
    transition: all 0.3s ease-in-out;
}

.swiper-pagination-bullet:hover {
    background-color: rgba(255, 255, 255, 1);
    transform: scale(1.2); /* ホバー時にサイズを大きく */
}

.swiper-pagination-bullet-active {
    background-color: #007bff; /* アクティブなインジケーターに青色 */
    transform: scale(1.3); /* アクティブ時に少し大きく */
}

.swiper-button-next,
.swiper-button-prev {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 20px; /* ボタンの大きさを大きくする */
    cursor: pointer;
    border-radius: 50%; /* 丸くする */
    width: 60px; /* 幅を大きくする */
    height: 60px; /* 高さを大きくする */
    display: flex;
    align-items: center;
    justify-content: center;
}

.swiper-button-next:after,
.swiper-button-prev:after {
    font-size: 30px; /* アイコンのサイズ */
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
    background-color: rgba(0, 0, 0, 0.7);
}
</style>
