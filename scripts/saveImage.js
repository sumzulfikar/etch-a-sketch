
const download = () => {
    const image = document.getElementById("sketchImage");
    const savedSketch = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

    download.setAttribute("href", image)
}


