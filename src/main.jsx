import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Global
        styles={`
          body {
            background-color: #F3F2EF; /* Financial Times background color */
          }
        `}
      />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
