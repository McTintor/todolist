import "./main.css";
import { addTask } from "./taskManager";
import { getTasks } from "./taskManager";
import { toggleCheckButton } from "./buttonLogic";
import { toggleImportantButton } from "./buttonLogic";
import { deleteTask } from "./taskManager";
import { addToImportantTasks } from "./taskManager";
import { getImportantTasks } from "./taskManager";

document.addEventListener('DOMContentLoaded', () => {
    let taskModal = document.getElementById('taskModal');
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
      const taskDate = document.getElementById('taskDate').value;
      const taskDesc = document.getElementById('taskDesc').value;      

      addTask(taskName, taskDate, taskDesc);
      displayTasks();

      taskForm.reset();
      taskModal.style.display = 'none';
    });


    function displayTasks() {
      taskList.innerHTML = '';

      const tasks = getTasks()
      tasks.forEach(task => {

        const datePart = task.date.split("T")[0];
        const dateComponents = datePart.split("-");
        const formattedDate = `${dateComponents[2]}-${dateComponents[1]}-${dateComponents[0]}`;
        const dateObject = new Date(task.date);
        const hours = dateObject.getHours().toString().padStart(2, '0');
        const minutes = dateObject.getMinutes().toString().padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`;
        const combinedDateTime = `${formattedDate} ${formattedTime}`;

        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `<h3>${task.name}</h3><p>${combinedDateTime}</p><p>${task.description}</p>`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '🗑️';
        deleteButton.className = 'delete-task';

        const importantButton = document.createElement('button');
        importantButton.textContent = '⭐';
        importantButton.className = 'mark-important';

        const completeButton = document.createElement('button');
        completeButton.textContent = '☑️';
        completeButton.className = 'complete-task';

        taskElement.appendChild(deleteButton);
        taskElement.appendChild(importantButton);
        taskElement.appendChild(completeButton);

        deleteButton.addEventListener('click', () => {
          deleteTask(task);
          displayTasks();
      });
      
      importantButton.addEventListener('click', () => {
          toggleImportantButton(task);
          // addToImportantTasks(task);
      });
      
      completeButton.addEventListener('click', () => {
          toggleCheckButton(task);
          //completeTask(task);
      });

        taskList.appendChild(taskElement);
      });
    };
});