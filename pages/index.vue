<template>
    <div>
        <MainSlider />
        <links />
 
        <div>
           <h2>NEWS:</h2>

           <p v-if="loading">Loading...</p>

           <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>

           <input type="number" min="0" max="10" v-model="maxArticles" />

            <ul v-if="news.articles?.length">
                <li v-for="(article, index) in news.articles.slice(0, maxArticles)" :key="index">
                    <img v-if="article.urlToImage" :src="article.urlToImage" alt="Article">
                    <h3>{{ article.title }}</h3>
                    <p>{{ article.description }}</p>
                    <p>公開日: {{ formatDate(article.publishedAt) }}</p>
                    <p>
                        <a :href="article.url" target="_blank">Read more</a>
                    </p>
                </li>
            </ul>

            <p v-else-if="!loading">No news available.</p>
        </div>
    </div>
</template>

<script setup>
import MainSlider from "@/components/index/sliders/MainSlider.vue";
import links from "~/components/index/sports/links.vue";
import { ref, onMounted } from "vue";
import { formatDate } from "@/composables/libs/utils.ts";

const news = ref({ articles: [] });
const loading = ref(true);
const errorMessage = ref(""); 
const maxArticles = ref(10);

onMounted(() => {
    const params = {
        api_key: "53fb2956cf034545947be49cd3f8e1db",
        q: "マルセロ OR ジダン OR メッシ"
    };

    fetch(`https://newsapi.org/v2/everything?q=${params.q}&apiKey=${params.api_key}`)
    .then(response => {
        if (!response.ok) { 
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        news.value = data;
    })
    .catch(error => {
        console.error("Fetch error", error);
        errorMessage.value = "ニュースの取得に失敗しました。";
    })
    .finally(() => {
        loading.value = false;
    });
});
</script>
