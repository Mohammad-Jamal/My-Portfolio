import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*, *::before, *::after, h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5, h6 {
  display: inline-block;
}

body {
  margin : 0;
  padding: 0;
  overflow-x : hidden;
  font-family: 'Source Sans Pro', sans-serif;
}


@media (width <= 768px) {
  html {
    font-size: 85%;
    transition: all 0.3s linear;
  }
}

@media (width <= 576px) {
  html {
    font-size: 73%;
    transition: all 0.3s linear;
  }
}
`

export default GlobalStyle;

