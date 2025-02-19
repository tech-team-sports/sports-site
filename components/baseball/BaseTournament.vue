<template>
    <div class="tournament-info">
        <h1>野球大会紹介</h1>
        <p class="intro-text">ここでは、世界中の代表的な野球大会を紹介します。</p>

        <h2>主な大会</h2>
        <div class="tournament-cards">
            <div v-for="tournament in tournaments" :key="tournament.id" class="card">
                <div class="card-header">
                    <h3>{{ tournament.name }}</h3>
                </div>
                <div class="card-body">
                    <p><strong>開催年:</strong> {{ tournament.year }}</p>
                    <p><strong>場所:</strong> {{ tournament.location }}</p>
                    <p><strong>概要:</strong> {{ tournament.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tournaments: [
                {
                    id: 1,
                    name: "WBC (World Baseball Classic)",
                    year: "2023",
                    location: "世界各地",
                    description: "WBCは、野球の国際大会で、世界のトップチームが競い合う。日本は過去に2回優勝しており、毎回盛り上がりを見せる。",
                },
                {
                    id: 2,
                    name: "MLBワールドシリーズ",
                    year: "毎年",
                    location: "アメリカ合衆国",
                    description: "アメリカのメジャーリーグベースボール（MLB）の年間王者を決定するシリーズ。アメリカ国内で非常に高い人気を誇る。",
                },
                {
                    id: 3,
                    name: "オリンピック野球",
                    year: "2028",
                    location: "ロサンゼルス",
                    description: "オリンピックの一部として野球が復活。各国の代表が参加し、金メダルを目指して戦う。",
                },
                {
                    id: 4,
                    name: "高校野球全国大会",
                    year: "毎年",
                    location: "甲子園球場（日本）",
                    description: "日本の高校野球最大の大会。地方予選を勝ち抜いた強豪校が集まり、全国一を決める。",
                },
                {
                    id: 5,
                    name: "プレミア12",
                    year: "2024",
                    location: "世界各地",
                    description: "プレミア12は、12の野球強豪国が競い合う国際大会。世界一を決める戦いとして注目を集める。",
                },
                {
                    id: 6,
                    name: "NPB日本シリーズ",
                    year: "毎年",
                    location: "日本各地",
                    description: "日本のプロ野球最高峰の大会で、セ・リーグとパ・リーグの年間王者が激突する。日本の野球ファンには欠かせない大会。",
                },
            ],
        };
    },
};
</script>

<style scoped>
.tournament-info {
    font-family: 'Roboto', sans-serif;
    background-color: #f0f4f8;
    padding: 30px;
    border-radius: 10px;
    max-width: 1200px;
    margin: 0 auto;
}

h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    text-align: center;
    margin-bottom: 20px;
}

.intro-text {
    font-size: 1.2rem;
    color: #7f8c8d;
    text-align: center;
    margin-bottom: 40px;
}

h2 {
    font-size: 2rem;
    color: #3498db;
    margin-bottom: 20px;
}

.tournament-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
}

.card {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.card-header {
    background-color: #3498db;
    color: white;
    padding: 20px;
    text-align: center;
}

.card-header h3 {
    font-size: 1.6rem;
    margin: 0;
}

.card-body {
    padding: 20px;
}

.card-body p {
    font-size: 1.1rem;
    color: #7f8c8d;
    margin: 10px 0;
}

strong {
    font-weight: bold;
}
</style>
