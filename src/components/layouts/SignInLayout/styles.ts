import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  align-items: center;
  justify-content: space-around;

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 42.4815px;
    line-height: 50px;

    color: #ffffff;
  }
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  gap: 32px;
  width: 40%;

  background: #001119;
  border-radius: 16px;

  h2 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 24px;
  }

  > a {
    display: flex;
    justify-content: center;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-dir: row;
  gap: 20px;
`;
