import React from "react";
import ReactDOM from "react-dom/client"; // React 18 uses "react-dom/client"
import App from "./App";

// Find the root element
const rootElement = document.getElementById("root");

// Create a root and render the app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);