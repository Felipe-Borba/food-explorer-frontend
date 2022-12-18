import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 32px;
  gap: 8px;

  width: 100%;

  background: #92000e;
  border-radius: 5px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
