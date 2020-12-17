import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./CommonStyle";

const Theme = ({ children }) => (
  <ThemeProvider
    theme={{
      primaryFont: "Arial",
      primaryColor: "#666",
      mainColor: "red",
      ...theme,
    }}
  >
    {children}
  </ThemeProvider>
);
export default Theme;
