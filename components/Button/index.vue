<!-- Button.vue -->
<template>
 <div class="back-button">
   <a href="/example" class="btn">{{ label }}</a>
 </div>
</template>

<script setup lang="ts">
defineProps({
 label: {
   type: String,
   required: true,
 },
});
</script>

<style scoped>
.back-button {
 text-align: center;
 margin-top: 40px;
}

.btn {
 display: inline-block;
 padding: 15px 30px;
 background-color: #007BFF;
 color: white;
 font-size: 1.2rem;
 font-weight: bold;
 text-decoration: none;
 border-radius: 30px;
 box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
 transition: all 0.3s ease;
}

.btn:hover {
 background-color: #0056b3;
 box-shadow: 0 10px 18px rgba(0, 0, 0, 0.15);
}

.btn:active {
 transform: scale(0.98);
}
</style>
