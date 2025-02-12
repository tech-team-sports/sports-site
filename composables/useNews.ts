import { ref, onMounted } from "vue";

export function useNews(query: string) {
    const news = ref({ articles: [] });
    const loading = ref(true);
    const errorMessage = ref("");

    onMounted(() => {
        const API_KEY = "53fb2956cf034545947be49cd3f8e1db";
        fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
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

    return { news, loading, errorMessage };
}
