import { onMounted } from "vue";
import { gsap } from "gsap";
import type { CSSProperties } from "vue";

export function useGsapTextAnimation(targetClass: string, text: string, ) {
    onMounted(() => {
        const paragraph = document.querySelector(`.${targetClass}`) as HTMLElement | null;
        if (!paragraph) return;

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
