

const clearBtn = document.getElementById("clear");
const shake = () => {

    const device = document.getElementById("etch-device");

    const canvas = document.getElementById("drawing-area");
    const context = canvas.getContext("2d");
    let tween = gsap.timeline()
        .to(device, { rotation: -5, duration: 0.2, ease: "elatic" })
        .to(device, { rotation: 5, duration: 0.2, ease: "elastic" })
        .to(device, { rotation: 0, duration: 0.2, ease: "elastic" });
    const { height, width } = canvas;

    tween.play();
    context.clearRect(0, 0, height, width);
    const x = Math.floor(Math.random(0));
    const y = Math.floor(Math.random(0));
    drawLine(x, y);
}

clearBtn.addEventListener("click", shake);