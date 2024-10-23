import React from 'react';

function Task({ task, toggleTask, removeTask }) {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <div
        className={`checkmark ${task.completed ? 'checked' : ''}`}
        onClick={() => toggleTask(task.id)}
      >
        {task.completed && '✓'}
      </div>
      <h3>{task.text}</h3>
      <button className="delete-btn" onClick={() => removeTask(task.id)}>Remove</button>
    </div>
  );
}

export default Task;
