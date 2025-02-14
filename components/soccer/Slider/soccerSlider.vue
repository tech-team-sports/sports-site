<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

import { Pagination, Navigation, Autoplay, Keyboard } from 'swiper/modules';
import swiperOptions from "~/composables/useSlider"; 
</script>

<template>
  <section class="section slider-section">
    <div class="container slider-column">
      <swiper v-bind="swiperOptions" 
      :modules="[Pagination, Navigation, Autoplay, Keyboard]" 
      class="swiper-slider"
      >
        <swiper-slide>
          <img src="/assets/img/sliderimg/soccer_stadium.jpg" alt="Canyon Image">
        </swiper-slide>
        <swiper-slide>
          <img src="/assets/img/socce/play.jpg" alt="Autumn Image">
        </swiper-slide>
        <swiper-slide>
          <img src="/assets/img/socce/ja.jpg" alt="Landscape Image">
        </swiper-slide>
        <swiper-slide>
          <img src="/assets/img/socce/foul.jpg" alt="Landscape Image">
        </swiper-slide>
        <swiper-slide>
          <img src="/assets/img/socce/free.jpg" alt="Landscape Image">
        </swiper-slide>
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
  height: 100%;
}

.swiper-slide img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.swiper-pagination{
  position: relative;
  bottom: auto;
  text-align: center;
  margin-top: 20px;
  
}

</style>
