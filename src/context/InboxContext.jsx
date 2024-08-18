import React, { createContext, useState } from "react";

import axios from "axios";

export const InboxContext = createContext();

export default function TaskProvider({ children }) {
  const [tasks, set_tasks] = useState([]);
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
  return (
    <InboxContext.Provider value={{tasks , set_tasks , fetch_tasks }}>
      {children}
    </InboxContext.Provider>
  );
}
