function addTask() {
    const taskInput = document.getElementById("taskInput").value.trim();
    if (taskInput === "") return;

    const listItem = document.createElement("li");
    listItem.textContent = taskInput;
    listItem.addEventListener("click", () => listItem.remove());

    document.getElementById("taskList").appendChild(listItem);
    document.getElementById("taskInput").value = "";
}
function addTask() {
    const taskInput = document.getElementById("taskInput").value.trim();
    if (taskInput === "") return;

    const listItem = document.createElement("li");
    listItem.textContent = taskInput;

    // Create Edit Button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");
    editButton.onclick = () => editTask(listItem);

    // Create Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = () => listItem.remove();

    // Append Buttons to Task Item
    const buttonContainer = document.createElement("span");
    buttonContainer.classList.add("task-buttons");
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);

    listItem.appendChild(buttonContainer);
    document.getElementById("taskList").appendChild(listItem);
    document.getElementById("taskInput").value = "";
}

function editTask(taskItem) {
    const newTask = prompt("Edit your task:", taskItem.textContent.replace("EditDelete", "").trim());
    if (newTask !== null && newTask.trim() !== "") {
        taskItem.firstChild.textContent = newTask;
    }
}
