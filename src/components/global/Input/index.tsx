import React from "react";
import styled from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}
export function Input(props: Props) {
  const { children, ...rest } = props;
  return (
    <InputContainer>
      {children}
      <legend>{rest.title}</legend>
      <input {...rest} />
    </InputContainer>
  );
}

export const InputContainer = styled.fieldset`
  border: 0;
  width: 100%;

  legend {
    margin-bottom: 8px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;

    color: #c4c4cc;
  }

  > input {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 14px;
    gap: 14px;

    border: 1px solid #ffffff;
    border-radius: 5px;

    background: transparent;

    &:placeholder {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;

      color: #7c7c8a;
    }
  }

  > svg {
    margin-left: 16px;
    size: 24px;
  }
`;
