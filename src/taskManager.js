export class Task {
    constructor(name, date, description) {
        this.name = name;
        this.date = date;
        this.description = description;
    }
}

export const tasks = [];

export function addTask(name, date, description) {
    const newTask = new Task(name, date, description);
    tasks.push(newTask);
}

export function getTasks() {
    return tasks;
}

export function deleteTask(task) {
    const indexOfElementToRemove = tasks.indexOf(task);
    tasks.splice(indexOfElementToRemove, 1);
}

export const importantTasks = [];

export function addToImportantTasks(task) {
    importantTasks.push(task);
    console.log(importantTasks);
}

export function getImportantTasks() {
    return importantTasks;
}