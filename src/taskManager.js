export class Task {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

export const tasks = [];

export function addTask(name, description) {
    const newTask = new Task(name, description);
    tasks.push(newTask);
}

export function getTasks() {
    return tasks;
}

export function removeFirstTask() {
    tasks.shift();
}