document.addEventListener('DOMContentLoaded', () => {
  // タブ要素を取得
  const tabs = document.querySelectorAll('.tab');
  const sportTabs = document.querySelectorAll('.sport-tab');

  // タブクリック時にスポーツ内容を表示する
  tabs.forEach(tab => {
      tab.addEventListener('click', (event) => {
          event.preventDefault();

          // すべてのタブを非表示にする
          sportTabs.forEach(sportTab => sportTab.classList.remove('active'));

          // クリックされたタブに対応するスポーツタブを表示する
          const sportId = event.target.getAttribute('data-sport');
          const activeTab = document.getElementById(sportId);
          activeTab.classList.add('active');
      });
  });

  // 初期状態で最初のタブを表示
  const firstTab = tabs[0];
  if (firstTab) {
      firstTab.click();
  }
});
