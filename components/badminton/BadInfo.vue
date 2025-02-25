<template>
  <div class="top">
    <div class="badminton-info">
      <h1>バドミントンの競技紹介</h1>
      <div class="image-container">
        <img src="/assets/img/badminton/demo2.jpg" alt="バドミントン" />
      </div>
      <div class="description">
        <p>
          バドミントンは、19世紀にイギリスで始まったスポーツで、世界中で人気を集めました。1893年には、イギリスでバドミントン協会が作られ、競技のルールが決まりました。日本では1946年に日本バドミントン協会（NBA）が設立され、競技が本格的に始まりました。
        </p>
        <p>
          バドミントンは、1992年のバルセロナオリンピックで正式な競技として採用され、今では男女シングルス、男女ダブルス、混合ダブルスの3つの種目が行われています。また、オリンピック以外にも、世界選手権や団体戦の大会（トマス杯、ユーバー杯）などもあり、競技人口は増え続けています。
        </p>
        <p>
          このスポーツは、スピード感のあるラリーと戦略が魅力です。初心者から上級者まで楽しめ、特にアジアの国々（中国、インドネシア、日本、韓国など）では、世界トップの選手が多く生まれています。
        </p>
      </div>
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap'); /* Poppinsフォントをインポート */

.badminton-info {
  padding: 30px;
  font-family: 'Poppins', 'Arial', sans-serif; /* 丸みがあり太めのフォントを指定 */
}

h1 {
  color: #2c3e50;
  font-size: 3.8rem;
  margin-top: 20px;
  margin-bottom: 30px;
  background: linear-gradient(45deg, #f39c12, #e74c3c);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.image-container {
  text-align: center;
  margin: 20px 0;
}

.image-container img {
  max-width: 50%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.section-top {
  margin-bottom: 20px;
  padding: 80px;
}

.description {
  line-height: 1.8;
  max-width: 900px;
  margin: 50px auto; /* 文章を中央に配置 */
}

.description p {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 18px;
}

@media screen and (max-width: 1024px) {
  .description p {
  font-size: 1rem;
  }

  .section-top {
    padding: 50px;
  }
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  .description p {
  font-size: 0.9rem;
  }

  .section-top {
  padding: 20px;
  }
}

@media screen and (max-width: 500px) {
  h1 {
    font-size: 2.2rem;
  }

  .description p {
  font-size: 0.8rem;
  }

  .section-top {
  padding: 10px;
  }
}
</style>
