<template>
    <section class="container">
      <div class="overlay"></div>
      <div class="text-overlay">
        <h1 class="title">
          バドミントン
        </h1>
        <p class="sub">
          バドミントンページです
        </p>
      </div>
      <img src="/assets/img/badminton/bad.jpg" alt="Canyon Image" />
    </section>
  </template>
  
  <script setup>
  // 特に変更なし
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');
  
  .container {
    position: relative;
    width: 100%;
    height: 600px;
    overflow: hidden;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* 半透明の黒いオーバーレイ */
    z-index: 0;
  }
  
  .text-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    z-index: 1;
  }
  
  .title,
  .sub {
    font-family: 'Playfair Display', serif;
    font-weight: bold;
    display: inline-block;
    opacity: 0;  /* 初期状態で非表示 */
    animation: fadeInLeft 0.6s forwards;  /* アニメーションを適用 */
  }
  
  .title {
    font-size: 4rem;
  }
  
  .sub {
    font-size: 1.5rem;
    margin-top: 10px;
    animation-delay: 0.5s;  /* サブタイトルが少し遅れて表示 */
  }
  
  @keyframes fadeInLeft {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 0;
  }
  </style>
  