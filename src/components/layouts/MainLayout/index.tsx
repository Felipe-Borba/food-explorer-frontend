import React, { ReactNode } from "react";
import Footer from "../../global/Footer";
import { Header } from "../../global/Header";
import { Flex, Grid, GridItem } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  header?: ReactNode;
}

export function MainLayout(props: Props) {
  const { children, header = <Header /> } = props;

  return (
    <Flex flexDir="column" h="100vh" justifyContent="space-between">
      <Flex flexDir="column">
        {header}

        <Flex bgColor="#000A0F">{children}</Flex>
      </Flex>

      <Footer />
    </Flex>
  );
}
