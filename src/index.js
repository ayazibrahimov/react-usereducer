import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";

// REACT 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);

// REACT 17
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
