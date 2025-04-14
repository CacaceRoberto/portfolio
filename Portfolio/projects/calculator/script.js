// Recupera l'elemento input con id "display" (dove viene mostrato il contenuto della calcolatrice)
let display = document.getElementById("display");
let count = 0; // Variabile per tenere traccia del numero di caratteri nel display
display.value += '0';

function appendCharacter(char) {
    const operators = ['+', '-', '*', '/', '%']; // Array degli operatori validi

    // Controlla se il carattere da aggiungere è un operatore
    if (operators.includes(char)) {
        const lastChar = display.value.slice(-1); // Prende l'ultimo carattere attuale nel display

        // Se l'ultimo carattere è già un operatore, non ne aggiunge un altro
        if (operators.includes(lastChar)) {

            if (lastChar !== char) {
                display.value = display.value.slice(0, -1) + char;
            }
            return; // Interrompe la funzione per evitare due operatori consecutivi
        }
    }
    if(char === ',') {
        const valore = display.value;
        const ultimaParte = valore.split(/[\+\-\*\%\/]/).pop(); // prende l'ultimo valore dopo l'operatore 
    
        // Se il carattere è una virgola e non può essere aggiunta, esce dalla funzione
        if (ultimaParte.includes(',')) {
            return; // Interrompe la funzione per evitare doppie virgole nello stesso numero
        }

        if(ultimaParte === "") {
            display.value += '0,'; 
            count++; // Incrementa il contatore dei caratteri
            return;
        }
    }

    if(count === 0 && display.value === '0' && char >= '1' && char <= '9') {
        display.value = display.value.slice(0, -1) + char;
        count++; // Incrementa il contatore dei caratteri
        return;
    }

    // Aggiunge il carattere al contenuto attuale del display
    display.value += char;
}

// Pulisce completamente il display
function clearDisplay() {
    display.value = "0";
    count = 0; // Resetta il contatore dei caratteri
}

// Rimuove l'ultimo carattere inserito nel display
function del() {
    display.value = display.value.slice(0, -1); // Rimuove l’ultimo carattere della stringa
}

// Esegue il calcolo dell’espressione mostrata nel display
function calculate() {
    try {
        let expression = display.value.replace(/,/g, '.'); // Sostituisce le virgole con punti per il calcolo
        let result = eval(expression); // Valuta l’espressione matematica
        display.value = result.toString().replace('.', ','); // Mostra il risultato con la virgola al posto del punto
    } catch (e) {
        display.value = "Errore"; // Se c’è un errore nel calcolo, mostra "Errore"
    }
}
