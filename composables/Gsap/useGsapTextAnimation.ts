import { onMounted } from "vue";
import { gsap } from "gsap";

export function  useGsapTextAnimation(targetClass:any, text: any) {
    onMounted(() => {
        const  paragraph = document.querySelector(`.${targetClass}`);
        if (!paragraph) return;

        // 直接渡されたテキストを適用
        paragraph.textContent = text;

        // テキストを1文字ずつ <span> で囲む
        const newTextContent = [...text]
            .map((char) => `<span>${char}</span>`)
            .join("");
        paragraph.innerHTML = newTextContent;

        gsap.fromTo(
            `.${targetClass} span`,
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, stagger: 0.2, repeat: -1, repeatDelay: 1.2 }
        );
    });
}
