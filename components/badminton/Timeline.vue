<template>
  <div class="slider-container">
    <!-- 年号リスト（スライダー） -->
    <swiper
      :modules="modules"
      :slides-per-view="5"
      :space-between="20"
      navigation
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      ref="swiperRef"
    >
      <swiper-slide v-for="(year, index) in years" :key="year" @click="showContent(index)">
        <div class="year-slide">
          <h3>{{ year }}年</h3>
        </div>
      </swiper-slide>
    </swiper>

    <!-- コンテンツ表示エリア -->
    <div v-if="currentContent" class="content-section">
      <h3>{{ currentContent.title }}</h3>
      <p>{{ currentContent.text }}</p>
    </div>
  </div>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ref } from 'vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const years = [1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000]; // 年号リスト
    const contents = [
      { title: "1900年 - 重要な出来事", text: "1900年の出来事の詳細。バドミントンの発展がありました。" },
      { title: "1910年 - 重要な出来事", text: "1910年の出来事の詳細。バドミントンの大会が増加しました。" },
      { title: "1920年 - 重要な出来事", text: "1920年の出来事の詳細。バドミントンの国際競技化が始まりました。" },
      { title: "1930年 - 重要な出来事", text: "1930年の出来事の詳細。バドミントンがより広まった時期です。" },
      { title: "1940年 - 重要な出来事", text: "1940年の出来事の詳細。戦争の影響で競技の活動が一時的に制限されました。" },
      { title: "1950年 - 重要な出来事", text: "1950年の出来事の詳細。国際大会が盛んに行われるようになりました。" },
      // 追加する内容...
    ];
    const currentContent = ref(null); // 現在選ばれている年号の内容

    // スライドの選択時にコンテンツを表示
    const showContent = (index) => {
      currentContent.value = contents[index]; // 選ばれた年号の内容を設定
    };

    const onSwiper = (swiper) => {
      console.log(swiper);
    };

    const onSlideChange = (swiper) => {
      console.log('slide change');
    };

    return {
      years,
      contents,
      currentContent,
      onSwiper,
      onSlideChange,
      showContent,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style scoped>
.slider-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
}

.year-slide {
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
}

.content-section {
  margin-top: 30px;
  text-align: center;
}

.content-section h3 {
  font-size: 1.8rem;
  margin-bottom: 15px;
}

.content-section p {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
}

.swiper-pagination {
  display: none; /* インジケーターを非表示 */
}

.swiper-button-next,
.swiper-button-prev {
  background-color: #000; /* 黒色 */
  border-radius: 50%; /* 丸型 */
  color: white; /* 白い矢印 */
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 18px;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: #333; /* ホバー時の色 */
}
</style>
