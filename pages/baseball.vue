<template>
  <div class="container">
    <h1 class="title">野球の魅力</h1>
    <div v-for="(section, index) in sections" :key="section.title" class="card" :style="{ animationDelay: `${index * 0.2}s` }">
      <h2>{{ section.title }}</h2>
      <p>{{ section.content }}</p>
    </div>
    <div v-if="showBalls" class="falling-balls">
      <img v-for="n in 20" :key="n" src="/assets/img/icon/yakyuicon.png" class="ball" :style="{ animationDelay: `${n * 0.1}s`, left: `${Math.random() * 100}vw` }" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        { title: "野球の歴史", content: "野球は19世紀にアメリカで生まれ、現在では世界中で楽しまれています。" },
        { title: "野球のルール", content: "野球は2チームで行われ、9回のイニングで得点を競います。" },
        { title: "有名な選手", content: "ベーブ・ルース、イチロー、大谷翔平などが挙げられます。" },
      ],
      showBalls: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBalls = false;
    }, 6000); // 6秒後にボールを消す
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}
.title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  opacity: 0;
  transform: translateY(-20px);
  animation: fadeInDown 0.5s ease-out forwards;
  color: white;
}
.card {
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  margin: 15px 0;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(20px) scale(0.95);
  animation: fadeInUp 0.6s ease-out forwards;
  transition: transform 0.3s ease;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
h2 {
  color: #ff7e5f;
}
p {
  color: #333;
}
.falling-balls {
  position: fixed;
  top: -100px;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999; /* ボールが最前面に表示されるように */
}
.ball {
  position: absolute;
  width: 50px;
  height: 50px;
  opacity: 0.6; /* ボールを薄くする */
  animation: fallDown 3s ease-in-out forwards; /* ボールが画面下に落ちると同時に消える */
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fallDown {
  0% {
    transform: translateY(-100vh);
    opacity: 0.6; /* 初めは薄く */
  }
  50% {
    transform: translateY(50vh);
    opacity: 0.4; /* 中盤でさらに薄く */
  }
  100% {
    transform: translateY(100vh); /* 画面下まで落ちる */
    opacity: 0; /* 画面下に達した時に完全に消える */
  }
}
</style>
