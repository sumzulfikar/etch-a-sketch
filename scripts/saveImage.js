
document.addEventListener('DOMContentLoaded', () => {

    const image = document.getElementById("sketchImage");

    const download = () => {

        const canvas = document.getElementById("drawing-area");
        const savedSketch = canvas.toDataURL("image/png");
        // .replace("image/png", "image/octet-stream");

        image.setAttribute("href", savedSketch);
        image.setAttribute("download", "mysketch.png");



    }

    image.addEventListener("click", download);


});

