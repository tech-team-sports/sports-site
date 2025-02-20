<template>
  <div>
    <BadTitle 
        title="バドミントン" 
        subTitle="バドミントンページです"
        imageSrc="/img/badminton/Title/momota.jpg"
      />
    <PlayersList />
    <BadButton />
  </div>
</template>

<script setup>
// コンポーネントのインポート
import BadTitle from '/components/badminton/BadTitle.vue';
import PlayersList from '/components/badminton/PlayersList.vue';
import BadButton from "/components/badminton/BadButton.vue";
</script>