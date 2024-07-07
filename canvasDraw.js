const canvas = document.getElementById("drawing-area");
const context = canvas.getContext("2d");

context.lineJoin = 'miter';
context.lineCap = 'round';
context.lineWidth = 10;




//set heigh and width for movement

const { height, width } = canvas;

let x = Math.floor(Math.random() * height);
let y = Math.floor(Math.random() * width);
context.beginPath();
// context.moveTo(x, y);
// context.lineTo(x, y);
// context.stroke();

window.addEventListener("keydown", (event) => {
    const movement = 10;
    if (event.key.includes("Arrow")) {
        event.preventDefault();
        console.log(event.key);
        if (event.key === "ArrowLeft") {
            x -= movement;

        }
        else if (event.key === "ArrowRight") {
            x += movement;
        }
        else if (event.key === "ArrowUp") {
            y -= movement;
        }
        else if (event.key === "ArrowDown")
            y += movement;

    }

    context.moveTo(x, y);
    context.lineTo(x, y);
    context.stroke();

    return;
})