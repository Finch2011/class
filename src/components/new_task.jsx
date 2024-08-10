import React, { useContext, useRef, useState } from "react";

import "./new_task.css";
import { TaskContext } from "../context/TaskContext";
import axios from "axios";

export default function new_task() {
  const { set_toggle_new_task , set_update_task_list } = useContext(TaskContext);

  const [task_title, set_task_title] = useState("");
  const [task_state, set_task_state] = useState("checkbox");

  const add_task = () => {
    try {
      axios
        .post("https://66b2b22d7fba54a5b7ea4774.mockapi.io/api/todo", {
          title: task_title,
          checked: task_state,
        })
        .then((response) => response.data);
      set_toggle_new_task((prev_state) => (prev_state = false));
      set_update_task_list((prev_state) => (prev_state = true))
    } catch (error) {
      console.log(error);
      set_toggle_new_task((prev_state) => (prev_state = true));
      set_update_task_list((prev_state) => (prev_state = false))
    }
  };

  return (
    <div className="pop_up">
      <input
        type="text"
        placeholder="Task Title..."
        value={task_title}
        onInput={(input) => set_task_title(input.target.value)}
      />
      <select
        value={task_state}
        onInput={(dropdown) => set_task_state(dropdown.target.value)}
      >
        <option value="checkbox"> checkbox </option>
        <option value="no-deadline"> unlimited time </option>
      </select>
      <button onClick={add_task}>Submit</button>
    </div>
  );
}
