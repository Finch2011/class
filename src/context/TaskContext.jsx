import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export default function TaskProvider({ children }) {
  const [toggle_new_task, set_toggle_new_task] = useState();
  const [update_task_list, set_update_task_list] = useState(false);

  return (
    <TaskContext.Provider
      value={{
        toggle_new_task,
        set_toggle_new_task,
        update_task_list,
        set_update_task_list
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
