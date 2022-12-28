import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Footer from "../../global/Footer";
import { Header } from "../../global/Header";

interface Props {
  children: React.ReactNode;
  header?: ReactNode;
}

export function MainLayout(props: Props) {
  const { children, header = <Header /> } = props;

  return (
    <Flex flexDir="column" h="100vh">
      {header}

      <Flex bgColor="#000A0F" flex={1}>
        {children}
      </Flex>

      <Footer />
    </Flex>
  );
}
