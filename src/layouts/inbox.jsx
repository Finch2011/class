import React, { useEffect, useState, useRef } from "react";

import "@styles/inbox.scss";
import NewTask from "@components/new_task";
import axios from "axios";

export default function Inbox() {
  const [tasks, set_tasks] = useState([]);

  const [check_state, set_check_state] = useState(false);

  useEffect(() => {
    const fetch_tasks = async () => {
      try {
        const response = await axios.get(
          "https://66b2b22d7fba54a5b7ea4774.mockapi.io/api/todo"
        );
        set_tasks(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch_tasks();
  }, []);

  return (
    <div className="inbox_container">
      <label htmlFor="todo-1"> this is todo </label>
      <div className="tasks_wrapper">
        {tasks.length !== 0 ? (
          tasks.map((task) => (
            <div className="tasks_container" key={task.id}>
              <input type="checkbox" id={task.id} />
              <label htmlFor={task.id}> {task.title} </label>
            </div>
          ))
        ) : (
          <div className="empty_tasks_container">
            <img src="/check-icon.svg" alt="Add Some Tasks" />
            <h3>Add Some Tasks</h3>
            <span>Press 'T' to create a new task</span>
          </div>
        )}
      </div>
      <NewTask />
    </div>
  );
}
