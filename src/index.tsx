import React from "react";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./i18n/config";
import "@fontsource/inter";
import * as ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
