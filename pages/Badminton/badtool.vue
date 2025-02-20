<template>
    <div>
      <BadTitle 
        title="Badminton" 
        subTitle="ラケットやシャトルの選び方"
        imageSrc="/img/badminton/Title/racket.jpg"
      />
      <ToolPage />
      <BadButton />
    </div>
  </template>
  
  <script setup>
  import BadTitle from '/components/badminton/BadTitle.vue';
  import ToolPage from '/components/badminton/ToolPage.vue';
  import BadButton from "/components/badminton/BadButton.vue";
  </script>