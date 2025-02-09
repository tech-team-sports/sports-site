<template>
    <div>
        <MainSlider />
        <h1>Welcome to the Home Page!</h1>
        <p>This is the entrance page of the website.</p>
 
        <div>
           <h2>NEWS:</h2>

           <p v-if="loading">Loding...</p>

           <p v-if="errerMessage" style="color: red;">{{ errerMessage }}</p>
            {{ news.articles }}
            <input type="number" min="0" max="10" />
            <ul v-if="news.articles?.length">
                <li v-for="(article, index) in news.articles" :key="index">
                    <h3>{{ article.titele }}</h3>
                    <p>{{ article.description }}</p>
                    <p>
                        <a href="article.url" target="_blank">read more</a>
                    </p>
                    <img v-if="article.urlToImage" :src="article.urlToImage" alt="Article">
                </li>
            </ul>
            <p v-else-if="loading">No news</p>
        </div>
    </div>
</template>
 
<script setup>
import MainSlider from "@/components/index/sliders/MainSlider.vue";
import { ref, onMounted, onUnmounted } from "vue";
 
const news = ref({ articles: [] });
const loading = ref(true);
const errerMessage = ref("");
 
onMounted(() => {
    const params = {
        api_key: "53fb2956cf034545947be49cd3f8e1db",
        q: "メッシ OR ベンゼマ"
    }
 
    fetch(`https://newsapi.org/v2/everything?q=${params.q}&apiKey=${params.api_key}`)
    .then(response => {
        const { status } = response;
 
        if (status === 200) {
            return response.json();
        } else {
            console.log('エラーが発生しました。')
        }
    })
    .then(data => {
        console.log(data);
       
        news.value = data;
 
        console.log(news);
       
    })
    .catch(error => {
        console.error("Fetch error" , error);
    });
});
</script>