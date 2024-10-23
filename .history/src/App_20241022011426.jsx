import "./App.css";
import React, { useState } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Study For Exam", completed: false },
    { id: 2, text: "", completed: false },
    { id: 3, text: "Task 3", completed: false },
  ]);

  const addTask = (text) =>
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);

  const toggleTask = (id) =>
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

  const removeTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const remainingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className="app">
      <header>
        <h1>Daily Planner</h1>
      </header>
      <TaskForm addTask={addTask} />
      <h2>You have {remainingTasks} tasks remaining</h2>
      <div className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            removeTask={removeTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
