// Array to store tasks
var tasks = [];
// ADD - Add a new task
function addTask(title, description) {
    var newTask = {
        id: tasks.length + 1,
        title: title,
        description: description,
        status: "pending"
    };
    tasks.push(newTask);
    console.log("Task added successfully.");
}
// COMPLETE - Mark a task as completed by ID
function completeTask(id) {
    var task = tasks.find(function (t) { return t.id === id; });
    if (task) {
        task.status = "completed";
        console.log("Task with ID ".concat(id, " marked as completed."));
    }
    else {
        console.log("Task with ID ".concat(id, " not found."));
    }
}
// DELETE - Delete a task by ID
function deleteTask(id) {
    var index = tasks.findIndex(function (t) { return t.id === id; });
    if (index !== -1) {
        tasks.splice(index, 1);
        console.log("Task with ID ".concat(id, " deleted."));
    }
    else {
        console.log("Task with ID ".concat(id, " not found."));
    }
}
// LIST - List all tasks
function listTasks() {
    console.log("Task List:");
    tasks.forEach(function (task) {
        console.log("ID: ".concat(task.id, ", Title: ").concat(task.title, ", Status: ").concat(task.status));
    });
}
// ---------- Example Usage ----------
addTask("Complete Assignment", "Finish the math assignment before Monday.");
addTask("Read Book", "Read 20 pages of a novel.");
listTasks();
completeTask(1);
listTasks();
deleteTask(2);
listTasks();
