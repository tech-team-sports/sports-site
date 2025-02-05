<script setup>
import AppHeader from '@/components/share/AppHeader.vue';
import AppFooter from '@/components/share/AppFooter.vue';
</script>

<template>
  <div>
    <AppHeader />
    <slot />  <!-- ここにページのコンテンツが入る -->
    <AppFooter />
  </div>
</template>

