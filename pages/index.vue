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

/* リンクのスタイル */
.links {
  margin-top: 20px;
  text-align: center;
}

.link {
  margin: 0 15px;
  text-decoration: none;
  color: #007BFF;
  font-size: 18px;
  font-weight: bold;
}

.link:hover {
  text-decoration: underline;
  color: #0056b3;
}
</style>
