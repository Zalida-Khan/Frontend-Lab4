import React from 'react';

function Task({ task, toggleTask, removeTask }) {
  return (
<div>
  <input type="checkbox" class="checkmark" />
  <div class="task">
    <h3>Task Title</h3>
  </div>
  <button class="delete-btn">Delete</button>
</div>
  );
}

export default Task;