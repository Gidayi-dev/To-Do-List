function addTask() {
    const taskInput = document.getElementById("input-task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    const li = document.createElement("li");
    li.className = "task-item"; 

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.className = "done-btn"; 
    doneButton.addEventListener("click", function () {
        taskSpan.classList.toggle("completed"); 
    });


    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn"; 
    deleteButton.addEventListener("click", function () {
        li.remove(); 
    });

    li.appendChild(taskSpan);
    li.appendChild(doneButton);
    li.appendChild(deleteButton);

    const taskList = document.getElementById("task-list");
    taskList.appendChild(li);

    taskInput.value = "";
}