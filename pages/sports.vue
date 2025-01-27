<script setup>
import { ref } from 'vue'
const greeting = ref('Hello World!')
</script>

<template>
  <div>
    <img src="/assets/img/ami.png">
  </div>
</template>

<style>
.greeting {
  color: royalblue;
  font-weight: bold;
  font-size: calc(16px + 2vw);
}
</style>