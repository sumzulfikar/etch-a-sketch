const tipIcon = document.getElementById("tipsIcon");
const tipPopup = document.getElementById("tipsPopup")
const closeX = document.getElementById("x");


const popupOpen = (event) => {
    event.preventDefault();
    if (tipPopup.style.display === "block") {
        tipPopup.style.display = "none";
    }

    else {
        tipPopup.style.display = "block";

    }
}

const popupClose = (e) => {
    e.preventDefault();

    tipPopup.style.display = "none";
}


tipIcon.addEventListener("click", popupOpen);
closeX.addEventListener("click", popupClose);

// const open = () => {

//     tipPopup.classList.toggle("show");

// }
// const cross = () => {

//     tipPopup.classList.remove("show");
//     return;
// }

// tipIcon.addEventListener("click", open);
// closeX.addEventListener("click", cross);