<template>
 <header class="header">
  <div class="logo">
    <a href="/">
      <img src="/assets/img/ami.png" alt="Sports Image">
    </a>
  </div>
   <nav class="navigation">
     <ul>
       <li><NuxtLink to="/baseball">野球</NuxtLink></li>
       <li><NuxtLink to="/soccer">サッカー</NuxtLink></li>
       <li><NuxtLink to="/badminton">バドミントン</NuxtLink></li>
     </ul>
   </nav>
 </header>
</template>

<script>
export default {
 name: 'Header'
}
</script>

<style scoped>
.header {
 display: flex;
 justify-content: space-between;
 align-items: center;
 background-color: #2c3e50;
 padding: 20px;
 color: white;
}
.logo img {
  width: 300px; /* ロゴのサイズ調整 */
  height: auto;
  cursor: pointer; /* ロゴにカーソルを合わせると手のひらが表示される */
}
.navigation ul {
 display: flex;
 list-style: none;
 margin: 0;
 padding: 0;
}
.navigation li {
 margin: 0 15px;
}
.navigation a {
 color: white;
 text-decoration: none;
 font-size: 18px;
}
.navigation a:hover {
 text-decoration: underline;
}
</style>
