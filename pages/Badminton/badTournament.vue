<template>
    <div>
      <BadTitle 
        title="バドミントン" 
        subTitle="バドミントンページの主要大会を紹介"
        imageSrc="/img/badminton/Title/taikai.jpg"
      />
      <BadTournament />
      <BadButton />
    </div>
  </template>
  
  <script setup>
  import BadTitle from '/components/badminton/BadTitle.vue';
  import BadTournament from '/components/badminton/BadTournament.vue';
  import BadButton from "/components/badminton/BadButton.vue";
  </script>