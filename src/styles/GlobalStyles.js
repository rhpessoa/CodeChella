import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    color: ${(props) => props.theme.textColor};
    font-size:16px;
    background: ${(props) => props.theme.backgroundColor};
  }

  .Header{
    background-color: ${(props) => props.theme.headerColor};
  }
  .ListaMenu{
    background-color: ${(props) => props.theme.headerColor};
  }
  .Footer{
    background-color: ${(props) => props.theme.bottomColor};
  }
  .EventDate{
    background-color: ${(props) => props.theme.dateEventColor};
  }
  .BottomBanner{
    background-color: ${(props) => props.theme.bottomColor};
  }
`;

export default GlobalStyle;
