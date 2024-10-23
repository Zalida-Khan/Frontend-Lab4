import React from 'react';

function Task({ task, toggleTask, removeTask }) {
  return (
<div class="task">
  <input type="checkbox" class="checkmark" />
  <div class="task-content">
    <h3>Task Title</h3>
  </div>
  <button class="delete-btn">Delete</button>
</div>
  );
}

export default Task;