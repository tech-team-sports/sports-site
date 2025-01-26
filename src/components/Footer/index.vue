<template>
    <footer class="g-footer">
        <ul class="footer">
            <li><a href="#">サッカー</a></li>
            <li><a href="#">野球</a></li>
            <li><a href="#">バトミントン</a></li>
            <li><a href="#">お問い合わせ</a></li>
        </ul>
    </footer>
</template>

<script>
</script>

<style scoped>
.g-footer {
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer {
    list-style: none; 
    padding: 0; 
    margin: 0; 
    display: flex; 
}

.footer li {
    margin-right: 20px; 
}

.footer li:last-child {
    margin-right: 0; 
}
</style>
