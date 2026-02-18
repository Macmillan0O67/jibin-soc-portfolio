// PARTICLES
particlesJS.load('particles-js', 'particles.json');

// CURSOR GLOW
document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.cursor-glow');
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// SCROLL NEON LINE
gsap.registerPlugin(ScrollTrigger);

gsap.to(".neon-line", {
    width: "100%",
    scrollTrigger: {
        trigger: ".services",
        start: "top center",
        end: "bottom center",
        scrub: true
    }
});

// GLITCH PAGE TRANSITION
document.querySelector(".btn").addEventListener("click", () => {
    gsap.to(".hero", {
        opacity: 0,
        duration: 0.5,
        y: -100,
        ease: "power2.inOut"
    });
});
