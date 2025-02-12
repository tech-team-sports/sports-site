<template>
    <div>
        <MainSlider />
        <Links />
        <NewsList query="ジダン OR ロナウド OR マルセロ" />
    </div>
</template>

<script setup>
import MainSlider from "@/components/index/sliders/MainSlider.vue";
import Links from "@/components/index/sports/links.vue";
import NewsList from "@/components/news/NewsList.vue";
</script>
