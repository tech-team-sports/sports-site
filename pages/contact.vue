<template>
  <div class="contact-container">
    <h1 class="contact-title">お問い合わせ</h1>
    <ContactForm />
  </div>
</template>

<script setup>
import ContactForm from '../components/ContactForm/ContactForm.vue'
</script>

<style scoped>
.contact-container {
  padding: 1.5rem;
}

.contact-title {
  font-size: 3rem; /* フォントサイズを大きく */
  font-weight: bold;
  text-align: center; /* 中央揃え */
  margin-bottom: 1rem; /* 下に少しスペース */
}
</style>
