<template>
  <header>
    <nav class="global_menu">
      <div class="logo">
        <img src="/assets/img/logo.png" alt="Logo">
      </div>
      <ul class="menu-list">
        <li class="menu">
          <a href="#">HOME</a>
        </li>
        <li class="menu">
          <a href="#">Sports</a>
          <ul class="child_menu">
            <li><a href="#">Baseball</a></li>
            <li><a href="#">Soccer</a></li>
            <li><a href="#">Badminton</a></li>
          </ul>
        </li>
        <li class="menu">
          <a href="#">Contact</a>
        </li>
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
.logo img {
  width: 250px;
  height: auto;
  object-fit: contain;
}

.global_menu {
  display: flex;
  width: 100%;
  position: relative;
  color: #333;
  text-align: center;
}

.global_menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.global_menu a {
  display: block;
  padding: 10px 30px;
  text-decoration: none;
  color: #333;
}

.menu {
  position: relative;
  display: inline-block;
}

.menu:hover {
  background-color: #ffb6c1;
}

.child_menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px;
  padding: 0;
  background: #ffb6c1;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s ease-in-out;
}

.menu:hover .child_menu {
  visibility: visible;
  opacity: 1;
}

.child_menu > li > a {
  font-size: 1em;
  padding: 10px;
  text-align: left;
}

.child_menu > li > a:hover {
  background-color: #ffb6c1;
  color: #fff;
}

.child_menu > li {
  padding: 5px 0;
  display: block;
}
</style>
