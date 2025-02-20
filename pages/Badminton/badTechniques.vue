<template>
  <div>
    <BadTitle 
        title="Badminton" 
        subTitle="試合で使える技術を学ぼう"
        imageSrc="/img/badminton/Title/gijutu.jpg"
      />
  <Techniques />
  <BadButton />
  </div>
</template>

<script setup>
import BadTitle from '/components/badminton/BadTitle.vue';
import Techniques from '@/components/badminton/Techniques.vue';
import BadButton from '/components/badminton/BadButton.vue';
</script>
