import { reactive } from 'vue';

export default function usePlayers() {
  const players = reactive([
    {
      id: 1,
      name: "桃田 賢斗",
      nationality: "日本",
      birthYear: 1994,
      hand: "左利き",
      playStyle: "オールラウンダー",
      achievements: "世界選手権優勝 (2018, 2019)",
      description: "安定した守備と攻撃のバランスが取れたプレースタイル。試合の流れを読む力があり、的確なショットで相手を翻弄する技術を持つ。",
      image: "/img/badminton/momota.jpg",
      careerHighlight: "2018年、2019年世界選手権優勝",
      playStyleDetail: "多彩なショットでどんな状況でも対応できるオールラウンダー。",
      quote: "「負けて悔しいと思う気持ちが大事。」"
    },
    {
      id: 2,
      name: "奥原 希望",
      nationality: "日本",
      birthYear: 1995,
      hand: "右利き",
      playStyle: "ディフェンシブ",
      achievements: "世界選手権優勝 (2017)",
      description: "粘り強いラリーと正確なネットプレーが特徴。スタミナが豊富で、どんなラリーにも対応できるタフさが武器。",
      image: "/img/badminton/okuhara.jpg",
      careerHighlight: "2017年世界選手権優勝",
      playStyleDetail: "ディフェンシブなプレースタイルで、相手に隙を与えずにラリーを続ける。",
      quote: "「諦めないことが一番大事」"
    },
    {
      id: 3,
      name: "山口 茜",
      nationality: "日本",
      birthYear: 1997,
      hand: "右利き",
      playStyle: "カウンター型",
      achievements: "世界選手権優勝 (2022)",
      description: "高いディフェンス力と速いカウンターショットが特徴。相手の攻撃をしのぎながらチャンスを作り出すスタイル。",
      image: "/img/badminton/yamaguti.jpg",
      careerHighlight: "2022年世界選手権優勝",
      playStyleDetail: "カウンターショットを得意とし、相手の攻撃を逆転に繋げる。",
      quote: "「勝ちたい気持ちがすべて。」"
    },
    {
      id: 4,
      name: "渡辺 勇大",
      nationality: "日本",
      birthYear: 1997,
      hand: "右利き",
      playStyle: "ダブルススペシャリスト",
      achievements: "全英オープン優勝 (2021)",
      description: "ダブルスの戦略家として知られ、ネット前での素早い反応と的確なリターンが強み。",
      image: "/img/badminton/watanabe.jpg",
      careerHighlight: "2021年全英オープン優勝",
      playStyleDetail: "ネットプレーで素早い反応を示し、ダブルスでの強さを発揮。",
      quote: "「パートナーとの信頼関係が大事。」"
    },
    {
      id: 5,
      name: "東野 有紗",
      nationality: "日本",
      birthYear: 1996,
      hand: "右利き",
      playStyle: "ダブルススペシャリスト",
      achievements: "全英オープン優勝 (2021)",
      description: "渡辺勇大との混合ダブルスで活躍。スマッシュの決定力が高く、攻撃の起点となる選手。",
      image: "/img/badminton/higasino.jpg",
      careerHighlight: "2021年全英オープン優勝",
      playStyleDetail: "攻撃的なプレースタイルで、特にスマッシュの威力が強み。",
      quote: "「常に前向きに、攻めることが大切。」"
    },
    {
      id: 6,
      name: "福島 由紀",
      nationality: "日本",
      birthYear: 1993,
      hand: "右利き",
      playStyle: "ダブルスオールラウンダー",
      achievements: "世界ランキング1位経験者",
      description: "パワーと精密なコントロールを兼ね備えたダブルスの名手。長身を活かしたスマッシュが持ち味。",
      image: "/img/badminton/hukusima.jpg",
      careerHighlight: "世界ランキング1位経験者",
      playStyleDetail: "スマッシュを駆使した攻撃力に加え、精密なネットプレーも得意。",
      quote: "「チームワークが勝利の鍵。」"
    },
    {
      id: 7,
      name: "廣田 彩花",
      nationality: "日本",
      birthYear: 1994,
      hand: "右利き",
      playStyle: "ディフェンス型",
      achievements: "世界ランキング1位経験者",
      description: "福島由紀とのペアで世界を席巻。正確なレシーブと粘り強いラリーで相手を圧倒する。",
      image: "/img/badminton/hirota.jpg",
      careerHighlight: "世界ランキング1位経験者",
      playStyleDetail: "ディフェンス力が抜群で、長いラリーを支配する。",
      quote: "「練習と本番で全力を尽くす。」"
    },
    {
      id: 8,
      name: "奈良岡 功大",
      nationality: "日本",
      birthYear: 2001,
      hand: "右利き",
      playStyle: "アグレッシブアタッカー",
      achievements: "2022年世界ジュニア準優勝",
      description: "若手ながらトップレベルの実力を持つ。素早いフットワークと鋭いショットが特徴。",
      image: "/img/badminton/naraoka.jpg",
      careerHighlight: "2022年世界ジュニア準優勝",
      playStyleDetail: "アグレッシブな攻撃型で、速いフットワークを活かしたプレースタイル。",
      quote: "「攻める気持ちが勝負を決める。」"
    }
  ]);

  return { players };
}
