<template>
    <div class="equipment-list">
      <h2>🏸 バドミントンの道具</h2>
      <p class="intro">バドミントンをプレイするには、正しい道具を使うことが重要です。初心者から上級者まで、最適な道具を選びましょう。</p>
      <div class="equipment-container">
        <div class="equipment-item" v-for="item in equipmentData" :key="item.id">
          <img :src="item.image" :alt="item.name" class="equipment-image" />
          <div class="equipment-info">
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
  
      <!-- 詳細な説明セクション -->
      <div class="detailed-section">
        <h3>1. ラケットの種類と選び方</h3>
        <p>ラケットはバドミントンにおける最も重要な道具です。初心者向けから上級者向けまで選び方を理解し、自分に合ったものを選びましょう。</p>
        <ul>
          <li>初心者向けラケット: 軽量で操作が簡単なもの</li>
          <li>上級者向けラケット: 高性能で精度の高いショットが可能</li>
          <li>ラケットの重さとバランス: 重さ、バランスがプレイスタイルに影響</li>
          <li>選び方: グリップの大きさや素材に注目</li>
        </ul>
  
        <h3>2. シャトルの種類</h3>
        <p>シャトルの選択がプレイ感に大きく影響します。ナイロンシャトルとフェザーシャトルの違いを理解しましょう。</p>
        <ul>
          <li>ナイロンシャトル: 耐久性に優れ、カジュアルなゲームに最適</li>
          <li>フェザーシャトル: 競技用で性能が高いが、耐久性は低い</li>
          <li>天候に合わせた選択: 温暖な気候ではフェザーシャトル、風の強い場所ではナイロンシャトル</li>
        </ul>
  
        <h3>3. シューズとウェア</h3>
        <p>動きやすさと安全性を確保するため、専用のシューズとウェアが不可欠です。</p>
        <ul>
          <li>シューズ: 足元の安定性、グリップ力、クッション性が重要</li>
          <li>ウェア: 通気性と動きやすさを重視、吸汗速乾性の高い素材を選ぶ</li>
          <li>快適にプレイするため: 体型に合わせたフィット感を重視</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EquipmentList',
    data() {
      return {
        equipmentData: [
          {
            id: 1,
            name: 'バドミントンラケット',
            image: '/img/badminton/momota.jpg',
            description: '軽量で耐久性に優れたラケットです。初心者向けのラケットとして最適です。',
          },
          {
            id: 2,
            name: 'シャトルコック',
            image: '/img/badminton/shuttlecock.jpg',
            description: '羽根付きシャトルで、飛びやすさが特徴です。競技用に適しています。',
          },
          {
            id: 3,
            name: 'バドミントンシューズ',
            image: '/img/badminton/shoes.jpg',
            description: '足元の安定性を高めるため、バドミントン専用のシューズです。',
          },
          {
            id: 4,
            name: 'ウェア',
            image: '/img/badminton/clothing.jpg',
            description: '通気性が良く、動きやすさを提供するバドミントン用ウェアです。',
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
    padding: 40px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    background: #f4f4f9;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    font-size: 36px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }
  
  .intro {
    font-size: 18px;
    color: #666;
    margin-bottom: 40px;
    text-align: center;
    max-width: 800px;
  }
  
  .equipment-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
    width: 100%;
    margin-top: 20px;
  }
  
  .equipment-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .equipment-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  .equipment-image {
    width: 100%;
    max-width: 280px;
    height: auto;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }
  
  .equipment-item:hover .equipment-image {
    transform: scale(1.05);
  }
  
  .equipment-info {
    text-align: center;
    margin-top: 15px;
  }
  
  .equipment-info h3 {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }
  
  .equipment-info p {
    font-size: 14px;
    color: #666;
    line-height: 1.5;
  }
  
  .detailed-section {
    margin-top: 40px;
    padding: 30px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 1100px;
  }
  
  .detailed-section h3 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }
  
  .detailed-section p {
    font-size: 16px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 15px;
  }
  
  .detailed-section ul {
    list-style-type: disc;
    margin-left: 30px;
    color: #555;
  }
  
  .detailed-section ul li {
    font-size: 15px;
    margin-bottom: 10px;
  }
  </style>
  