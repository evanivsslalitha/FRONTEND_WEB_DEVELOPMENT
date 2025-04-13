// Define Task interface
interface Task {
    id: number;
    title: string;
    description: string;
    status: "pending" | "completed";
  }
  
  // Array to store tasks
  let tasks: Task[] = [];
  
  // ADD - Add a new task
  function addTask(title: string, description: string): void {
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      description,
      status: "pending"
    };
    tasks.push(newTask);
    console.log("Task added successfully.");
  }
  
  // COMPLETE - Mark a task as completed by ID
  function completeTask(id: number): void {
    const task = tasks.find((t) => t.id === id);
    if (task) {
      task.status = "completed";
      console.log(`Task with ID ${id} marked as completed.`);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  }
  
  // DELETE - Delete a task by ID
  function deleteTask(id: number): void {
    const index = tasks.findIndex((t) => t.id === id);
    if (index !== -1) {
      tasks.splice(index, 1);
      console.log(`Task with ID ${id} deleted.`);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  }
  
  // LIST - List all tasks
  function listTasks(): void {
    console.log("Task List:");
    tasks.forEach((task) => {
      console.log(`ID: ${task.id}, Title: ${task.title}, Status: ${task.status}`);
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
  