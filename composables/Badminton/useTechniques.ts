export function useTechniques() {
  const techniques = [
    {
      name: 'ドロップショット',
      description: '相手を前に引き寄せて隙を作るショット。ネット際でシャトルを落とし、相手の動きをコントロールする。',
      image: '/img/badminton/momota.jpg',
      points: ['ネット際で低く落とす', '相手の動きを見てタイミングを変える']
    },
    {
      name: 'スマッシュ',
      description: '速く強いショットで相手を崩す攻撃的な技。決め球として使われることが多い。',
      image: '/img/badminton/momota.jpg',
      points: ['強く振り抜く', '角度を意識して打つ']
    },
    {
      name: 'クリアショット',
      description: '相手を後ろに下げるためのショット。守備を立て直すときにも使われる。',
      image: '/img/badminton/momota.jpg',
      points: ['高く遠くに飛ばす', '相手の位置を見て打ち分ける']
    },
    {
      name: 'ネットショット',
      description: 'ネット際で低く鋭いタッチで打つショット。相手を前に引き出し、スマッシュにつなげる。',
      image: '/img/badminton/momota.jpg',
      points: ['柔らかいタッチで打つ', '相手のミスを誘う']
    },
    {
      name: 'ドライブ',
      description: '速く低い軌道で打つショット。ラリーの展開を速くし、相手にプレッシャーをかける。',
      image: '/img/badminton/momota.jpg',
      points: ['ラケットを水平に使う', 'スピードを意識する']
    },
    {
      name: 'ヘアピンショット',
      description: 'ネット際でシャトルをギリギリに落とし、相手に返球を難しくする技。',
      image: '/img/badminton/momota.jpg',
      points: ['ネットギリギリに落とす', '相手の反応を見て使う']
    },
    {
      name: 'カットショット',
      description: 'シャトルに回転をかけて、急激に落ちる軌道を作るテクニカルなショット。',
      image: '/img/badminton/momota.jpg',
      points: ['ラケットの角度を変えて打つ', '回転をかけてシャトルを落とす']
    },
    {
      name: 'プッシュショット',
      description: 'ネット際で速く押し込むショット。相手に反応の時間を与えない。',
      image: '/img/badminton/momota.jpg',
      points: ['相手のスキを狙う', '素早く押し出す']
    },
    {
      name: 'ロブショット',
      description: '相手を後ろに下げて体勢を崩す高いショット。',
      image: '/img/badminton/momota.jpg',
      points: ['高く打ち上げる', '相手の守備を崩す']
    },
    {
      name: 'カウンタードライブ',
      description: '相手の速いショットをそのまま返し、ラリーの主導権を握る技。',
      image: '/img/badminton/momota.jpg',
      points: ['相手のショットに合わせて打つ', '正確なコントロールを意識']
    }
  ];

  return { techniques };
}
