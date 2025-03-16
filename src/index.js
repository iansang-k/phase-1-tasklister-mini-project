let tasks = [];
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    addTask();
  });
});

function addTask() {
  const taskInput = document.getElementById("new-task-description");
  const taskDescription = taskInput.value;

  if (taskDescription.trim() === "") {
    alert("Task description cannot be empty!");
    return;
  }

  tasks.push(taskDescription);
  updateTaskList();
  taskInput.value = "";
}

function updateTaskList() {
  const taskList = document.getElementById("tasks");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X"; 
    deleteButton.addEventListener("click", function () {
      deleteTask(index);
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  updateTaskList();
}
