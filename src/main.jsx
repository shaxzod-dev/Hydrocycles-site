import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MainContextContainer } from "./context/useMainContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainContextContainer>
      <App />
    </MainContextContainer>
  </React.StrictMode>
);
