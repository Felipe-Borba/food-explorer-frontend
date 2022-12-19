import styled from "styled-components";


export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: 11vh auto;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    grid-area: content;
    height: 89vh;
    padding: 40px 120px 0px;
  }
`;


export const Head = styled.div`
  grid-area: header;
`;

export const Footer = styled.div`
  grid-area: footer;
`;