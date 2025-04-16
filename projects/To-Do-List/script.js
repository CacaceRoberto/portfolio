const addButton = document.getElementById("addTaskButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

window.onload = function () {
    const savedTask = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTask.forEach(task => addTaskToDom(task));
}

addButton.onclick = function () {
    const text = taskInput.value.trim();

    if (text !== "") {
        addTaskToDom(text);
        saveTask(text);
        taskInput.value = "";
    }
}

function addTaskToDom(task) {
    const li = document.createElement('li');
    li.innerHTML = `${text} <button onclick='this.parentElement.remove()'>✖</button>`;
    taskList.appendChild(li);

    li.querySelector(".deletedBtn").onclick = function () {
        li.remove();
        removeTask(task);
    }
}

function saveTask(text) {
    const savedTask = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTask.push(task);
    localStorage.setItem("tasks", JSON.stringify(savedTask));
}

function removeTask(text) {
    let savedTasks = JSON.parse(localStorage.getItem("tasks"));
    savedTasks = saveTasks.filter(task => task !== text);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
}
