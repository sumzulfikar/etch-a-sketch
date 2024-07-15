gsap.registerPlugin(Draggable);

const canvas = document.getElementById("drawing-area");
const context = canvas.getContext("2d");
const verticalKnobElement = document.getElementById("horizontal-knob");
const horizontalKnobElement = document.getElementById("vertical-knob");

context.lineJoin = 'miter';
context.lineCap = 'round';
context.lineWidth = 10;




//set height and width for movement

const { height, width } = canvas;
// A coordinates object to store current drawing coordinates for x-axis and y-axis
let coordinates = {
    x: 10,
    y: 10,

}

context.beginPath();
context.moveTo(coordinates.x, coordinates.y);
context.stroke();



const drawLine = (axisX, axisY) => {
    context.beginPath();
    context.moveTo(coordinates.x, coordinates.y);
    coordinates.x += axisX;
    coordinates.y += axisY;
    context.lineTo(coordinates.x, coordinates.y);
    context.stroke();
    return;
}

function draw(event) {
    const movement = 10;
    let axisX = 0;
    let axisY = 0;
    if (event.key.includes("Arrow")) {
        event.preventDefault();
        console.log(event.key);
        if (event.key === "ArrowLeft") {
            axisX -= movement;
            horizontalKnobElement.style.transform = `rotate(${coordinates.x * Math.PI / 180}rad)`;


        }
        else if (event.key === "ArrowRight") {
            axisX += movement;
            horizontalKnobElement.style.transform = `rotate(${coordinates.x * Math.PI / 180}rad)`;

        }
        else if (event.key === "ArrowUp") {
            axisY -= movement;
            verticalKnobElement.style.transform = `rotate(${coordinates.y * Math.PI / 180}rad)`;
        }
        else if (event.key === "ArrowDown")
            axisY += movement;
        verticalKnobElement.style.transform = `rotate(${coordinates.y * Math.PI / 180}rad)`;

    }
    drawLine(axisX, axisY);
    return;
}

// using knob rotation to determine drawing direction

//variable to track last rotation value
let lastHorizontalRotation = 0;
let lastVerticalRotation = 0;
//handling and negative valies and values greater than 360 degrees
const normalizeRotation = (rotation) => {
    return ((rotation % 360) + 360) % 360;
}

const updateCanvasDraw = () => {
    const horizontalKnob = Draggable.get("#horizontal-knob");
    const verticalKnob = Draggable.get("#vertical-knob");
    const horizontalRotation = normalizeRotation(horizontalKnob.rotation);
    const verticalRotation = normalizeRotation(verticalKnob.rotation);
    let axisX = 0;
    let axisY = 0;

    if (horizontalRotation > lastHorizontalRotation) {
        axisX = 10;
    }
    else if (horizontalRotation < lastHorizontalRotation) {
        axisX = -10;
    }

    if (verticalRotation > lastVerticalRotation) {
        axisY = 10;
    }
    else if (verticalRotation < lastVerticalRotation) {
        axisY = -10;
    }

    lastHorizontalRotation = horizontalRotation;
    lastVerticalRotation = verticalRotation;

    drawLine(axisX, axisY);


}

Draggable.create("#horizontal-knob", {
    type: "rotation",
    inertia: true,
    dragResistance: 0.6,
    onDrag: updateCanvasDraw,
});


Draggable.create("#vertical-knob", {
    type: "rotation",
    inertia: true,
    dragResistance: 0.6,
    onDrag: updateCanvasDraw,
});


window.addEventListener("keydown", draw);




