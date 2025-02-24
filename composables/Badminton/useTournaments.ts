export default function useTournaments() {
    const tournaments = [
      {
        title: "バドミントン世界選手権",
        description:
          "バドミントンの世界選手権は、世界で最も権威のある大会の一つ。毎年、世界中のトップ選手が集まり、個人種目で世界王者を決定する。シングルス、ダブルス、ミックスダブルスが行われ、優勝者には大きな名誉が与えられる。",
        date: "毎年8月頃",
        location: "世界各国",
        history: "バドミントン世界選手権は1977年に始まり、以来バドミントン界の最も重要な大会として位置づけられている。",
        importance: "バドミントン世界選手権は、オリンピックに次ぐ重要な大会として、選手のキャリアにおいても大きな意味を持つ。",
        broadcast: "世界中で放送され、インターネットでもライブストリーミングが提供されている。",
      },
      {
        title: "オリンピックバドミントン競技",
        description:
          "オリンピックのバドミントン競技は、4年に一度開催され、世界中のトップ選手が各国代表として競い合う。金メダルを巡る戦いは、全世界が注目する一大イベント。",
        date: "4年に1回（夏季オリンピック）",
        location: "開催国",
        history: "オリンピックにおけるバドミントンは、1992年のバルセロナオリンピックから正式競技となった。",
        importance: "オリンピックのバドミントン競技は、選手にとって最も名誉ある大会であり、金メダルを獲得することは大きなキャリアの達成とされている。",
        broadcast: "オリンピックのバドミントンは、世界中でテレビ放送されるほか、インターネットでのライブ配信も行われる。",
      },
      {
        title: "BWFワールドツアー",
        description:
          "BWFワールドツアーは、年間を通して各国で開催されるプロツアー。世界ランキング上位選手が参加し、ランキングと賞金を賭けて戦う。最終的に年間王者を決定する「ワールドツアーファイナルズ」も行われる。",
        date: "年間を通じて",
        location: "世界各国",
        history: "BWFワールドツアーは、2018年から始まり、世界バドミントン連盟（BWF）によって運営されている。",
        importance: "このツアーは、世界ランキングに大きな影響を与える大会であり、選手にとっては賞金とランキングポイントを争う重要な舞台。",
        broadcast: "多くの大会がテレビ放送され、オンラインでもライブストリーミングされる。",
      },
      {
        title: "アジアバドミントン選手権",
        description:
          "アジアのトップ選手が集まる大会。アジア全体の強豪選手たちが技術を競い合い、オリンピックや世界選手権前の重要な試合として位置づけられている。",
        date: "毎年4月～5月",
        location: "アジア各国",
        history: "アジアバドミントン選手権は1965年に創設され、アジアバドミントン連盟（BADMINTON ASIA）によって開催されている。",
        importance: "アジアバドミントン選手権は、アジア地域のバドミントンにおける権威ある大会として位置づけられており、オリンピックの前哨戦ともなる。",
        broadcast: "アジア各国でテレビ放送されるほか、インターネットでも視聴可能。",
      },
      {
        title: "全日本バドミントン選手権大会",
        description:
          "日本最大のバドミントン大会。国内のトップ選手が一堂に会し、国内No.1を決定する。ここでの成績は、国際大会への出場権にも影響を与える。",
        date: "毎年11月～12月",
        location: "日本国内",
        history: "全日本バドミントン選手権大会は1950年から開催され、国内の最高峰の大会として多くの選手にとって重要な位置を占めている。",
        importance: "国内のバドミントン選手にとって、最も重要な大会の1つであり、上位選手は国際大会への出場権を獲得する。",
        broadcast: "国内でテレビ放送され、またインターネットでも視聴可能。",
      },
      {
        title: "ジャパンオープンバドミントン選手権",
        description:
          "BWFワールドツアーの一環として毎年開催される国際大会。日本国内で行われるため、日本のファンにとっては特に注目される大会で、世界ランキングに影響を与えるポイントがかかっている。",
        date: "毎年9月～10月",
        location: "日本（東京、大阪など）",
        history: "ジャパンオープンは1985年に創設され、BWFワールドツアーの重要な大会として位置づけられている。",
        importance: "世界ランキングに影響を与える大会であり、選手にとっては重要なポイント獲得のチャンス。",
        broadcast: "日本国内で放送され、インターネットでも視聴可能。",
      }
    ];

    return { tournaments };
  }
