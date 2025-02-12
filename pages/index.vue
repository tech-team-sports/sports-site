<template>
    <div>
        <MainSlider />
        <links />
 
        <div class="container">
           <h2 >NEWS</h2>

           <p v-if="loading">Loading...</p>

           <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>

           <input type="number" min="0" max="10" v-model="maxArticles" />
            <div class="items">
                    <ul class="item" v-if="news.articles?.length">
                        <li v-for="(article, index) in news.articles.slice(0, maxArticles)" :key="index">
                            <img v-if="article.urlToImage" :src="article.urlToImage" alt="Article">
                            <h3>{{ article.title }}</h3>
                            <p class="description">{{ article.description }}</p>
                            <p>公開日: {{ formatDate(article.publishedAt) }}</p>
                            <a :href="article.url" target="_blank">Read more</a>
                        </li>
                    </ul>
                <p v-else-if="!loading">No news available.</p>
            </div>
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

<style scoped>
.container {
    padding: 1.1rem;
    max-width: 1200px;
    margin: 0 auto;
}

.items {
    display: grid;
    gap: 1rem;
}
.items li {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px; 
    text-align: start;
    overflow: hidden;
    margin-top: 1rem;
}

.item img {
    max-width: 300px; 
    height: 200px;
    object-fit: cover;
    margin: 0 auto; 
}

.item {   
    display: contents;

}

.item > li > a {
    margin-top: 0.7rem;
    padding: 10px 15px;
    background-color: royalblue;
    border-radius: 0.8rem;
    text-decoration: none;
}

@media screen and (min-width: 1024px) {
    .items {
        grid-template-columns: repeat(4, 1fr) ;

    } 

    .item p {
        font-size: 1.1rem;
    }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
    .items {
        grid-template-columns: repeat(3, 1fr);
    }

    .item p {
        font-size: 1.05rem;
    }
}

@media screen and (max-width: 767px) { 
    
    .items {
        grid-template-columns: 1fr;
    }

    .item p {
        font-size: 1rem;
    }

    .item {
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
}

</style>
