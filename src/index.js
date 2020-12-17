import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";

ReactDOM.render(
  <>
    <GlobalStyle />
    <Theme>
      <Routes />
    </Theme>
  </>,
  document.getElementById("Dneuro")
);
