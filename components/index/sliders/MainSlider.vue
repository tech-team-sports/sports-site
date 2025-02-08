<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const swiperOptions = {
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3200,
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
          <img src="/assets/img/sliderimg/baseball.jpg" alt="Canyon Image">
        </swiper-slide>
        <swiper-slide>
          <img src="/assets/img/sliderimg/b_stadium.jpg" alt="Autumn Image">
        </swiper-slide>
        <swiper-slide>
          <img src="/assets/img/sliderimg/soccer_slider.jpg" alt="Landscape Image">
        </swiper-slide>
        <swiper-slide>
          <img src="/assets/img/sliderimg/soccer_stadium.jpg" alt="Mountain Image">
        </swiper-slide>
        <swiper-slide>
          <img src="/assets/img/sliderimg/bad_slider.jpg" alt="Trees Image">
        </swiper-slide>
        <swiper-slide>
          <img src="/assets/img/sliderimg/bad_stadium.jpg" alt="Mountains Image">
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