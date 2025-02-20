<template>
    <div>
      <BadTitle 
        title="バドミントン" 
        subTitle="基本的なルールを詳しく解説"
        imageSrc="/img/badminton/Title/kyougi.jpg"
      />
      <BadInfo />
      <BadButton />
    </div>
  </template>
  
  <script setup>
  import BadTitle from '/components/badminton/BadTitle.vue';
  import BadInfo from '/components/badminton/BadInfo.vue';
  import BadButton from "/components/badminton/BadButton.vue";
  </script>