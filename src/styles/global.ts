import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto Slab', serif;
    -webkit-font-smoothing: antialiased;
  }
  
  body {
    background-color: #000A0F;
    color: #FFFFFF;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
 
  textarea:focus, input:focus{
    outline: none;
  }
`;
