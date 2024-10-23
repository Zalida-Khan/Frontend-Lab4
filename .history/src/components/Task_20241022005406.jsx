import React from 'react';

function Task({ task, toggleTask, removeTask }) {
  return (
    <div>      <input className="checkmark" type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />

    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <h3>{task.text}</h3>
      <button className="delete-btn" onClick={() => removeTask(task.id)}>Remove</button>
      </div>
    </div>
  );
}

export default Task;