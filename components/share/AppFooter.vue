<template>
    <footer>
        <nav class="gmenu">
            <ul>
            <li class="menu">
                <NuxtLink to="/baseball">Baseball</NuxtLink>
            </li>
            <li class="menu">
                <NuxtLink to="/soccer">Soccer</NuxtLink>
            </li>
            <li class="menu">
                <NuxtLink to="/badminton">Badminton</NuxtLink>
            </li>
        </ul>
        </nav>
    </footer>
</template>
 
<script>
export default {
    name: 'Footer'
}
</script>
 
<style scoped>
footer {
  background-color: black;
  color: rgb(0, 0, 0);
  padding: 20px 0;
  text-align: center;
}
 
.gmenu ul {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 0;
  list-style: none;
}
 
.menu a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  font-size: 1.2rem;
  padding: 10px 15px;
  transition: all 0.3s ease;
  border-radius: 8px;
}
 
.menu a:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>