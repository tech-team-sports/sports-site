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
          <div class="underline"></div> <!-- 年号の下に下線 -->
        </div>
      </swiper-slide>
    </swiper>

    <!-- コンテンツ表示エリア -->
    <transition name="fade">
      <div v-if="currentContent" class="content-section">
        <h3>{{ currentContent.title }}</h3>
        <p>{{ currentContent.text }}</p>
      </div>
    </transition>
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
      { title: "1900年 - 重要な出来事", text: "1900年、バドミントンはイギリスで人気を集め、オリンピック種目として採用される準備が進められました。国際的な競技の発展が始まった年でもあり、多くの大会が新たに開催されました。特に、アジア諸国を含む国際大会が注目され、競技人口が急増しました。この年はバドミントンの成長の基盤が築かれた重要な年として記憶されています。" },
      { title: "1910年 - 重要な出来事", text: "1910年、バドミントンの大会はさらに増加し、国際的な競技としての地位を確立し始めました。特にヨーロッパでの大会が盛況で、競技人口が急増しました。また、この年にはアジア圏でも大会が開催され、バドミントンが国際的に広がりを見せる転換点となりました。多くの新しいルールや技術も導入され、競技のスピードが加速しました。" },
      { title: "1920年 - 重要な出来事", text: "1920年、バドミントンは国際競技として広まり、初めての国際大会が開催されました。特に、アジア諸国が大会に参加し、アジア圏の競技者の活躍が目立ちました。この年、競技の技術が進化し、選手たちは戦略を駆使して新たな技を披露しました。バドミントンは世界中に広がり、世界的な認知度が高まる年となりました。" },
      { title: "1930年 - 重要な出来事", text: "1930年、バドミントンはさらに多くの国々で普及し、地域ごとの大会が開催されるようになりました。世界中でバドミントンの普及活動が強化され、国際的な規模での大会が増えました。また、この年には新たな規則が制定され、選手たちのパフォーマンスが一層向上しました。バドミントンは国際的なスポーツとして認識されるようになりました。" },
      { title: "1940年 - 重要な出来事", text: "1940年、第二次世界大戦の影響でバドミントンの国際大会はほとんどが中断されました。戦争の影響で選手たちは活動を控えることを余儀なくされ、競技の開催は困難な状況となりました。しかし、戦後の復興期には、バドミントンは再び盛況を迎え、競技としての価値が再認識されました。戦争後のリハビリと共に、選手たちは競技に復帰し、新たなスタートを切ることができました。" },
      { title: "1950年 - 重要な出来事", text: "1950年、戦後の復興に伴い、バドミントン競技は再び盛況となりました。特に、アメリカやヨーロッパでの大会が再開され、新たな規則が制定されて、より洗練された競技が行われました。この年、バドミントンの世界大会が再開され、競技人口が再び増加し、国際大会はますます盛り上がりを見せました。" },
      { title: "1960年 - 重要な出来事", text: "1960年、バドミントンはオリンピックの候補競技として正式に選ばれ、競技者たちはその参加を目指してさらに努力を重ねました。この年を境に、世界中での注目度が一気に高まりました。特に技術革新により、競技のレベルが格段に上がり、世界大会での競争がさらに激化しました。" },
      { title: "1970年 - 重要な出来事", text: "1970年、バドミントンは世界的に見ても非常に人気が高まり、オリンピックに向けた準備が加速しました。新たに導入されたシャトルやラケット技術が選手たちのパフォーマンスを大きく向上させました。この年、バドミントンはオリンピック競技としての参加を果たすための最終調整が進められました。" },
      { title: "1980年 - 重要な出来事", text: "1980年、バドミントンはオリンピックの正式種目として採用され、その後、競技人口の急増を見ました。選手たちは新たな戦術と戦略を学び、技術が一層向上しました。オリンピックでの放送が増加し、バドミントンの知名度は大きく向上し、競技の発展が加速しました。この年から、世界的に注目される選手たちが登場し、バドミントンの魅力が世界中で広まりました。" },
      { title: "1990年 - 重要な出来事", text: "1990年、バドミントンは更に国際的に広がり、多くの国でリーグ戦が開かれ、プロ競技としても発展を遂げました。この時期に、多くの新星選手が登場し、バドミントンの魅力が世界に広まりました。また、メディアの影響で、バドミントンはより多くの人々に認知され、スポーツとしての人気が急速に拡大しました。" },
      { title: "2000年 - 重要な出来事", text: "2000年、バドミントンは世界的な競技として完全に確立されました。オリンピックでの放送が増加し、国際的な大会が盛況に行われるようになり、多くの人々がバドミントンに親しむようになりました。この年、バドミントンは国際的な競技として全世界で広く認知され、今後も更なる発展を遂げることが期待される年でした。" },
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
  padding: 20px;
  cursor: pointer;
}

.year-slide {
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
}

.year-slide h3 {
  margin: 0;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
