<template>
    <div class="equipment-list">
        <h2>⚾ 野球の道具</h2>
        <p class="intro">
            野球をプレイするには、正しい道具を使うことが重要です。初心者から上級者まで、最適な道具を選びましょう。
        </p>
        <div class="equipment-container">
            <div
                class="equipment-item"
                v-for="item in equipmentData"
                :key="item.id"
            >
                <div class="equipment-info">
                    <h3>{{ item.name }}</h3>
                    <p>{{ item.description }}</p>
                </div>
            </div>
        </div>

        <!-- 詳細な説明セクション -->
        <div class="detailed-section">
            <h3>1. バットの種類と選び方</h3>
            <p>
                バットは野球における最も重要な道具です。初心者向けから上級者向けまで選び方を理解し、自分に合ったものを選びましょう。
            </p>
            <ul>
                <li>初心者向けバット: 軽量で操作が簡単なもの</li>
                <li>上級者向けバット: 高性能で精度の高いショットが可能</li>
                <li>
                    バットの重さとバランス:
                    重さ、バランスがプレイスタイルに影響
                </li>
                <li>選び方: グリップの大きさや素材に注目</li>
            </ul>

            <h3>2. グローブの種類</h3>
            <p>
                グローブの選択がプレイ感に大きく影響します。ポジションによって適切な種類を選びましょう。
            </p>
            <ul>
                <li>
                    外野用グローブ: 広いキャッチャーエリアに対応したもの
                </li>
                <li>内野用グローブ: 素早い反応を重視したデザイン</li>
                <li>
                    ピッチャー用グローブ: 投球の精度を上げるための特別なデザイン
                </li>
            </ul>

            <h3>3. スパイクとウェア</h3>
            <p>
                動きやすさと安全性を確保するため、専用のスパイクとウェアが不可欠です。
            </p>
            <ul>
                <li>スパイク: 足元の安定性、グリップ力、耐久性が重要</li>
                <li>
                    ウェア: 通気性と動きやすさを重視、吸汗速乾性の高い素材を選ぶ
                </li>
                <li>快適にプレイするため: 体型に合わせたフィット感を重視</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "EquipmentList",
    data() {
        return {
            equipmentData: [
                {
                    id: 1,
                    name: "バット",
                    description:
                        "軽量で耐久性に優れたバットです。初心者向けのバットとして最適です。",
                },
                {
                    id: 2,
                    name: "グローブ",
                    description:
                        "手のひらにフィットするグローブで、素早いキャッチが可能です。",
                },
                {
                    id: 3,
                    name: "スパイク",
                    description:
                        "足元の安定性を高めるため、野球専用のスパイクです。",
                },
                {
                    id: 4,
                    name: "ウェア",
                    description:
                        "通気性が良く、動きやすさを提供する野球用ウェアです。",
                },
            ],
        };
    },
};
</script>

<style scoped>
.equipment-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    background: linear-gradient(145deg, #e0e0e0, #ffffff);
    border-radius: 20px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
    font-family: 'Roboto', sans-serif;
}

h2 {
    font-size: 48px;
    font-weight: 700;
    color: #444;
    margin-bottom: 20px;
}

.intro {
    font-size: 20px;
    color: #777;
    margin-bottom: 50px;
    text-align: center;
    max-width: 850px;
}

.equipment-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 40px;
    width: 100%;
}

.equipment-item {
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    padding: 20px;
    transition: all 0.3s ease-in-out;
}

.equipment-item:hover {
    transform: translateY(-12px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.equipment-info {
    text-align: center;
}

.equipment-info h3 {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin-bottom: 15px;
}

.equipment-info p {
    font-size: 16px;
    color: #777;
    margin-bottom: 25px;
}

.detailed-section {
    margin-top: 50px;
    padding: 40px;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 1150px;
}

.detailed-section h3 {
    font-size: 28px;
    font-weight: 600;
    color: #444;
    margin-bottom: 20px;
}

.detailed-section ul {
    font-size: 16px;
    color: #666;
    line-height: 1.8;
}

.detailed-section ul li {
    margin-bottom: 10px;
}
</style>
