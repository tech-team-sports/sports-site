// composables/Badminton/useTechniques.js
import { ref } from 'vue';

export const useTechniques = () => {
  const techniques = ref([
    {
      name: 'ドロップショット',
      description: 'ドロップショットは、相手のコートの前方に軽く落とすショットで、相手が後ろにいる時に特に有効です。このショットは、相手をネット際に誘い込み、素早く前に出させることができます。',
      pointsText: 'ドロップショットを成功させるためには、相手の立ち位置をよく観察することが大切です。タイミングよく打つことで、相手をネット際に引き寄せることができ、次のショットで相手を反応させる隙を作れます。打つ際は、シャトルが相手のコートに静かに落ちるよう、軽くかつ正確に打つことを意識しましょう。',
      image: '/img/badminton/Techniques/doropu.jpg',
    },
    {
      name: 'スマッシュ',
      description: 'スマッシュは強力な打球で、シャトルを鋭く相手のコートに打ち込むショットです。空中で相手が反応しづらいタイミングで打つことで、得点を狙うことができます。',
      pointsText: 'スマッシュを打つ際は、体全体を使って強いインパクトを与えることが重要です。特に、足をしっかりと使い、腰をひねりながら打つことで力強いショットになります。また、相手のコートの弱点を狙って打つことがポイントです。逆に無理に強打しようとしすぎて力んでしまうと、コントロールが難しくなるので注意が必要です。',
      image: '/img/badminton/Techniques/doropu.jpg',
    },
    {
      name: 'クリアショット',
      description: 'クリアショットは、シャトルを高く、遠くに打ち返すことで、相手を後ろに追い込むショットです。相手がネット際にいる場合や、相手の攻撃をかわす際に非常に効果的です。',
      pointsText: 'クリアショットを打つには、しっかりと足を使って打つことが大切です。シャトルを高く打ち上げるためには、打点をうまく調整し、肩と腕をフルに使う必要があります。特に、打つ瞬間にしっかりとラケットを振り抜くことが重要です。また、クリアショットを打つタイミングがずれると、相手に攻撃されやすくなるので注意が必要です。',
      image: '/img/badminton/Techniques/doropu.jpg',
    },
    {
      name: 'バックハンドショット',
      description: 'バックハンドショットは、ラケットを持っている手とは反対の手で打つショットです。特にネット際で相手がショットを打った際に素早く反応するために重要な技術です。',
      pointsText: 'バックハンドショットを安定して打つためには、体のひねりをうまく使いながら打つことが重要です。腕だけでなく、体全体で打つことで力強いショットが打てます。さらに、足の位置に気をつけることも大切です。足をしっかりと踏ん張りながら、ラケットをしっかりと振り抜くことを意識しましょう。また、打球の角度やスピードを調整することで、相手をかく乱することができます。',
      image: '/img/badminton/Techniques/doropu.jpg',
    },
    {
      name: 'ヘアピンショット',
      description: 'ヘアピンショットは、ネット際でシャトルを非常に短く、ほぼ垂直に落とす技術です。相手をネット際に寄せるために使います。',
      pointsText: 'ヘアピンショットは、ラケットの面をうまく使ってシャトルをコントロールすることがカギです。ネットを越えるかどうかギリギリの距離で打つため、タイミングと精度が求められます。体重移動を上手く利用し、柔軟に打つことが成功の秘訣です。',
      image: '/img/badminton/Techniques/doropu.jpg',
    },
    {
      name: 'ドライブショット',
      description: 'ドライブショットは、シャトルを速いスピードで相手に打ち返すショットです。相手がコートの奥にいるときに有効です。',
      pointsText: 'ドライブショットを打つためには、ラケットを水平にし、強いインパクトを与えることが重要です。相手のリズムを崩し、素早く対応させることで、プレッシャーをかけることができます。角度やスピードをコントロールして、相手の隙間を狙いましょう。',
      image: '/img/badminton/Techniques/doropu.jpg',
    },
    {
      name: 'レシーブショット',
      description: 'レシーブショットは、相手のサービスを返す際の基本的な技術です。しっかりとしたレシーブをすることで、攻撃に転じるチャンスを得ることができます。',
      pointsText: 'レシーブショットを上手く打つためには、相手のサービスの速さと方向を予測し、素早くラケットを準備することが必要です。また、レシーブ後の次の動きを意識して、素早く攻撃の体勢に入ることが大切です。',
      image: '/img/badminton/Techniques/doropu.jpg',
    },
    {
      name: 'ネットプレー',
      description: 'ネットプレーは、ネット際での素早い反応を求められる技術です。素早く動き、相手のショットをしっかりと返すことが求められます。',
      pointsText: 'ネットプレーでは、素早く反応し、相手のショットをきちんと予測することが大切です。足元の位置に注意を払い、相手の動きに合わせて最適なタイミングで返球することが、ポイントを得るための鍵です。',
      image: '/img/badminton/Techniques/doropu.jpg',
    },
    {
      name: 'ダブルス戦術',
      description: 'ダブルス戦術は、ペアと連携しながら行うバドミントンの戦術です。お互いに役割を分担し、相手に隙を見せないようにすることが大切です。',
      pointsText: 'ダブルスでは、相手の弱点を見つけて、ペアとの連携を意識してプレイすることが重要です。お互いの役割をしっかりと決め、攻守の切り替えをスムーズに行うことが、勝利をつかむための鍵となります。',
      image: '/img/badminton/Techniques/doropu.jpg',
    },
  ]);

  return {
    techniques,
  };
};
