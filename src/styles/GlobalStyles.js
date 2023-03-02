import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  .Header{
    background-color: ${(props) => props.theme.headerColor}
  }
`;

export default GlobalStyle;
