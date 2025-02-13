<template>
  <footer>
    <div class="footer-content">
      <div class="logo">
        <NuxtLink to="/"><img src="/assets/img/logo.png" alt="Logo" /></NuxtLink>
      </div>
      <nav class="gmenu">
        <ul class="menu-grid">
          <li class="menu">
            <span class="menu-title">Home</span>
            <ul class="submenu">
              <li><NuxtLink to="/">Top</NuxtLink></li>
              <li><NuxtLink to="#">About</NuxtLink></li>
            </ul>
          </li>
          <li class="menu">
            <span class="menu-title">Sports</span>
            <ul class="submenu">
              <li><NuxtLink to="/baseball">Baseball</NuxtLink></li>
              <li><NuxtLink to="/soccer">Soccer</NuxtLink></li>
              <li><NuxtLink to="/Badminton/badTOP">Badminton</NuxtLink></li>
            </ul>
          </li>
          <li class="menu">
            <span class="menu-title">Contact</span>
            <ul class="submenu">
              <li><NuxtLink to="#">お問い合わせ</NuxtLink></li>
              <li><NuxtLink to="#">開発メンバー</NuxtLink></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    <hr />
    <p class="footer-bottom">&copy; 2025 Sports Hub. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  background: linear-gradient(135deg, #2a2a2a, #444444); /* グラデーション背景 */
  color: white;
  padding: 40px 0;
  text-align: center;
  border-top: 2px solid rgba(255, 255, 255, 0.3); /* デリケートなボーダー */
  font-family: 'Poppins', sans-serif;
  margin-top: 30px;
}

/* フッター全体のレイアウト */
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* ロゴを上に配置 */
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  flex-wrap: wrap;
  gap: 50px; /* アイテム間に適度な空白 */
}

/* ロゴ */
.logo {
  max-width: 200px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  align-self: flex-start; /* ロゴを上に配置 */
  margin-left: 20px;
}

.logo img {
  height: 60px;
  width: auto;
  box-shadow: none; /* ロゴの影を削除 */
}

/* メニュー */
.gmenu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  gap: 50px; /* メニューアイテム間に適度な空白 */
}

/* メニューのレイアウト */
.menu-grid {
  display: flex;
  gap: 80px; /* メニューアイテム間に適度な空白 */
  padding: 0;
  margin: 0;
  list-style: none;
  justify-content: center;
  width: 100%;
}

.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px; /* メニューアイテム間に適度な空白 */
}

.menu-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff; /* ホワイトでタイトルを強調 */
  margin-bottom: 8px; /* タイトルとサブメニューの間に少し空白 */
}

/* サブメニュー */
.submenu {
  display: flex;
  flex-direction: column;
  gap: 20px; /* サブメニューアイテム間の間隔を広げる */
  padding: 0;
  margin: 0;
}

.submenu li {
  list-style: none;
  padding-bottom: 5px; /* アイテム間に少し余白 */
  border-bottom: 1px solid rgba(255, 255, 255, 0.2); /* アイテム間の薄いボーダー */
}

.submenu li a {
  font-size: 1rem;
  font-weight: normal;
  padding: 5px 10px;
  color: #fff; /* ホワイトに統一 */
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease; /* ホバーアニメーションを色の変更のみ */
}

/* サブメニューアイテムホバー時 */
.submenu li a:hover {
  color: #ff4081; /* ホバー時の文字色 */
}

/* 区切り線 */
hr {
  width: 90%; /* サイドに空白を持たせる */
  height: 1px;
  border: none;
  background-color: #444;
  margin: 30px auto;
}

/* フッター下部のテキスト */
.footer-bottom {
  font-size: 0.9rem;
  color: #bbb;
  margin-top: 20px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3); /* テキストに影を追加 */
}

/* スマホ・タブレット対応 */
@media (max-width: 900px) {
  .footer-content {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 20px;
  }

  .logo {
    margin-right: 20px;
    order: 1;
  }

  .gmenu {
    justify-content: flex-start;
    width: 100%;
    order: 2;
  }

  .menu-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    justify-content: start;
    width: 100%;
  }
}
</style>
