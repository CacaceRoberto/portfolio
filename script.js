// Funzione per cambiare il tema
const body = document.body;
const toggle = document.getElementById("toggle");
const container = document.getElementById("container");
const myName = document.getElementById("myName");
const chooseOne = document.getElementById("chooseOne");
const chooseTwo = document.getElementById("chooseTwo");
const chooseThree = document.getElementById("chooseThree");
function changeMode() {
    if (toggle.checked) {
        body.style.backgroundColor = "white";  // Colore di sfondo chiaro
        container.style.color = "black"; // Colore del testo chiaro
        myName.style.color = "black"; // Colore del testo chiaro
        chooseOne.style.color = "black"; // Colore del testo chiaro
        chooseTwo.style.color = "black"; // Colore del testo chiaro
        chooseThree.style.color = "black"; // Colore del testo chiaro
    } else {
        // Scompare verso il basso
        body.style.backgroundColor = "black";  // Colore di sfondo scuro
        container.style.color = "white"; // Colore del testo scuro
        myName.style.color = "white"; // Colore del testo scuro
        chooseOne.style.color = "white"; // Colore del testo scuro
        chooseTwo.style.color = "white"; // Colore del testo scuro
        chooseThree.style.color = "white"; // Colore del testo scuro
    }
}
