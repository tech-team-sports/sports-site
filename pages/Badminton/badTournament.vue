<template>
    <div>
      <BadTitle 
        title="バドミントン" 
        subTitle="バドミントンページです"
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