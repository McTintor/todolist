export class Task {
    constructor(id, name, date, description, isImportant) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.description = description;
        this.isImportant = isImportant;
    }
}

export const tasks = [];

export function addTask(id, name, date, description, isImportant) {
    const newTask = new Task(id, name, date, description, isImportant);
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

export function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}