import React from 'react';

function Task({ task, toggleTask, removeTask, isDisabled }) {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <label className="checkmark-label"/>
      <input className="checkmark" type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)}
      disabled={} />
      <h3>{task.text}</h3>
      <button className="delete-btn" onClick={() => removeTask(task.id)}>Remove</button>
    </div>
  );
}

export default Task;
