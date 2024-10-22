import React from 'react';

function Task({ task, toggleTask, removeTask }) {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
      <h3>{task.text}</h3>
      <button onClick={() => removeTask(task.id)}>Remove</button>
    </div>
  );
}

export default Task;
