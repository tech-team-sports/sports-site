<template>
    <div class="data-container">
        <NuxtLink to="/Baseball/baseTOP">
            <span class="btn">TOPへ戻る</span>
        </NuxtLink>
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
    justify-content: center;
    align-items: center;
    margin: 80px;
}

.btn {
    cursor: pointer;
    position: relative;
    padding: 12px 30px;
    background: linear-gradient(45deg, #6e7fff, #a58be9);
    font-size: 22px;
    font-weight: 600;
    color: white;
    border-radius: 50px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: inline-block;
}

.btn::after,
.btn::before {
    content: " ";
    width: 10px;
    height: 10px;
    position: absolute;
    transition: all 0.3s ease;
}

.btn::after {
    top: -1px;
    left: -1px;
    border-top: 5px solid rgba(255, 255, 255, 0.7);
    border-left: 5px solid rgba(255, 255, 255, 0.7);
}

.btn::before {
    bottom: -1px;
    right: -1px;
    border-bottom: 5px solid rgba(255, 255, 255, 0.7);
    border-right: 5px solid rgba(255, 255, 255, 0.7);
}

.btn:hover {
    background: linear-gradient(45deg, #ff7e5f, #feb47b);
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.btn:hover::before,
.btn:hover::after {
    width: 20px;
    height: 20px;
}

.btn:active {
    transform: scale(0.98);
}
</style>
