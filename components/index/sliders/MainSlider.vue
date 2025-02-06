<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const swiperOptions = {
  centeredSlides: true,
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
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
      slidesPerView: 1.25,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
};
</script>

<template>
  <section class="section slider-section">
    <div class="container slider-column">
      <swiper v-bind="swiperOptions" 
      :modules="[Pagination, Navigation, Autoplay, Keyboard]" 
      class="swiper-slider"
      >
        <swiper-slide>
          <img src="https://cdn.pixabay.com/photo/2022/11/13/18/09/canyon-7589820_1280.jpg" alt="Canyon Image">
        </swiper-slide>
        <swiper-slide>
          <img src="https://cdn.pixabay.com/photo/2022/11/02/22/33/autumn-7566201_1280.jpg" alt="Autumn Image">
        </swiper-slide>
        <swiper-slide>
          <img src="https://cdn.pixabay.com/photo/2023/04/05/09/44/landscape-7901065_1280.jpg" alt="Landscape Image">
        </swiper-slide>
        <swiper-slide>
          <img src="https://cdn.pixabay.com/photo/2020/09/04/16/18/mountains-5544365_1280.jpg" alt="Mountain Image">
        </swiper-slide>
        <swiper-slide>
          <img src="https://cdn.pixabay.com/photo/2022/12/09/22/55/trees-7646226_1280.jpg" alt="Trees Image">
        </swiper-slide>
        <swiper-slide>
          <img src="https://cdn.pixabay.com/photo/2019/09/13/11/47/mountains-4473760_1280.jpg" alt="Mountains Image">
        </swiper-slide>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </swiper>
    </div>
  </section>
</template>

<style scoped>
/* スライダーのスタイル調整 */
.swiper-slider {
  width: 100%;
  height: 100%;
}

.swiper-slide img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>

