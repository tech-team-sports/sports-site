<template>
    <div class="data-container">
        <NuxtLink to="/Baseball/baseTOP"
            ><span class="btn">TOPへ戻る</span></NuxtLink
        >
    </div>
</template>

<script>
export default {
    name: "HoverButton",
};
</script>

<style scoped>
.data-container {
    display: flex;
    scale: 1.6;
    justify-content: center;
    align-items: center;
    margin: 80px;
}

.btn {
    cursor: pointer;
    position: relative;
    padding: 10px 20px;
    background: #ae94eb;
    font-size: 28px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    transition: all 0.8s;
}

.btn::after,
.btn::before {
    content: " ";
    width: 10px;
    height: 10px;
    position: absolute;
    border: 0px solid #fff;
    transition: all 0.8s;
}

.btn::after {
    top: -1px;
    left: -1px;
    border-top: 5px solid black;
    border-left: 5px solid black;
}

.btn::before {
    bottom: -1px;
    right: -1px;
    border-bottom: 5px solid black;
    border-right: 5px solid black;
}

.btn:hover {
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
}

.btn:hover::before,
.btn:hover::after {
    width: 104%;
    height: 111%;
}
</style>
