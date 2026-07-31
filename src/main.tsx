import React from "react";
import ReactDOM from "react-dom/client";

import "./i18n";

import App from "./App";

import "./styles/tokens.css";
import "./index.css";
import "./styles/globals.css";

const rootElement =
  document.getElementById("root");

if (!rootElement) {
  throw new Error(
    'Root element with id "root" was not found.',
  );
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);