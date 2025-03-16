document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskList = new TaskList();
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPrority = document.getElementById("new-task-priority");
  const taskUl = document.getElementById("tasks");
  const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());
  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskList.createNewTask(newTaskDescription.value);
    e.target.removeEventListener();
    renderApp();
  });
  taskUl.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      taskList.deleteTask(e.target.dataset.description);
      renderApp();
    }
  });
});
