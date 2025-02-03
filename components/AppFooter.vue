<template>
 <footer class="footer">
   <div class="footer-content">
     <p>&copy; 2025 My Website. All rights reserved.</p>
     <ul class="social-links">
      <li><NuxtLink to="/baseball">野球</NuxtLink></li>
       <li><NuxtLink to="/soccer">サッカー</NuxtLink></li>
       <li><NuxtLink to="/badminton">バドミントン</NuxtLink></li>
     </ul>
   </div>
 </footer>
</template>

<script>
export default {
 name: 'Footer'
}
</script>

<style scoped>
.footer {
 background-color: #34495e;
 color: white;
 padding: 20px;
 text-align: center;
}
.footer-content {
 max-width: 1200px;
 margin: 0 auto;
}
.social-links {
 list-style: none;
 padding: 0;
 margin: 20px 0 0;
}
.social-links li {
 display: inline;
 margin: 0 15px;
}
.social-links a {
 color: white;
 text-decoration: none;
 font-size: 16px;
}
.social-links a:hover {
 text-decoration: underline;
}
</style>
