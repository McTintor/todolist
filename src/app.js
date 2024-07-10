import "./main.css";
import { Task } from "./taskManager";
import { tasks } from "./taskManager";
import { addTask } from "./taskManager";
import { getTasks } from "./taskManager";

document.addEventListener('DOMContentLoaded', () => {
    let taskModal = document.getElementById('taskModal'); // Changed to let
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    const closeModal = document.querySelector('.close');

    addTaskBtn.addEventListener('click', () => {
      taskModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
      taskModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
      if (event.target == taskModal) {
        taskModal.style.display = 'none';
      }
    });

    taskForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const taskName = document.getElementById('taskName').value;
      const taskDesc = document.getElementById('taskDesc').value;

      addTask(taskName, taskDesc);
      displayTasks();

      taskForm.reset();
      taskModal.style.display = 'none';
    });

    function displayTasks() {
      const tasks = getTasks();
      tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `<h3>${task.name}</h3><p>${task.description}</p>`;
        taskList.appendChild(taskElement);
      });
    }

    displayTasks();
});
