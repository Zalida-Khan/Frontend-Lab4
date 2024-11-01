import "./App.css";
import React, { useState } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Study For Exam", completed: false },
    { id: 2, text: "Make Lunch", completed: false },
    { id: 3, text: "Clean Up", completed: false },
  ]);


  const [filter, setFilter] = useState("All");

  const addTask = (text) =>
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);

  const toggleTask = (id) =>
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

  const removeTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const handleFilterChange = (newFilter) => setFilter(newFilter);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  }); 

  const remainingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className="app">
      <header>
        <h1>Daily Planner</h1>
      </header>
      <TaskForm addTask={addTask} />
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange("All")}>All</button>
        <button onClick={() => handleFilterChange("Pending")}>Pending</button>
        <button onClick={() => handleFilterChange("Completed")}>Completed</button>
      </div>
      <h2>
        You have {remainingTasks}{" "}
        {remainingTasks === 1 ? "task" : "tasks"} remaining
      </h2>
      <div className="task-list">
      {filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            removeTask={removeTask}
            isDisabled={task.completed}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
