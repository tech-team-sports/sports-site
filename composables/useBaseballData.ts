// src/composables/useBaseballData.ts
import { ref } from 'vue';

export function useBaseballData() {
  const introText = ref("野球は、バットでボールを打って得点を競うスポーツで、9人対9人のチームでプレイします。");
  const historyText = ref("野球は19世紀にアメリカで発展し、世界中で人気のスポーツとなりました。");
  const rules = ref([
    "試合は9回で、各チームが攻守を交代します。",
    "1試合での得点が多いチームが勝者です。",
    "バッターは3回のストライクでアウトになります。"
  ]);
  const techniques = ref([
    "ホームラン：バットで打ったボールをフェンス越えに飛ばすテクニック。",
    "ピッチング：ボールを投げる技術で、ストライクゾーンを狙います。",
    "キャッチング：ボールを受けるための手の使い方や反応力が求められます。"
  ]);
  const eventsText = ref("今年のプロ野球リーグ戦は、4月から開催される予定です。詳細は公式サイトをご確認ください。");
  const famousPlayers = ref([
    { name: "イチロー", image: "@/assets/img/ichiro.jpg" },
    { name: "大谷翔平", image: "@/assets/img/otani.jpg" },
    { name: "ダルビッシュ", image: "@/assets/img/darvish.jpg" }
  ]);

  return {
    introText,
    historyText,
    rules,
    techniques,
    eventsText,
    famousPlayers
  };
}
