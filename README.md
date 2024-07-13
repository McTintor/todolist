#To Do App

Live version here: https://mctintor.github.io/todolist/

### `app.js`: Main Application Logic

- **Imports**: At the top, various functions and classes are imported from `./taskManager` and `./buttonLogic`. These imports bring in the necessary functionality for managing tasks and handling UI interactions.
- **Event Listeners**: Event listeners are set up to handle DOMContentLoaded, clicks on buttons, form submissions, and window clicks. These events trigger various actions such as displaying the modal, adding tasks, toggling task states, and filtering tasks.
- **Task Display Function**: The `displayTasks()` function retrieves all tasks, filters them based on selected criteria (e.g., importance, completion status), and dynamically creates HTML elements to display each task. It also sets up event listeners for deleting, marking as important, and completing tasks.

### `buttonLogic.js`: Button Interaction Logic

- **Toggle Functions**: `toggleCheckButton` and `toggleImportantButton` functions update the UI and the corresponding task object in the `tasks` array based on user interaction. They change the visual representation of a task's completion or importance and update the task's state accordingly.
- **Select Category Button**: The `selectCategoryButton` function adds or removes the 'active' class from category buttons, allowing users to filter tasks by category.

### `taskManager.js`: Task Management Logic

- **Task Class**: Defines the `Task` class with properties for ID, name, date, description, importance, and completion status.
- **Global Tasks Array**: An array named `tasks` holds instances of the `Task` class.
- **Task Management Functions**: Includes functions for adding a task (`addTask`), retrieving all tasks (`getTasks`), deleting a task (`deleteTask`), generating unique IDs (`generateUniqueId`), and checking if a date is today (`isToday`). These functions manipulate the global `tasks` array and interact with the DOM through the imported functions from `buttonLogic.js`.
- **Utility Functions**: `generateUniqueId` generates a unique identifier for each task, and `isToday` checks if a given date corresponds to the current day.

### How It All Works Together

1. **Initialization**: When the page loads, `app.js` sets up the initial state, including event listeners for various user interactions.
2. **Adding Tasks**: When a user submits the task form, `app.js` calls `addTask` from `taskManager.js`, passing the task details. This function creates a new `Task` instance and adds it to the `tasks` array.
3. **Displaying Tasks**: After adding a task or refreshing the view, `displayTasks` in `app.js` is called. It fetches all tasks, applies any filters based on the UI state, and dynamically generates HTML elements to display each task. It also attaches event listeners to these elements for further interactions like deletion, marking as important, or completing tasks.
4. **Interacting with Tasks**: User interactions with the UI, such as clicking on buttons to mark tasks as important or complete, call functions in `buttonLogic.js`. These functions update the UI and the corresponding task objects in the `tasks` array.
5. **Filtering Tasks**: Users can filter tasks by category (all, today, important, completed) by selecting the corresponding button. This triggers a call to `selectCategoryButton` in `buttonLogic.js`, which updates the UI to reflect the selected category.

### Summary

The application allows users to manage tasks by adding, viewing, and interacting with them. It uses a combination of JavaScript for logic, CSS for styling, and HTML for the structure of the web pages. The code is organized into separate modules for task management (`taskManager.js`), button logic (`buttonLogic.js`), and the main application logic (`app.js`), promoting modularity and maintainability.
