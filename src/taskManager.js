class Task {
    constructor(id, name, date, description, isImportant) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.description = description;
        this.isImportant = isImportant;
        this.isCompleted = false;
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

export function deleteTask(id) {
    const indexOfElementToRemove = tasks.findIndex(task => task.id === id);
    console.log(indexOfElementToRemove)
    tasks.splice(indexOfElementToRemove, 1);
}

export function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

export function isToday(datetimeLocalString) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  
    const dateToCheck = new Date(datetimeLocalString);
  
    dateToCheck.setHours(0, 0, 0, 0);
  
    const todayTimeStamp = today.getTime();
    const dateToCheckTimeStamp = dateToCheck.getTime();
  
    return todayTimeStamp === dateToCheckTimeStamp;
  }