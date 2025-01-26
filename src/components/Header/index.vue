<template>
    <header class="header">
      <div class="logo">
        <span>My Website</span>
      </div>
      <nav :class="{ open: isMobileMenuOpen }" class="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <button class="menu-button" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMobileMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* ヘッダー全体 */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: beige;
    color: white;
  }
  
  /* ロゴ部分 */
  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .logo img {
    width: 40px;
    height: 40px;
  }
  
  /* ナビゲーション */
  .nav {
    display: flex;
    gap: 1rem;
  }
  .nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .nav a {
    color: white;
    text-decoration: none;
  }
  
  /* モバイル対応 */
  .menu-button {
    display: none;
    background: none;
    border: none;
    flex-direction: column;
    gap: 0.3rem;
    cursor: pointer;
  }
  .menu-button .bar {
    width: 25px;
    height: 3px;
    background-color: white;
  }
  
  @media (max-width: 768px) {
    .menu-button {
      display: flex;
    }
    .nav {
      display: none;
      flex-direction: column;
      gap: 1rem;
      background-color: #444;
      position: absolute;
      top: 100%;
      right: 0;
      padding: 1rem;
    }
    .nav.open {
      display: flex;
    }
  }
  </style>
  