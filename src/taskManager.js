export class Task {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

export const taskList = [];

export function addTask(name, description) {
    const newTask = new Task(name, description);
    taskList.push(newTask);
}

export function getTasks() {
    return taskList;
}