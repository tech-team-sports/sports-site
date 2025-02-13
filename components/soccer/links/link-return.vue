<template>
    <NuxtLink class="btn" to="/soccer">サッカーのページへ戻る</NuxtLink>
</template>

<script setup>

</script>

<style scoped>

a.btn {
  display: block;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 210px;
  padding: 1rem 1rem;
  margin: 0 auto;
  margin-top: 2rem;
  font-weight: bold;
  background-color: skyblue;
  color: royalblue;
  transition: 0.3s ease-in-out;
}

a.btn::before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  border: 2px solid #27acd9;
  transition: 0.2s;
}

a.btn:hover {
  background-color: #27acd9;
  color: #fff;
}

a.btn:hover::before {
  top: 0;
  left: 0;
}
</style>