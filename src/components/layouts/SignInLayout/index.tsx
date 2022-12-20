import React from "react";
import mainIcon from "../../../assets/main-icon.svg";
import { Container, Content, Menu } from "./styles";

interface Props {
  sectionText: string;
  children: React.ReactNode;
  onSubmit: () => Promise<void>;
}

export default function SigInLayout(props: Props) {
  const { children, sectionText, onSubmit } = props;

  async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await onSubmit();
  }

  return (
    <Container>
      <Menu>
        <img src={mainIcon} alt="Logo do app" />
        <h1>food explorer</h1>
      </Menu>

      <Content onSubmit={handleOnSubmit}>
        <h2>{sectionText}</h2>

        {children}
      </Content>
    </Container>
  );
}
