gsap.registerPlugin(Draggable);

const canvas = document.getElementById("drawing-area");
const context = canvas.getContext("2d");
const verticalKnobElement = document.getElementById("vertical-knob");
const horizontalKnobElement = document.getElementById("horizontal-knob");

//set height and width for movement
const { height, width } = canvas;
// A coordinates object to store current drawing coordinates for x-axis and y-axis
let coordinates = {
    x: 10,
    y: 10,
}

// resize canvas 
const displayCanvasResize = () => {
    const displayRatio = window.devicePixelRatio;
    const displayWidth = Math.round(canvas.width * displayRatio);
    const displayHeight = Math.round(canvas.height * displayRatio);
    const needResize = canvas.width !== displayWidth ||
        canvas.height !== displayHeight;

    if (needResize) {
        canvas.height = displayHeight;
        canvas.width = displayWidth;
        context.scale(displayRatio, displayRatio);

    }
    return needResize;
}


displayCanvasResize();


//Using keyboard arrows to drawlines

function draw(event) {
    const movement = 1;
    let axisX = 0;
    let axisY = 0;

    if (event.key.includes("Arrow")) {
        event.preventDefault();

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

        else if (event.key === "ArrowDown") {
            axisY += movement;
            verticalKnobElement.style.transform = `rotate(${coordinates.y * Math.PI / 180}rad)`;
        }
    }

    drawLine(axisX, axisY);

    return;


}


//variable to track last rotation value
let lastHorizontalRotation = 0;
let lastVerticalRotation = 0;
//handling and negative valies and values greater than 360 degrees
const normalizeRotation = (rotation) => {
    return ((rotation % 360) + 360) % 360;
}
// using knob rotation to determine drawing direction
const updateCanvasDraw = (event) => {
    event.preventDefault();
    const horizontalKnob = Draggable.get("#horizontal-knob");
    const verticalKnob = Draggable.get("#vertical-knob");
    const horizontalRotation = normalizeRotation(horizontalKnob.rotation);
    const verticalRotation = normalizeRotation(verticalKnob.rotation);
    let axisX = 0;
    let axisY = 0;

    if (horizontalRotation > lastHorizontalRotation) {
        axisX = 1;
    }
    else if (horizontalRotation < lastHorizontalRotation) {
        axisX = -1;
    }

    if (verticalRotation > lastVerticalRotation) {
        axisY = -1;
    }
    else if (verticalRotation < lastVerticalRotation) {
        axisY = 1;
    }

    lastHorizontalRotation = horizontalRotation;
    lastVerticalRotation = verticalRotation;

    drawLine(axisX, axisY);


}


const drawLine = (axisX, axisY) => {
    coordinates.x = Math.max(0, Math.min(canvas.width - 1, coordinates.x + axisX));
    coordinates.y = Math.max(0, Math.min(canvas.height - 1, coordinates.y + axisY));
    // context.lineJoin = 'round';
    context.lineCap = 'round';
    context.lineWidth = 1;
    context.beginPath();

    context.moveTo(coordinates.x, coordinates.y);
    context.lineTo(coordinates.x, coordinates.y);
    context.stroke();
    return;
}





Draggable.create("#horizontal-knob", {
    type: "rotation",
    inertia: true,
    dragResistance: 0.9,
    onDrag: updateCanvasDraw,
});


Draggable.create("#vertical-knob", {
    type: "rotation",
    inertia: true,
    dragResistance: 0.9,
    onDrag: updateCanvasDraw,
});



window.addEventListener("keydown", draw);




