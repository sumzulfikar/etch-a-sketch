const canvas = document.getElementById("drawing-area");
const context = canvas.getContext("2d");

context.lineJoin = 'miter';
context.lineCap = 'round';
context.lineWidth = 10;




//set heigh and width for movement

const { height, width } = canvas;



// context.moveTo(x, y);
// context.lineTo(x, y);
// context.stroke();
// Math.floor(Math.random() * height - 20);
//let y = Math.floor(Math.random() * width - 20);
// A coordinates object to store current drawing coordinates for x-axis and y-axis
let coordinates = {
    x: 20,
    y: 20

}

const drawLine = (axisX, axisY) => {
    context.beginPath();
    context.moveTo(coordinates.x, coordinates.y);
    context.lineTo(coordinates.x, coordinates.y);
    context.stroke();
    return;
}

function draw(event) {
    const movement = 10;
    if (event.key.includes("Arrow")) {
        event.preventDefault();
        console.log(event.key);
        if (event.key === "ArrowLeft") {
            coordinates.x -= movement;

        }
        else if (event.key === "ArrowRight") {
            coordinates.x += movement;
        }
        else if (event.key === "ArrowUp") {
            coordinates.y -= movement;
        }
        else if (event.key === "ArrowDown")
            coordinates.y += movement;

    }
    drawLine(coordinates.x, coordinates.y);
    return;
}


window.addEventListener("keydown", draw);