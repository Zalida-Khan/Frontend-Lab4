import React from 'react';

function Task({ task, toggleTask, removeTask, isDisabled }) {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <label/>
      <input className="checkmark" type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
      <h3>{task.text}</h3>
      <button className="delete-btn" onClick={() => removeTask(task.id)}>Remove</button>
    </div>
  );
}

export default Task;
