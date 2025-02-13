import { ref } from 'vue';

export const usePlayers = () => {
  const players = ref([
    {
      name: '林丹',
      image: '/images/lin_dan.jpg',
      bio: '中国のバドミントン選手で、オリンピック金メダリスト。',
      country: '中国',
      birthYear: 1983,
      achievements: ['オリンピック金メダル 2008, 2012', '世界選手権金メダル 2006, 2007, 2009']
    },
    {
      name: '桃田賢斗',
      image: 'bad.jpg',
      bio: '日本のバドミントン選手で、世界ランク1位を達成したことがある。',
      country: '日本',
      birthYear: 1994,
      achievements: ['世界選手権金メダル 2019', '全英オープン優勝 2020']
    },
    {
      name: 'ガエル・マルトレ',
      image: '/images/gael_martin.jpg',
      bio: 'フランスのバドミントン選手。ヨーロッパ選手権で何度もメダルを獲得。',
      country: 'フランス',
      birthYear: 1990,
      achievements: ['ヨーロッパ選手権金メダル 2017', 'フランスオープン準優勝 2018']
    },
    {
      name: 'タカ・ダニエル',
      image: '/images/taka_daniel.jpg',
      bio: 'アメリカのバドミントン選手で、常にトップ10入りしている。',
      country: 'アメリカ',
      birthYear: 1992,
      achievements: ['アメリカオープン優勝 2016', '全米選手権金メダル 2019']
    },
    {
      name: 'カロリーナ・マリン',
      image: '/images/carolina_marin.jpg',
      bio: 'スペインの女性バドミントン選手で、オリンピック金メダルを持つ。',
      country: 'スペイン',
      birthYear: 1993,
      achievements: ['オリンピック金メダル 2016', '世界選手権金メダル 2014, 2015, 2018']
    },
    {
      name: 'プサラ・ヴェンカタ・シヴァ',
      image: '/images/pvsindhu.jpg',
      bio: 'インドの女性バドミントン選手で、世界選手権金メダル保持者。',
      country: 'インド',
      birthYear: 1995,
      achievements: ['世界選手権金メダル 2019', 'オリンピック銀メダル 2016']
    },
    {
      name: 'アグネス・クリストファー',
      image: '/images/agnes_christopher.jpg',
      bio: 'ドイツのバドミントン選手で、ヨーロッパ選手権の常連。',
      country: 'ドイツ',
      birthYear: 1987,
      achievements: ['ヨーロッパ選手権金メダル 2015', '全英オープン準優勝 2014']
    },
    {
      name: 'チェン・ロン',
      image: '/images/chen_long.jpg',
      bio: '中国のバドミントン選手。世界選手権でのメダル獲得が多い。',
      country: '中国',
      birthYear: 1989,
      achievements: ['世界選手権金メダル 2014, 2015', 'オリンピック銀メダル 2016']
    }
  ]);

  return { players };
}
