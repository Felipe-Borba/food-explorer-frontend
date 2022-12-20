import React from "react";
import Footer from "../../global/Footer";
import { Header } from "../../global/Header";
import { Flex, Grid, GridItem } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

export function MainLayout(props: Props) {
  const { children } = props;

  return (
    <Flex flexDir="column" h="100vh" justifyContent="space-between">
      <Flex flexDir="column">
        <Header />

        {children}
      </Flex>

      <Footer />
    </Flex>
  );
}
