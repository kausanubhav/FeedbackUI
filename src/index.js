import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from "./App";
console.log("we r here");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
)
