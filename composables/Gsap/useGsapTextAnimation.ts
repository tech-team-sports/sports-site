import { onMounted } from "vue";
import { gsap } from "gsap";

export function  useGsapTextAnimation(targetClass:string, text: string) {
    onMounted(() => {
        const  paragraph = document.querySelector(`.${targetClass}`);
        if (!paragraph) return;

        paragraph.textContent = text;

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

//any 