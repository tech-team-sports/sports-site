<template>
  <div>
    <BadTitle 
        title="バドミントン" 
        subTitle="有名なバドミントン選手を紹介"
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