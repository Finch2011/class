import React, { useContext, useEffect } from "react";
import "./navigation_bar.css";
import { TaskContext } from "../context/TaskContext";

export default function navigaion_bar() {

  const {toggle_new_task , set_toggle_new_task} = useContext(TaskContext)

  useEffect(()=>{
    console.log(toggle_new_task)
  } , [toggle_new_task])

  return (
    <nav>
      <div className="todos">
        <button>
          <img src="/todo.png" alt="toggle todo lists" />
        </button>
      </div>
      <div className="add">
        <button onClick={() => set_toggle_new_task(prev_state => prev_state = true)}>
          <img src="/add.png" alt="add to the list" />
        </button>
      </div>
      <div className="share">
        <button>
          <img src="/share.png" alt="share with friends" />
        </button>
      </div>
    </nav>
  );
}
