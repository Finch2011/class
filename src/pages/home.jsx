import React, { useContext, useEffect, useState } from "react";
import "./home.css";

import TodoSection from "../components/todo_section";
import {TaskContext}  from '../context/TaskContext';
import axios from "axios";

import NewTask from '../components/new_task';

export default function home() {

  const {toggle_new_task} = useContext(TaskContext);

  const [tasks_section , set_tasks_section] = useState([]);

  useEffect(()=>{
    axios.get('https://66b2b22d7fba54a5b7ea4774.mockapi.io/api/todo-section')
    .then(response => set_tasks_section(response.data))
  },[])

  const updateTask = () => {
    axios.put('https://66b2b22d7fba54a5b7ea4774.mockapi.io/api/todo/1' , {
      checked : null
    })
    .then(response => console.log(response.data))
  }

  return (
    <>
    {toggle_new_task && <NewTask/>}
        {tasks_section.map((task) => (
          <TodoSection
            key={task.id}
            title={task.title}
            subtitle={task.subtitle}
            color={task.color}
          />
        ))}
        <button onClick={updateTask}> update </button>
    </>
  );
}
