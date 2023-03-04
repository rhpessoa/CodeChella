import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
  }

  .Header{
    background-color: ${(props) => props.theme.headerColor};
  }
  .ListaMenu{
    background-color: ${(props) => props.theme.headerColor};
  }
`;

export default GlobalStyle;
