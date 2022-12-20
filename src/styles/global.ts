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

  h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 140%;

    color: #E1E1E6;
  }

  h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 24px;

    color: #FFFFFF;
  }

  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 25.1109px;
    line-height: 29px;

    color: #FFFFFF;
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
    caret-color: white;
  }
`;
