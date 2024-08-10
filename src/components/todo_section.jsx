import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./todo_section.css";
import Tasks from "./tasks";
import { TaskContext } from "../context/TaskContext";

export default function TodoSection({ title, subtitle, color }) {
  const [tasks, set_tasks] = useState([]);

  const { toggle_new_task, update_task_list } = useContext(TaskContext);

  const fetch_tasks = async () => {
    const response = await axios.get(
      "https://66b2b22d7fba54a5b7ea4774.mockapi.io/api/todo"
    );
    const allTasks = response.data;
    let filteredTasks = [];
    if (title === "Done") {
      filteredTasks = allTasks.filter((task) => task.checked === false);
    } else if (title === "Todo") {
      filteredTasks = allTasks.filter((task) => task.checked === "checkbox");
    } else if (title === "Tasks") {
      filteredTasks = allTasks.filter((task) => task.checked === "no-deadline");
    }
    set_tasks(filteredTasks);
  };

  if(update_task_list){
    fetch_tasks();
  }

  useEffect(() => {
    fetch_tasks();
  }, []);

  const delete_task = (id) => {
    set_tasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    axios
      .delete(`https://66b2b22d7fba54a5b7ea4774.mockapi.io/api/todo/${id}`)
      .then(() => {
        console.log(`Task with id ${id} deleted.`);
      })
      .catch((error) => {
        console.error("There was an error deleting the task!", error);
      });
  };

  return (
    <div className="todo-container" style={{ backgroundColor: color }}>
      <h3>
        {title} <span>| {subtitle}</span>
      </h3>
      {tasks.map((task) => (
        <Tasks
          key={task.id}
          id={task.id}
          labelFor={task.id}
          title={task.title}
          delete_task={delete_task}
        />
      ))}
    </div>
  );
}
