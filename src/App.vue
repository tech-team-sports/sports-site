<template>
  <div id="app">
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
import './reset.css';


export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>

</style>
