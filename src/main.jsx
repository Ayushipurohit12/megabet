import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import 'react-responsive-modal/styles.css';
import { RecoilRoot } from "recoil";
//
if (import.meta.env.VITE_IGNORE_CONSOLE_WARNING == 1) {
  // console.log = console.warn = console.error = () => {};
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);
