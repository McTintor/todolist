import { tasks } from "./taskManager";

        export function toggleCheckButton(task) {

    const taskList = document.querySelectorAll('.task');
    const indexOfTaskElement = tasks.indexOf(task);
    const targetTask = taskList[indexOfTaskElement]; 
    const button = targetTask.querySelector('.complete-task');

    if (button.classList.contains('toggledOn')) {
        button.innerHTML = "☑️";
        button.classList.remove('toggledOn');
    } else {
        button.innerHTML = "✅";
        button.classList.add('toggledOn');
    }
}

        export function toggleImportantButton(task) {

            const taskList = document.querySelectorAll('.task');
            const indexOfTaskElement = tasks.indexOf(task);
            const targetTask = taskList[indexOfTaskElement]; 
            const button = targetTask.querySelector('.mark-important');

            if (button.classList.contains('toggledOn')) {
                button.innerHTML = "⭐";
                button.classList.remove('toggledOn');
            } else {
                button.innerHTML = "🌟";
                button.classList.add('toggledOn');
            }
        }