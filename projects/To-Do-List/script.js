const addButton = document.getElementById("addTaskButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addButton.onclick = function () {
    const text = taskInput.value;

    if (text !== "") {
        const li = document.createElement("li");
        li.innerHTML = text + " <button onclick='this.parentElement.remove()'>✖</button>";
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
