import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContext } from "./context/AuthContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContext>
);
