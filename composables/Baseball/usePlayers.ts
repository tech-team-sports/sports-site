import { reactive } from 'vue';

export default function usePlayers() {
  const players = reactive([
    {
      id: 1,
      name: "イチロー",
      nationality: "日本",
      birthYear: 1973,
      height: 180,
      weight: 79,
      hand: "右投げ左打ち",
      position: "外野手",
      achievements: "MLB通算3089安打、日本通算1278安打",
      description: "卓越したバットコントロールと俊足で知られる。守備範囲も広く、強肩を誇る。",
      image: "/img/baseball/ichiro.jpg",
      careerHighlight: "2004年シーズン最多安打記録(262安打)",
      playStyleDetail: "コンタクトヒッターでありながら、守備や走塁でも高い能力を発揮。",
      quote: "「準備がすべて。」"
    },
    {
      id: 2,
      name: "鈴木 誠也",
      nationality: "日本",
      birthYear: 1994,
      height: 181,
      weight: 96,
      hand: "右投げ右打ち",
      position: "外野手",
      achievements: "NPBベストナイン5回、MLBシカゴ・カブス所属",
      description: "パワーとミート力を兼ね備えた強打者。守備力や肩の強さも魅力。",
      image: "/img/baseball/suzuki.jpg",
      careerHighlight: "2021年東京オリンピック金メダル",
      playStyleDetail: "長打力がありながら、コンタクト能力も高い万能型バッター。",
      quote: "「努力は裏切らない。」"
    },
    {
      id: 3,
      name: "大谷 翔平",
      nationality: "日本",
      birthYear: 1994,
      height: 193,
      weight: 95,
      hand: "右投げ左打ち",
      position: "投手・指名打者",
      achievements: "MLBア・リーグMVP(2021, 2023)",
      description: "投打の二刀流として歴史を塗り替えるスーパースター。速球と多彩な変化球を持つ。",
      image: "/img/baseball/ohtani.jpg",
      careerHighlight: "2023年WBC優勝&MVP",
      playStyleDetail: "160km/h超えの速球と強打者としてのパワーを併せ持つ唯一無二の存在。",
      quote: "「できると思えばできる。」"
    },
    {
      id: 4,
      name: "松井 秀喜",
      nationality: "日本",
      birthYear: 1974,
      height: 188,
      weight: 102,
      hand: "右投げ左打ち",
      position: "外野手",
      achievements: "MLBワールドシリーズMVP(2009)",
      description: "豪快なホームランが魅力の強打者。勝負強さも兼ね備える。",
      image: "/img/baseball/matsui.jpg",
      careerHighlight: "2009年ワールドシリーズMVP",
      playStyleDetail: "ホームランを量産し、勝負どころでの強さが光るバッター。",
      quote: "「努力なくして成功なし。」"
    },
    {
      id: 5,
      name: "ダルビッシュ 有",
      nationality: "日本",
      birthYear: 1986,
      height: 196,
      weight: 99,
      hand: "右投げ右打ち",
      position: "投手",
      achievements: "MLBオールスター出場5回",
      description: "多彩な変化球と制球力を武器にするエースピッチャー。",
      image: "/img/baseball/darvish.jpg",
      careerHighlight: "WBC2023優勝メンバー",
      playStyleDetail: "スライダー、カットボール、スプリットなど多彩な変化球を駆使。",
      quote: "「常に進化し続ける。」"
    },
    {
      id: 6,
      name: "村上 宗隆",
      nationality: "日本",
      birthYear: 2000,
      height: 188,
      weight: 97,
      hand: "右投げ左打ち",
      position: "内野手",
      achievements: "NPB三冠王(2022)",
      description: "圧倒的なパワーを誇る若きホームランバッター。",
      image: "/img/baseball/murakami.jpg",
      careerHighlight: "2022年三冠王達成",
      playStyleDetail: "長打力が魅力のスラッガー。打点を稼ぐ能力も高い。",
      quote: "「打席に立てば全力。」"
    },
    {
      id: 7,
      name: "山本 由伸",
      nationality: "日本",
      birthYear: 1998,
      height: 178,
      weight: 80,
      hand: "右投げ右打ち",
      position: "投手",
      achievements: "NPB沢村賞2回受賞",
      description: "精密なコントロールとキレのあるストレートが武器のピッチャー。",
      image: "/img/baseball/yamamoto.jpg",
      careerHighlight: "2023年WBC優勝",
      playStyleDetail: "抜群の制球力を誇り、変化球も多彩な万能投手。",
      quote: "「自分を信じて投げる。」"
    },
    {
      id: 8,
      name: "佐々木 朗希",
      nationality: "日本",
      birthYear: 2001,
      height: 190,
      weight: 85,
      hand: "右投げ右打ち",
      position: "投手",
      achievements: "NPB完全試合達成(2022)",
      description: "最速165km/hの豪速球を誇る未来のエース。",
      image: "/img/baseball/sasaki.jpg",
      careerHighlight: "2022年完全試合達成",
      playStyleDetail: "圧倒的な球速とキレのあるスプリットが持ち味。",
      quote: "「全力で投げるのみ。」"
    }
  ]);

  return { players };
}