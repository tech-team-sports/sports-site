<template>
    <div>
        <h1>Soccer News</h1>
        <NewsList query="ベンゼマ OR エムバペ OR メッシ" />
    </div>
</template>

<script setup>
import NewsList from "@/components/news/NewsList.vue";
</script>

