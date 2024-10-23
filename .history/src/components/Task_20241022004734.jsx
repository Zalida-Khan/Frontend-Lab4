import React from 'react';

function Task({ task, toggleTask, removeTask }) {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <h3>{task.text}</h3>
      <input
        className="checkmark"
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <button className="delete-btn" onClick={() => removeTask(task.id)}>
        Remove
      </button>
    </div>
  );
}

export default Task;