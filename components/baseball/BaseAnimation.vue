<template>
    <div class="page-container">
        <!-- 野球サイトへようこそのアニメーション部分 -->
        <div id="baseball-welcome">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200">
                <text
                    id="baseball-welcome-1"
                    class="stroke-fill"
                    x="20"
                    y="50"
                    font-size="40"
                    font-family="sans-serif"
                >
                    野球
                </text>
                <text
                    id="baseball-welcome-2"
                    class="stroke-fill"
                    x="180"
                    y="50"
                    font-size="40"
                    font-family="sans-serif"
                >
                    サイトへ
                </text>
                <text
                    id="baseball-welcome-3"
                    class="stroke-fill"
                    x="320"
                    y="50"
                    font-size="40"
                    font-family="sans-serif"
                >
                    ようこそ
                </text>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        // アニメーションが動作するタイミングでVueで制御
        this.initAnimations();
    },
    methods: {
        initAnimations() {
            // 初期のアニメーション開始
            setTimeout(() => {
                document.getElementById("baseball-welcome-1").style.animation =
                    "dash 2s linear normal forwards";
                document.getElementById("baseball-welcome-2").style.animation =
                    "dash 2s 2s linear normal forwards";
                document.getElementById("baseball-welcome-3").style.animation =
                    "dash 2s 4s linear normal forwards";
            }, 200); // 初期化後の遅延
        },
    },
};
</script>

<style scoped lang="scss">
$primaryFontColor: #efefef;
$backgroundImage: url("/assets/img/baseball/base.jpg"); /* 指定された画像のパスを使用 */

.page-container {
    position: relative;
    height: 100vh; /* 画面の高さに合わせる */
    width: 100%;
    overflow: hidden;
}

#baseball-welcome {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: $backgroundImage;
    background-size: cover; /* 画像がコンテナに合わせて表示される */
    background-position: center; /* 画像を中央に配置 */
    background-repeat: no-repeat; /* 画像が繰り返されないように設定 */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center; /* テキストを中央に配置 */
}

#baseball-welcome svg {
    width: 70%; /* SVGを画面に合わせて縮小 */
    height: auto;
}

.stroke-fill {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    stroke: $primaryFontColor;
}

@keyframes dash {
    0% {
        stroke-dashoffset: 1000;
    }
    100% {
        stroke-dashoffset: 0;
    }
}
</style>
