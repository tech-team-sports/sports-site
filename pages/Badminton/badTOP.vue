<template>
  <div>
    <BadSlider />
    <BadContents />
    <NewsList query="バドミントン" />
  </div>
</template>

<script setup>
import BadSlider from '/components/badminton/BadSlider.vue';
import BadContents from '/components/badminton/BadContents.vue';
import NewsList from "@/components/news/NewsList.vue";
</script>

<style scoped>

</style>
