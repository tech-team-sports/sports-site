<template>
    <section class="container">
        <h2 class="sports">サッカーニュース</h2>
        <ul class="items">
            <li class="item">
                <img src="/assets/img/soccerSlider/player.jpg" alt="">
                <NuxtLink to="/japan"><i class="iconsoccer"></i>Jリーグ</NuxtLink>
            </li>
            <li class="item">
                <img src="/assets/img/soccerSlider/stadium.jpg" alt="">
                <NuxtLink to="/europe"><i class="iconsoccer"></i>欧州CL</NuxtLink>
            </li>
            <li class="item">
                <img src="/assets/img/soccerSlider/win.jpg" alt="">
                <NuxtLink to="/world"><i class="iconsoccer"></i>ワールドカップ</NuxtLink>
            </li>
        </ul>
    </section>
</template>

<script setup>

</script>

<style scoped>

.container {
    padding: 1.1rem;
    max-width: 1200px; 
    margin: 0 auto;
}

.sports {
    margin: 2rem 0 1rem 0;
}

.items {
    display: grid;
    gap: 1.2rem;
}

.item {
    text-align: center;
}


.item img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
}

.item a {
    display: block;
    margin-top: 1rem;
}

.item a:hover {
    color: royalblue;
}
 


@media screen and (min-width: 1024px) {

    .sports {
        font-size: 2rem;
    }
    .items {
        grid-template-columns: repeat(3, 1fr);
    }

    .item a {
        font-size: 1.3rem;
    }

}

@media screen and (min-width: 768px) and (max-width: 1023px) {

    .sports {
        font-size: 1.75rem;
    }

    .items {
        grid-template-columns: repeat(2, 1fr);
    }

    .item a {
        font-size: 1.2rem;
    }
}

@media screen and (max-width: 767px) {
    
    .sports {
        font-size: 1.5rem;
    }
    .items {
        grid-template-columns: repeat(2, 1fr);
    }

    .item a {
        font-size: 1.1rem;
    }
}

/* ------------------------------
    アイコン
  ------------------------------ */

.iconsoccer::before {
  content: "";
  background-image: url("/assets/img/icon/soccericon.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 1px;
  vertical-align: middle;
}

</style>
