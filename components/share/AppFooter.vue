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
                <li><NuxtLink to="/badminton">Badminton</NuxtLink></li>
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
        <hr />
        <p class="footer-bottom">&copy; 2025 Sports Hub. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  footer {
    background: linear-gradient(135deg, #0a0a0a, #1a1a2e);
    color: white;
    padding: 40px 0;
    text-align: center;
    border-top: 2px solid rgba(255, 255, 255, 0.2);
    font-family: 'Poppins', sans-serif;
  }
  
  .footer-content {
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }
  
  .logo {
    width: 100%;
    max-width: 200px;
    margin-left: 20px;
  }
  
  .logo img {
    height: 60px;
    width: auto;
  }
  
  .gmenu {
    display: flex;
    justify-content: center; /* メニューアイテムを中央に配置 */
    align-items: center;
    width: 100%;
  }
  
  .menu-grid {
    display: flex;
    gap: 60px;
    padding: 0;
    margin: 0;
    list-style: none;
    justify-content: center; /* メニューアイテムを中央に揃える */
    width: 100%;
  }
  
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  .menu-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }
  
  .submenu {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0;
    margin: 0;
  }
  
  .submenu li {
    list-style: none;
  }
  
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
  
  hr {
    width: 100%;
    height: 1px;
    border: none;
    background-color: #444;
  }
  
  .footer-bottom {
    font-size: 0.9rem;
    color: #bbb;
    margin-top: 20px;
  }
  
  @media (max-width: 900px) {
    .gmenu {
      flex-direction: column;
      align-items: center; /* メニューアイテムを中央に配置 */
      width: 100%;
    }
    .menu-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
  }
</style>
