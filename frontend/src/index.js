import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

const appDiv = document.getElementById("app");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, appDiv
);