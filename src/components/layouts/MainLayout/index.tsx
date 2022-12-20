import React from "react";
import Footer from "../../global/Footer";
import { Header } from "../../global/Header";
import { Container, Foot, Head, Main } from "./styles";

interface Props {
  children: React.ReactNode;
}

export function MainLayout(props: Props) {
  const { children } = props;

  return (
    <Container>
      <Head>
        <Header />
      </Head>
      <Main>{children}</Main>
      <Foot>
        <Footer />
      </Foot>
    </Container>
  );
}
