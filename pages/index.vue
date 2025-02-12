<template>
    <div>
        <MainSlider />
        <Links />
        <NewsList query="メジャーリーグ OR 欧州CL OR バトミントン " />
    </div>
</template>

<script setup>
import MainSlider from "@/components/index/sliders/MainSlider.vue";
import Links from "@/components/index/sports/links.vue";
import NewsList from "@/components/news/NewsList.vue";
</script>
