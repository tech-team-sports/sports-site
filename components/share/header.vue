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
            <li>
                <a href="#"><i class="iconbaseball"></i>Baseball</a>
            </li>
            <li>
                <a href="#"><i class="iconsoccer"></i>Soccer</a>
            </li>
            <li>
                <a href="#"><i class="iconbadminton"></i>Badminton</a>
            </li>
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
  transition: visibility 0s, opacity 0.3s ease-in-out;
}

.menu:hover .child_menu {
  visibility: visible;
  opacity: 1;
}

.child_menu > li > a {
  font-size: 1em;
  padding: 8px 10px;
  text-align: left;
}

.child_menu > li > a:hover {
  background-color: #dcdcdc;
  
}

.child_menu > li {
  padding: 5px 0;
  display: block;
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

</style>
