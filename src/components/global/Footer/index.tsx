import { HStack, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { IconMain } from "../../icons/IconMain";

export default function Footer() {
  return (
    <HStack
      spacing="32px"
      px="123px"
      py="23.74px"
      alignItems="flex-end"
      justifyContent="space-between"
      opacity={0.3}
      bgColor="#00111A"
    >
      <HStack spacing="12px">
        <IconMain boxSize="29.2px" />
        <Heading fontSize="25px">food explorer</Heading>
      </HStack>

      <Text>© 2022 - Todos os direitos reservados.</Text>
    </HStack>
  );
}
