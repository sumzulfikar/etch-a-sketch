
const savedSketch = canvas.toDataURL("image/jpeg", 1.0);

const link = document.getElementById("sketchImage");

link.href = savedSketch;
link.download = "sketch.jpeg";