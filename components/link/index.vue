<template>
 <nav class="sports-links">
  <ul>
   <li>
    <router-link to="/soccer" class="sport-link">
     <span class="sport-text">サッカー</span>
    </router-link>
   </li>
   <li>
    <router-link to="/badminton" class="sport-link">
     <span class="sport-text">バドミントン</span>
    </router-link>
   </li>
   <li>
    <router-link to="/baseball" class="sport-link">
     <span class="sport-text">野球</span>
    </router-link>
   </li>
  </ul>
 </nav>
</template>

<script>
export default {
 name: 'SportsLinks'
}
</script>

<style scoped>
.sports-links ul {
 list-style: none;
 padding: 0;
 margin: 0;
 display: flex;
 gap: 20px;
}

.sport-link {
 text-decoration: none;
 color: #333;
 padding: 8px 16px;
 border-radius: 4px;
 transition: background-color 0.3s;
}

.sport-link:hover {
 background-color: #f0f0f0;
}

.sport-text {
 font-size: 16px;
}
