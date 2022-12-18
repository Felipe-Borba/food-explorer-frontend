import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <h1>hello</h1>
  </React.StrictMode>
);
