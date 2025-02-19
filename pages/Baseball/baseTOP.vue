<template>
    <div>
        <BaseSlider />
        <BaseContents />
        <NewsList query="野球" />
    </div>
</template>

<script setup>
import BaseSlider from "/components/baseball/BaseSlider.vue";
import BaseContents from "/components/baseball/BaseContents.vue";
import NewsList from "@/components/news/NewsList.vue";
</script>

<style scoped></style>
