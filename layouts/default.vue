<script setup>
import AppHeader from '~/components/share/Appheader.vue';
import AppFooter from '@/components/share/AppFooter.vue';
import ReturnTopButton from '@/components/whole-animation/ReturnTopButton';
</script>

<template>
  <div>
    <AppHeader />
    <slot />
    <ReturnTopButton />
    <AppFooter />
  </div>
</template>

