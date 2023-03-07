import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    color: white;
    font-size:16px;
  }

  .Header{
    background-color: ${(props) => props.theme.headerColor};
  }
  .ListaMenu{
    background-color: ${(props) => props.theme.headerColor};
  }
  .Footer{
    background-color: ${(props) => props.theme.headerColor};
  }
`;

export default GlobalStyle;
