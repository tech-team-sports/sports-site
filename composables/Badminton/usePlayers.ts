// composables/usePlayers.js
import { reactive } from 'vue';

export default function usePlayers() {
  const players = reactive([
    {
      id: 1,
      name: "桃田 賢斗",
      nationality: "日本",
      birthYear: 1994,
      height: 175,
      weight: 70,
      hand: "左利き",
      playStyle: "オールラウンダー",
      achievements: "世界選手権優勝 (2018, 2019)",
      description: "安定した守備と攻撃のバランスが取れたプレースタイル。",
      image: "/img/badminton/momota.jpg",
    },
    {
      id: 2,
      name: "奥原 希望",
      nationality: "日本",
      birthYear: 1995,
      height: 156,
      weight: 54,
      hand: "右利き",
      playStyle: "ディフェンシブ",
      achievements: "世界選手権優勝 (2017)",
      description: "粘り強いラリーと正確なネットプレーが特徴。",
      image: "/img/badminton/okuhara.jpg",
    },
    {
      id: 3,
      name: "山口 茜",
      nationality: "日本",
      birthYear: 1997,
      height: 157,
      weight: 55,
      hand: "右利き",
      playStyle: "アタッカー",
      achievements: "全英オープン優勝 (2022)",
      description: "素早いフットワークと力強いスマッシュが持ち味。",
      image: "/img/badminton/yamaguchi.jpg",
    },
    {
      id: 4,
      name: "渡辺 勝",
      nationality: "日本",
      birthYear: 1992,
      height: 180,
      weight: 76,
      hand: "右利き",
      playStyle: "アタッカー",
      achievements: "全日本総合バドミントン選手権大会優勝 (2018)",
      description: "強力なスマッシュを武器にする攻撃型の選手。",
      image: "/img/badminton/watanabe.jpg",
    },
    {
      id: 5,
      name: "高橋 礼華",
      nationality: "日本",
      birthYear: 1990,
      height: 160,
      weight: 53,
      hand: "右利き",
      playStyle: "ディフェンシブ",
      achievements: "リオオリンピック 銅メダル (2016)",
      description: "安定した守備力と素早いネットプレーが特徴。",
      image: "/img/badminton/takahashi.jpg",
    },
    {
      id: 6,
      name: "前田 美順",
      nationality: "日本",
      birthYear: 1994,
      height: 158,
      weight: 52,
      hand: "右利き",
      playStyle: "オールラウンダー",
      achievements: "アジア選手権 銀メダル (2019)",
      description: "全方位に対応できるバランスの取れたプレースタイル。",
      image: "/img/badminton/maeda.jpg",
    },
    {
      id: 7,
      name: "鈴木 優花",
      nationality: "日本",
      birthYear: 1998,
      height: 170,
      weight: 59,
      hand: "右利き",
      playStyle: "アタッカー",
      achievements: "全日本バドミントン選手権大会優勝 (2020)",
      description: "高い打点からのスマッシュとカウンターが得意。",
      image: "/img/badminton/suzuki.jpg",
    },
    {
      id: 8,
      name: "佐藤 涼子",
      nationality: "日本",
      birthYear: 1996,
      height: 162,
      weight: 57,
      hand: "右利き",
      playStyle: "ディフェンシブ",
      achievements: "全日本総合バドミントン選手権大会準優勝 (2017)",
      description: "正確なラリーと守備力が際立つ選手。",
      image: "/img/badminton/sato.jpg",
    },
  ]);

  return { players };
}
