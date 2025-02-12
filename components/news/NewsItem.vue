<template>
    <li class="item">
        <img v-if="article.urlToImage" :src="article.urlToImage" :alt="article.title" />
        <h3>{{ article.title }}</h3>
        <p>{{ article.description }}</p>
        <h4>公開日: {{ new Date(article.publishedAt).toLocaleDateString() }}</h4>
        <a :href="article.url" target="_blank">Read more</a>
    </li>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    article: Object,
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
    display: flex;
    flex-direction: column;
    align-items: center;
}

.item > h3 {
    font-size: 1.2rem;
}

.item > h4 {
  margin-top: 0.5rem;
}

.item > p {
    font-size: 1rem;
    color: #333;
}

.item > h3 {
    margin-top: 0.5rem;
    font-size: 1.1rem;
}

.item > a {
    margin-top: 0.7rem;
    padding: 10px 15px;
    background-color: royalblue;
    color: white;
    border-radius: 0.8rem;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.item > a:hover {
    background-color: blue;
}

@media screen and (min-width: 1024px) {
    .news {
        font-size: 2rem;
    }

    .items {
        grid-template-columns: repeat(4, 1fr);
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
