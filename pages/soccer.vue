<script setup lang="ts">
import Button from '@/components/Button/index.vue'; // Buttonコンポーネントをインポート

definePageMeta({
  title: 'Abバド',
  description: '',
});
</script>

<template>
  <h2 class="main-title">サッカーの世界へようこそ！</h2>

  
  <!-- トップページに戻るボタン -->
  <Button label="トップページに戻る" />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
