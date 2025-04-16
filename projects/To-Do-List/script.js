// Otteniamo gli elementi HTML: il bottone, l'input e la lista dei task
const addButton = document.getElementById("addTaskButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Funzione che viene eseguita quando la pagina viene caricata
window.onload = function () {
    // Recupera i task salvati nel localStorage, se esistono
    const savedTask = JSON.parse(localStorage.getItem("tasks")) || [];
    
    // Per ogni task salvato, lo aggiungiamo alla DOM
    savedTask.forEach(task => addTaskToDom(task));
}

// Aggiungi un nuovo task quando il bottone "Add Task" viene cliccato
addButton.onclick = function () {
    // Prendiamo il valore dell'input e rimuoviamo eventuali spazi inutili
    const text = taskInput.value.trim();

    // Se l'input non è vuoto, aggiungiamo il task
    if (text !== "") {
        // Aggiungi il task nella DOM
        addTaskToDom(text);
        // Salva il task nel localStorage
        saveTask(text);
        // Svuota l'input dopo aver aggiunto il task
        taskInput.value = "";
    }
}

// Funzione che aggiunge un task nella lista visibile sulla pagina
function addTaskToDom(task) {
    // Creiamo un nuovo elemento <li> per il task
    const li = document.createElement('li');
    // Impostiamo il contenuto HTML del <li>: il testo del task e il bottone per eliminarlo
    li.innerHTML = `${task} <button class='deletedBtn'>✖</button>`;
    
    // Aggiungiamo il nuovo <li> nella lista
    taskList.appendChild(li);

    // Se il bottone di eliminazione viene cliccato, rimuoviamo il task dalla DOM e dallo storage
    const deleteBtn = li.querySelector(".deletedBtn");
    deleteBtn.onclick = function () {
        li.remove(); // Rimuove il task dalla pagina
        removeTask(task); // Rimuove il task dal localStorage
    };
}

// Funzione che salva un nuovo task nel localStorage
function saveTask(text) {
    // Recupera i task già salvati nel localStorage, o un array vuoto se non ci sono
    const savedTask = JSON.parse(localStorage.getItem("tasks")) || [];
    // Aggiunge il nuovo task all'array
    savedTask.push(text);
    // Salva l'array aggiornato nel localStorage
    localStorage.setItem("tasks", JSON.stringify(savedTask));
}

// Funzione che rimuove un task dal localStorage
function removeTask(text) {
    // Recupera i task dal localStorage
    let savedTasks = JSON.parse(localStorage.getItem("tasks"));
    // Filtra i task, rimuovendo quello che corrisponde al task da eliminare
    savedTasks = savedTasks.filter(task => task !== text);
    // Salva l'array aggiornato nel localStorage
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
}
