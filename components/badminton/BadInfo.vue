<template>
  <div class="badminton-info">
    <h1>バドミントンの競技紹介</h1>
    
    <div class="description">
      <p>
        バドミントンはイギリス発祥のスポーツで、19世紀に広まりました。1893年には、イギリスでバドミントン協会が設立され、競技のルールが統一されるようになりました。その後、世界中で人気が高まり、日本でも1946年に日本バドミントン協会（NBA）が設立され、本格的な競技活動が始まりました。
      </p>
      <p>
        国際的な大会としては、1992年のバルセロナオリンピックで正式種目として採用され、現在では男女シングルス、男女ダブルス、さらにペアで戦う混合ダブルスの3種目が行われています。オリンピック以外にも、世界バドミントン選手権やトマス杯（男子団体戦）、ユーバー杯（女子団体戦）など、数多くの国際大会が開催されており、競技人口も年々増加しています。
      </p>
      <p>
        バドミントンは、そのスピード感あふれるラリーと緻密な戦略が魅力のスポーツで、初心者からトップアスリートまで幅広い層に楽しまれています。特にアジア圏では人気が高く、中国やインドネシア、日本、韓国などが世界トップレベルの選手を輩出しています。
      </p>
    </div>
    <div class="section-top">
      <BadInfoList />
    </div>
  </div>
</template>

<script>
import BadInfoList from '@/components/badminton/BadInfoList.vue';

export default {
  name: 'BadmintonInfo',
  components: {
    BadInfoList,
  },
};
</script>

<style scoped>
.badminton-info {
  padding: 20px;
}

h1 {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #f39c12, #e74c3c);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.section-top {
  margin-bottom: 20px;
  padding: 50px;
}

.description {
  background: #ecf0f1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  line-height: 1.8;
}

.description p {
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 15px;
}
</style>
