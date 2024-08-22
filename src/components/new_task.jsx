import React, { useContext, useEffect, useRef, useState } from "react";

import "@styles/new_task.scss";
import axios from "axios";
import { InboxContext } from "@context/InboxContext";

export default function NewTask() {
  const [isMesssageOpen, setIsMessageOpen] = useState(false);
  const [task_title, set_task_title] = useState("");
  const [task_body, set_task_body] = useState("");
  const {task , setTask , fetch_tasks } = useContext(InboxContext)
  const boxMessage = useRef();
  const add_task = async () => {
    if (task_title !== "" && task_body !== "") {
      try {
        const response = await axios.post(
          "https://66ab8e13636a4840d7cb29a3.mockapi.io/todo",
          {
            title: task_title,
            body: task_body,
            checked : false
          }
        );
        fetch_tasks()
        console.log(response.data);
        setIsMessageOpen(false)
      } catch (error) {
        console.log(error);
      }
    }
  };
  
  
  
  useEffect(()=>{
    const handelkey = (event) =>{

      if(event.key === "0"){
        setIsMessageOpen(prevstate => !prevstate)
    }
  }
  document.addEventListener('keydown' , handelkey)
  return () =>{
    document.removeEventListener('keydown' , handelkey)
  }
 }, [])
  return (
    <div className="new_task_container">
      {isMesssageOpen && (
        <div className="popup_wrapper">
          <div className="popup_container">
            <button
              onClick={() => setIsMessageOpen(false)}
              className="close_task"
            >
              <img src="/close.png" alt="close task icon" />
            </button>
            <div className="popup_box" ref={boxMessage}>
              <input
                type="text"
                placeholder="To-do name"
                value={task_title}
                onInput={(title) => set_task_title(title.target.value)}
              />
              <div className="line"></div>
              <textarea
                className="text_box"
                placeholder="Add a discription"
                value={task_body}
                onInput={(body) => set_task_body(body.target.value)}
              ></textarea>
              <div className="row">
                <button className="schedule">
                  <img src="/calender.png" alt="schedule calender ico" />
                  Schedule
                </button>
                <ul>
                  <li>
                    <img src="/label.png" alt="label icon" />
                  </li>
                  <li>
                    <img src="/pin.png" alt="pin icon" />
                  </li>
                </ul>
              </div>
            </div>
            <button onClick={add_task} className="add_task">
              Add To-Do
            </button>
          </div>
        </div>
      )}
      <button className="toggle_task" onClick={() => setIsMessageOpen(true)}>
        <img src="/add.png" alt="add task icon" />
      </button>
    </div>
  );
}
