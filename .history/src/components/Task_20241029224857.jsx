import React from 'react';

function Task({ task, toggleTask, removeTask }) {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <input className="checkmark" type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
      <h3>{task.text}</h3>
      <button className="delete-btn" onClick={() => removeTask(task.id)}>Remove</button>
    </div>
  );
}Z

export default Task;
