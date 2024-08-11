import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./pages/home.jsx";
import TaskProvider from "@context/InboxContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <TaskProvider>
    <Home />
     </TaskProvider>
  </React.StrictMode>
);
