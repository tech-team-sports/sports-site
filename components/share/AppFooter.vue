<template>
    <footer>
        <div class="footer-content">
            <nav class="gmenu">
                <ul>
                    <!-- 1列目: ホーム -->
                    <li class="menu">
                        <span class="menu-title">Home</span>
                        <ul class="submenu">
                            <li><NuxtLink to="/">Top</NuxtLink></li>
                            <li><NuxtLink to="/about">About</NuxtLink></li>
                        </ul>
                    </li>

                    <!-- 2列目: スポーツ -->
                    <li class="menu">
                        <span class="menu-title">Sports</span>
                        <ul class="submenu">
                            <li><NuxtLink to="/baseball">Baseball</NuxtLink></li>
                            <li><NuxtLink to="/soccer">Soccer</NuxtLink></li>
                            <li><NuxtLink to="/badminton">Badminton</NuxtLink></li>
                        </ul>
                    </li>

                    <!-- 3列目: お問い合わせ -->
                    <li class="menu">
                        <span class="menu-title">Contact</span>
                        <ul class="submenu">
                            <li><NuxtLink to="/contact">Inquiry</NuxtLink></li>
                            <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <p class="footer-bottom">© 2025 Sports Hub. All rights reserved.</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
};
</script>

<style scoped>
footer {
  background: linear-gradient(135deg, #0a0a0a, #1a1a2e);
  color: white;
  padding: 40px 0;
  text-align: center;
  border-top: 2px solid rgba(255, 255, 255, 0.2);
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px; /* メニュー全体の間隔を広げる */
}

/* メニュー全体を横並びに */
.gmenu ul {
  display: flex;
  justify-content: center;
  gap: 60px; /* メニュー間の間隔を広げる */
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  max-width: 800px;
}

/* メニュー項目 */
.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; /* メニュー項目内の間隔を広げる */
}

/* メニュータイトルは横並びに */
.menu-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

/* サブメニュー（リンク部分）を縦並びに */
.submenu {
  display: flex;
  flex-direction: column;
  gap: 12px; /* サブメニュー間の間隔を広げる */
  padding: 0;
  margin: 0;
}

.submenu li {
  list-style: none;
}

/* ホバー時の下線 */
.submenu li a {
  font-size: 1rem;
  font-weight: normal;
  padding: 5px 10px;
  opacity: 0.8;
  color: white;
  text-decoration: none;
  position: relative;
  transition: opacity 0.3s ease-in-out;
}

/* ホバー時に下線が現れる */
.submenu li a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease-in-out;
}

.submenu li a:hover::after {
  width: 100%;
}

.submenu li a:hover {
  opacity: 1;
}

/* フッター下部 */
.footer-bottom {
  font-size: 0.9rem;
  color: #bbb;
  margin-top: 20px;
}
</style>
