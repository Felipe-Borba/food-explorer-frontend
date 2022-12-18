import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles/global";
import { Routes } from "./routes";
import Context from "./context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Context>
      <GlobalStyle />
      <Routes />
    </Context>
  </React.StrictMode>
);
