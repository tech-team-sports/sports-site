<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'; // 必要なCSSをインポート
</script>

<template>
  <swiper
    :slides-per-view="3"
    :space-between="50"
    pagination
    navigation
    loop
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
  </swiper>
</template>

<style scoped>
/* スライダーのスタイル調整 */
.swiper {
  width: 100%;
  height: 100%;
}
</style>

