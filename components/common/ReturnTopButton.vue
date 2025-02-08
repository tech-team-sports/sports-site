<template>
    <button 
      v-if="isVisible" 
      @click="scrollTop" 
      class="return-top-button"
    >
    トップ
    </button>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted, onUnmounted } from "vue";
  
  const isVisible = ref(false);
  
  const handleScroll = () => {
    isVisible.value = window.scrollY > 100;
  };
  
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
  </script>
  
  <style scoped>
  .return-top-button {
    position: fixed;
    bottom: 20px;
    right: 10px;
    padding: 10px 20px;
    background-color: royalblue;
    color: white;
    border-radius: 0.5rem;
  }
  </style>
  