<template>
    <div>
      <BadTitle 
        title="バドミントン" 
        subTitle="バドミントンページです"
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