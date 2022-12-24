import { HStack, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IconInvoice } from "../../icons/IconInvoice";
import { IconMain } from "../../icons/IconMain";
import { ButtonPrimary } from "../butons/ButtonPrimary";
import { ButtonText } from "../butons/ButtonText";

export function HeaderAdmin() {
  const total = 0;

  return (
    <HStack
      spacing="32px"
      px="123px"
      py="24px"
      bgColor="#00111A"
      justifyContent="space-between"
    >
      <Link to="/home">
        <HStack spacing="12px">
          <IconMain boxSize="29.2px" />
          <Heading fontSize="25px">food explorer</Heading>
        </HStack>
      </Link>

      <HStack spacing="16px">
        <ButtonText color={"#E1E1E6"} fontSize="16px" fontWeight="400">
          Administrador
        </ButtonText>

        <ButtonPrimary leftIcon={<IconInvoice boxSize="20px" />}>
          Meu pedido ({total})
        </ButtonPrimary>
      </HStack>
    </HStack>
  );
}
