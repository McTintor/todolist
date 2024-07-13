import { tasks } from "./taskManager";

        export function toggleCheckButton(task) {

            const taskList = document.querySelectorAll('.task');
            const indexOfTaskElement = tasks.indexOf(task);
            const targetTaskDOM = taskList[indexOfTaskElement]; 
            const targetTaskObject = tasks[indexOfTaskElement];
            const button = targetTaskDOM.querySelector('.complete-task');

    // if (targetTaskObject.isImportant === false) {
    //     button.innerHTML = "✅";
    //     button.classList.remove('toggledOn');
    //     targetTaskObject.isImportant = true;
    // } else {
    //     button.innerHTML = "☑️";
    //     button.classList.add('toggledOn');
    //     targetTaskObject.isImportant = false;
    // }
}

        export function toggleImportantButton(id) {


            for (let i = 0; i< tasks.length; i++) {
                if (tasks[i].id === id) {
                    const targetTaskDOM = document.querySelector('[data-id="' + tasks[i].id + '"]');; 
                    const targetTaskObject = tasks[i];
                    const button = targetTaskDOM.querySelector('.mark-important');
        
                        if (targetTaskObject.isImportant === false) {
                            button.innerHTML = "🌟";;
                            targetTaskObject.isImportant = true;
                            console.log('asd')
                        } else {
                            button.innerHTML = "⭐";
                            targetTaskObject.isImportant = false;
                        }
                }
               
            }
        }

        export function selectCategoryButton(activeButtonId) {
            const buttons = ['all', 'importantTasks'];
            
            buttons.forEach(buttonId => {
                if (buttonId === activeButtonId) {
                    document.getElementById(buttonId).classList.add('active');
                    document.getElementById(buttonId).classList.remove('inactive');
                } else {
                    document.getElementById(buttonId).classList.add('inactive');
                    document.getElementById(buttonId).classList.remove('active');
                }
            });
        }