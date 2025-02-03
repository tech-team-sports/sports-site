// composables/useSportInfo.ts

export interface Sport {
 id: number;
 name: string;
 description: string;
}

export const useSportInfo = () => {
 // スポーツ情報を取得する非同期関数
 const fetchSportData = async (): Promise<Sport[]> => {
   try {
     const response = await fetch('https://example.com/api/sport');
     const data: Sport[] = await response.json(); // APIから取得したデータをSport型で型付け
     return data;
   } catch (error) {
     console.error('スポーツ情報の取得に失敗しました:', error);
     return []; // エラーが発生した場合、空の配列を返す
   }
 };

 return { fetchSportData };
};
