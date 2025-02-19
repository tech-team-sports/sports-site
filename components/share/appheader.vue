<template>
  <header>
    <nav class="global_menu">
      <div class="logo">
        <NuxtLink to="/"><img src="/assets/img/logo.png" alt="Logo"></NuxtLink>
      </div>
      <ul class="menu-list">
        <li class="menu">
          <NuxtLink to="/">HOME</NuxtLink>
        </li>
        <li class="menu">
          <a href="#">Sports<i class="dli-caret-down"></i></a>
          <ul class="child_menu">
            <li>
              <NuxtLink to="/baseball/baseTOP"><i class="iconbaseball"></i>Baseball</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/soccer"><i class="iconsoccer"></i>Soccer</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/Badminton/badTOP"><i class="iconbadminton"></i>Badminton</NuxtLink>
            </li>
          </ul>
        </li>
        <li class="menu">
          <NuxtLink to="/contact">Contact</NuxtLink>
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
.global_menu {
  display: flex;
  width: 100%;
  position: relative;
  color: #333;
  text-align: center;
  border-bottom: 1px solid gainsboro;
  z-index: 9;
}

.logo img {
  object-fit: contain;
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
  display: flex;
  position: relative;
  display: inline-block;
}

.menu:hover {
  background-color: #D3DEF1;
  border-radius: 0.3rem;
}

.child_menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px;
  height: auto;
  padding: 0;
  background: #D3DEF1;
  border-radius: 0.3rem;
  visibility: hidden;
  opacity: 0;
  z-index: 10;
  transition: visibility 0s, opacity 0.3s ease-in-out;
}

.menu:hover .child_menu {
  visibility: visible;
  opacity: 1;
}

.child_menu>li>a {
  font-size: 1em;
  padding: 8px 10px;
  text-align: left;
}

.child_menu>li>a:hover {
  background-color: #dcdcdc;

}

.child_menu>li {
  padding: 5px 0;
  display: block;
}

/* ------------------------------
  矢印
------------------------------ */
.dli-caret-down {
  display: inline-block;
  vertical-align: middle;
  color: #333;
  line-height: 1;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent;
  border-width: 0.64952em 0.375em;
  border-top-color: currentColor;
  border-bottom: 0;
  margin-left: 1rem;
}

/* ------------------------------
    アイコン
  ------------------------------ */
.iconbaseball::before {
  content: "";
  background-image: url("/assets/img/icon/yakyuicon.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 8px;
  vertical-align: middle;
}

.iconsoccer::before {
  content: "";
  background-image: url("/assets/img/icon/soccericon.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 8px;
  vertical-align: middle;
}

.iconbadminton::before {
  content: "";
  background-image: url("/assets/img/icon/badoicon.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 8px;
  vertical-align: middle;
}

@media screen and (min-width: 1024px) {
  .logo img {
    width: 200px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .logo img {
    width: 200px;
  }
}

@media screen and (max-width: 767px) {
  .global_menu {
    flex-direction: column;
    text-align: left;
  }

  .logo img {
    width: 160px;
  }
}
</style>