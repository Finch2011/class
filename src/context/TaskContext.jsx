import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export default function TaskProvider({ children }) {
  const [toggle_new_task, set_toggle_new_task] = useState();

  return (
    <TaskContext.Provider value={{ toggle_new_task, set_toggle_new_task }}>
      {children}
    </TaskContext.Provider>
  );
}
