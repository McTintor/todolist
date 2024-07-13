import "./main.css";
import { addTask } from "./taskManager";
import { getTasks } from "./taskManager";
import { toggleCheckButton } from "./buttonLogic";
import { toggleImportantButton } from "./buttonLogic";
import { deleteTask } from "./taskManager";
import { addToImportantTasks } from "./taskManager";
import { getImportantTasks } from "./taskManager";
import { generateUniqueId } from "./taskManager";
import { selectCategoryButton } from "./buttonLogic";

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
      const taskImportant = document.getElementById('taskImportant');
      let taskId = generateUniqueId();
      let taskImportance = taskImportant.checked;  

      addTask(taskId, taskName, taskDate, taskDesc, taskImportance);
      displayTasks();
      

      taskForm.reset();
      taskModal.style.display = 'none';
    });

    const allTasksButton = document.getElementById('all');
    const importantTasksButton = document.getElementById('importantTasks');

    selectCategoryButton(allTasksButton.id);

    allTasksButton.addEventListener('click', () => {
      selectCategoryButton(allTasksButton.id);
      displayTasks();
    });
    importantTasksButton.addEventListener('click', () => {
      selectCategoryButton(importantTasksButton.id);
      displayTasks();
    });


    function displayTasks() {
      taskList.innerHTML = '';

      let tasks = getTasks();

      if (importantTasksButton.classList.contains('active')) {
        tasks = tasks.filter(task => task.isImportant === true);
      };
      
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
        taskElement.dataset.id = task.id;
        taskElement.className = 'task';
        taskElement.innerHTML = `<h3>${task.name}</h3><p>${combinedDateTime}</p><p>${task.description}</p>`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '🗑️';
        deleteButton.className = 'delete-task';

        const importantButton = document.createElement('button');
        importantButton.className = 'mark-important';
        if (task.isImportant === true) {
          importantButton.textContent = '🌟';
        } else {
          importantButton.textContent = '⭐';
        };
        

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
          toggleImportantButton(task.id);
      });
      
      completeButton.addEventListener('click', () => {
          // toggleCheckButton(task);
      });

        taskList.appendChild(taskElement);
      });
    };
});