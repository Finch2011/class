import React from "react";
import './tasks.css';

export default function Tasks({ id, labelFor, title, delete_task }) {

  const deleteTask = () => {
    delete_task(id); // Call the delete_task function with the task id
  };

  return (
    <div className="tasks_container">
      <input type="checkbox" id={id} />
      <label htmlFor={labelFor}> {title} </label>
      <button onClick={deleteTask}>
        <img src="/bin.png" alt="delete task" />
      </button>
    </div>
  );
}