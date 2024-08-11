import React, { createContext, useState } from "react";

export const InboxContext = createContext();

export default function TaskProvider({ children }) {
  const [task , setTask] = useState(false)
  return (
    <InboxContext.Provider value={{task , setTask }}>
      {children}
    </InboxContext.Provider>
  );
}
