<template>
  <div class="data-container">
    <NuxtLink to="/Badminton/badTOP"><span class="btn">トップへ戻る</span></NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'HoverButton',
}
</script>

<style scoped>
.data-container {
  display: flex;
  scale: 1.4;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
}

.btn {
  cursor: pointer;
  position: relative;
  padding: 12px 60px;
  background: #87ceeb;
  font-size: 14px;
  font-weight: bold;
  color: #4c7ae2;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: all 0.7s;
}

.btn::after,
.btn::before {
  content: " ";
  width: 10px;
  height: 10px;
  position: absolute;
  border: 0px solid #fff;
  transition: all 0.6s;
}

.btn::after {
  top: -1px;
  left: -1px;
  border-top: 4px solid #026aa6;
  border-left: 4px solid #026aa6;
}

.btn::before {
  bottom: -1px;
  right: -1px;
  border-bottom: 4px solid #026aa6;
  border-right: 4px solid #026aa6;
}

.btn:hover {
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  color: #ffffff;
  background: #27acd9;
}

.btn:hover::before,
.btn:hover::after {
  width: 104%;
  height: 117%;
}
</style>
