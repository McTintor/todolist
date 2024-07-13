import { tasks } from "./taskManager";

        export function toggleCheckButton(id) {


            for (let i = 0; i< tasks.length; i++) {
                if (tasks[i].id === id) {
                    const targetTaskDOM = document.querySelector('[data-id="' + tasks[i].id + '"]');; 
                    const targetTaskObject = tasks[i];
                    const button = targetTaskDOM.querySelector('.complete-task');
        
                        if (targetTaskObject.isCompleted === false) {
                            button.innerHTML = "✅";
                            targetTaskObject.isCompleted = true;
                            targetTaskObject.isImportant = false;
                        } else {
                            button.innerHTML = "☑️";
                            targetTaskObject.isCompleted = false;
                        }
                }
               
            }
        }


        export function toggleImportantButton(id) {


            for (let i = 0; i< tasks.length; i++) {
                if (tasks[i].id === id) {
                    const targetTaskDOM = document.querySelector('[data-id="' + tasks[i].id + '"]');; 
                    const targetTaskObject = tasks[i];
                    const button = targetTaskDOM.querySelector('.mark-important');
        
                        if (targetTaskObject.isImportant === false) {
                            button.innerHTML = "🌟";
                            targetTaskObject.isImportant = true;
                        } else {
                            button.innerHTML = "⭐";
                            targetTaskObject.isImportant = false;
                        }
                }
               
            }
        }

        export function selectCategoryButton(activeButtonId) {
            const buttons = ['all', 'today', 'importantTasks', 'completed'];
            
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