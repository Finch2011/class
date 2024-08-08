import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";

import Home from "./pages/home.jsx";
import NavigationBar from "./components/navigaion_bar.jsx";
import TaskProvider from './context/TaskContext.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskProvider>
      <Home />
      <NavigationBar />
    </TaskProvider>
  </React.StrictMode>
);
