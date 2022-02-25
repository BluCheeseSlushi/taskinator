let formEl = document.querySelector("#task-form");
let tasksToDoEl = document.querySelector("#tasks-to-do"); 
console.log(tasksToDoEl);

let createTaskHandler = function() {
  let listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
  }

formEl.addEventListener("submit", createTaskHandler);