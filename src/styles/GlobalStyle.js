import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Noto+Serif+KR:wght@200;300;400;500;600;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');

${reset}

*{
  box-sizing:border-box;
  }
body{
  font-size:14px;
  box-sizing: border-box;
  font-family: 'Noto Sans KR', 'Noto Serif KR', 'sans-serif', 'serif';
  }
  a{
  text-decoration:none;
  color:inherit;
  cursor: pointer;
  }
  ol, ul, li {
  list-style: none;
  }
  img {
  display: block;
  width: 100%;
  height: 100%;
  }
  input, button {
  background-color: transparent;
  }
  h1, h2, h3, h4, h5, h6 {
  font-family:'Maven Pro', sans-serif;
}
`;

export default GlobalStyle;
