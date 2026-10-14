type TaskStatus = "todo" | "in-progress" | "done";

interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

// Add a task without modifying the original array.
function addTask(tasks: Task[], title: string): Task[] {
  const nextId =
    tasks.length === 0
      ? 1
      : Math.max(...tasks.map((task) => task.id)) + 1;

  const newTask: Task = {
    id: nextId,
    title,
    status: "todo",
  };

  return [...tasks, newTask];
}

// Mark the matching task as done.
function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) =>
    task.id === id ? { ...task, status: "done" } : task
  );
}

// Return tasks with the requested status.
function filterByStatus(tasks: Task[], status: TaskStatus): Task[] {
  return tasks.filter((task) => task.status === status);
}

// Extra typed operation: delete a task by ID.
function deleteTask(tasks: Task[], id: number): Task[] {
  return tasks.filter((task) => task.id !== id);
}

// Extra typed operation: count tasks with a given status.
function countByStatus(tasks: Task[], status: TaskStatus): number {
  return tasks.filter((task) => task.status === status).length;
}

// Example usage
const initialTasks: Task[] = [
  { id: 1, title: "Learn TypeScript", status: "todo" },
  { id: 2, title: "Build the model", status: "in-progress" },
];

const withNewTask = addTask(initialTasks, "Test the model");
const completedTasks = completeTask(withNewTask, 1);
const todoTasks = filterByStatus(completedTasks, "todo");
const remainingTasks = deleteTask(completedTasks, 2);
const completedCount = countByStatus(remainingTasks, "done");

// Uncomment these examples to verify that TypeScript rejects invalid data:
// const missingStatus: Task = { id: 3, title: "Missing status" };
// const invalidId: Task = { id: "3", title: "Invalid ID", status: "todo" };
// filterByStatus(initialTasks, "finished");
