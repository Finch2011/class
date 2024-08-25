import React, { useEffect, useState, useRef, useContext } from "react";

import "@styles/inbox.scss";
import NewTask from "@components/new_task.jsx";
import axios from "axios";
import { InboxContext } from "@context/InboxContext";

export default function Inbox() {
  const { tasks, set_tasks, fetch_tasks , Bin } = useContext(InboxContext);
  const [check_state, set_check_state] = useState(false);
  useEffect(() => {
    fetch_tasks();
    Bin();
  }, []);
  
  const fetchUpdata = async (task) => {
    const updatedTasks = tasks.map((data) =>
      data.id === task.id ? { ...data, checked: !task.checked } : data
    );

    set_tasks(updatedTasks);

    try {
      const response = await axios.put(
        `https://66ab8e13636a4840d7cb29a3.mockapi.io/todo/${task.id}`,
        { checked: !task.checked }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  
  return (
    <div className="inbox_container">
      <div className="tasks_wrapper">
        {tasks.length !== 0 ? (
          tasks.map((task) => (
            <div className="style-div" key={task.id}>
              <input
                onChange={() => fetchUpdata(task)}
                className="input"
                type="checkbox"
                id={task.id}
                checked={task.checked}
              />
              <label htmlFor={task.id}> {task.title} </label>
              <br />
              <div className="tasks_container" key={task.id}>
                <p>{task.body}</p>
              </div>
              <img onClick={()=>{
                Bin(task)  
              }}
              className="img-bin" src="./bin.png" alt="" />
            </div>
          ))
        ) : (
          <div className="empty_tasks_container">
            <img src="/check-icon.svg" alt="Add Some Tasks" />
            <h3>Add Some Tasks</h3>
            <span>Press '0' to create a new task</span>
          </div>
        )}
      </div>
      <NewTask />
    </div>
  );
}
