<script setup>
import AppHeader from '@/components/share/AppHeader.vue';
import AppFooter from '@/components/share/AppFooter.vue';
import ReturnTopButton from '@/components/common/ReturnTopButton';
</script>

<template>
  <div>
    <AppHeader />
    <slot />
    <ReturnTopButton />
    <AppFooter />
  </div>
</template>

