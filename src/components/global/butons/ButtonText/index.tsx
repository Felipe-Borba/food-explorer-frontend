import React from "react";
import styled from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export function ButtonText(props: Props) {
  const { children, ...rest } = props;

  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
}

const Container = styled.button`
  background: none;
  border: none;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  color: #ffffff;
`;
