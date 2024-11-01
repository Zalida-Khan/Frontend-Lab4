import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="input-field" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="new task ..." />
      <button className="save-btn" type="submit">Save</button>
    </form>
  );
}

export default TaskForm;
