import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  align-content: space-between;
  justify-content: center;

  display: grid;
  grid-template-rows: 11vh auto;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;

export const Main = styled.main`
  grid-area: content;
`;

export const Head = styled.div`
  grid-area: header;
`;

export const Foot = styled.div`
  grid-area: footer;
`;
