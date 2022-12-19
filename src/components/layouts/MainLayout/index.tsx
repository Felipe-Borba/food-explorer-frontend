import React from "react";
import { Container, Footer, Head } from "./styles";

interface Props {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export function MainLayout(props: Props) {
  const { children, header = <></>, footer = <></> } = props;

  return (
    <Container>
      <Head>{header}</Head>

      <main>{children}</main>

      <Footer>{footer}</Footer>
    </Container>
  );
}
