// Funzione per cambiare il tema
const body = document.body;
const toggle = document.getElementById("toggle");
const container = document.getElementById("container");
const myName = document.getElementById("myName");
const chooseButton = document.getElementById("Choose-button");
const logo = document.getElementById("logo");


function changeMode() {
    if (toggle.checked) {
        body.style.backgroundColor = "white";  // Colore di sfondo chiaro
        container.style.color = "black"; 
        myName.style.color = "black";
        chooseButton.style.color = "black"; 
        logo.src = "image/logoReverse.png"; 

    } else {
        body.style.backgroundColor = "black";  
        container.style.color = "white";
        myName.style.color = "white"; 
        chooseButton.style.color = "white";
        logo.src = "image/logo.png"; 
    }
}
