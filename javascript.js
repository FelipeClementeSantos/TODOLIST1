document.addEventListener("DOMContentLoaded", function () {
  // Array to store tasks
  let tasks = [];

  // DOM elements
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  // Function to render tasks
  function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(function (task, index) {
      const li = document.createElement("li");
      li.innerHTML = `
          <span>${task}</span>
          <button onclick="removeTask(${index})">Remove</button>
        `;
      taskList.appendChild(li);
    });
  }

  // Function to add a new task
  window.addTask = function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      tasks.push(taskText);
      taskInput.value = "";
      renderTasks();
    }
  };

  // Function to remove a task
  window.removeTask = function (index) {
    tasks.splice(index, 1);
    renderTasks();
  };
});
