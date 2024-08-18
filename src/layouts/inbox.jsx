import React, { useEffect, useState, useRef , useContext } from "react";

import "@styles/inbox.scss";
import NewTask from "@components/new_task.jsx";
import axios from "axios";
import { InboxContext } from "@context/InboxContext";

export default function Inbox() {
  const {tasks , set_tasks , fetch_tasks } = useContext(InboxContext)
  const [check_state, set_check_state] = useState(false);
  const input =useRef();
  useEffect(()=>{
    fetch_tasks();
  },[])
  
  // useEffect(()=>{ 
  //   if(input.current !== null){
  //     console.log(input.current.checked);
  //   } 
  // },[tasks])

  return (
    <div className="inbox_container">
      <div className="tasks_wrapper">
        {tasks.length !== 0 ? (
          tasks.map((task) => (
            <div className="style-div" key={task.id}>
              <input className="input" ref={input} type="checkbox" id={task.id} />
              <label htmlFor={task.id}> {task.title} </label>
              <br />
            <div className="tasks_container" key={task.id}>
              <p>{task.body}</p>
            </div>
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
