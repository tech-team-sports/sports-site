<template>
    <div>
      <BadTitle />
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