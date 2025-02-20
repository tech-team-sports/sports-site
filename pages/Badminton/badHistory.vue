<template>
    <div>
      <BadTitle 
        title="バドミントン" 
        subTitle="バドミントンの歴史を知ろう"
        imageSrc="/img/badminton/Title/rekisi.jpg"
      />
      <HistoryTimeline />
      <HistoryPage />
      <BadButton />
    </div>
  </template>
  
  <script setup>
  import BadTitle from '/components/badminton/BadTitle.vue';
  import HistoryPage from "/components/badminton/HistoryPage.vue";
  import BadButton from "/components/badminton/BadButton.vue";
  import HistoryTimeline from "/components/badminton/HistoryTimeline.vue";
  </script>