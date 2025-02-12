<template>
    <div class="container">
        <h2>NEWS</h2>

        <p v-if="loading">Loading...</p>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

        <div class="items">
            <ul class="item" v-if="news.articles?.length">
                <li v-for="(article, index) in news.articles.slice(0, maxArticles)" :key="index">
                    <NewsItem :article="article" />
                </li>
            </ul>
            <p v-else-if="!loading">No news available.</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import NewsItem from "@/components/news/NewsItem.vue";
import { useNews } from "@/composables/useNews";

const props = defineProps({
    query: String, 
});

const maxArticles = ref(10);
const { news, loading, errorMessage } = useNews(props.query);
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

.container > h2 {
    font-size: 2rem;
}

.item > li > p {
    font-size: 1rem;
    color: #333;
}

.item > li > h3 {
    margin-top: 0.5rem;
    font-size: 1.1rem;
}

.item > li > a {
    margin-top: 0.7rem;
    padding: 10px 15px;
    background-color: royalblue;
    color: white;
    border-radius: 0.8rem;
    text-decoration: none;
    transform: background-color 0.3s ease;
}

.item > li > a:hover {
    background-color: blue;
}

@media screen and (min-width: 1024px) {

    .news {
        font-size: 2rem;
    }

    .items {
        grid-template-columns: repeat(4, 1fr) ;

    } 

    .item p {
        font-size: 1.1rem;
    }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {

    .news {
        font-size: 1.75rem;
    }

    .items {
        grid-template-columns: repeat(3, 1fr);
    }

    .item p {
        font-size: 1.05rem;
    }
}

@media screen and (max-width: 767px) { 

    .news {
        font-size: 1.5rem;
    }
    
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

