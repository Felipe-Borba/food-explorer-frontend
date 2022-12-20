import "@fontsource/poppins";
import "@fontsource/roboto";

import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import Context from "./context";
import { Routes } from "./routes";
import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Context>
        <Routes />
      </Context>
    </ChakraProvider>
  </React.StrictMode>
);
