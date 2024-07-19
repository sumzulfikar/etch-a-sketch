document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(RoughEase)
    const device = document.getElementById("#etch-device");
    shake = () => {
        TweenLite.fromTo(device, 0.3, { x: -1 }, { x: 1, ease: RoughEase.ease.config({ strength: 8, points: 20, template: Linear.easeNone, randomize: false }), clearProps: "x" })




    }
});


