<template>
  <div>
    <BadTitle 
        title="Badminton" 
        subTitle="有名なバドミントン選手を紹介"
        imageSrc="/img/badminton/Title/momota.jpg"
      />
    <BadPlayersList />
    <BadButton />
  </div>
</template>

<script setup>
// コンポーネントのインポート
import BadTitle from '/components/badminton/BadTitle.vue';
import BadPlayersList from '/components/badminton/BadPlayersList.vue';
import BadButton from "/components/badminton/BadButton.vue";
</script>