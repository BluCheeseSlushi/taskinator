// let buttonEl = document.querySelector("#save-task");
// let tasksToDoEl = document.querySelector("#tasks-to-do");

// buttonEl.addEventListener("click", function() {
//   let listItemEl = document.createElement("li");
//   listItemEl.className = "task-item";
//   listItemEl.textContent = "This is a new task.";
//   tasksToDoEl.appendChild(listItemEl);
// });

const buttonEl = document.querySelector("#save-task"); 
const tasksToDoEl = document.querySelector("#tasks-to-do"); 

let createTaskHandler = function() {
  let listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
  }; 

buttonEl.addEventListener("click", createTaskHandler);