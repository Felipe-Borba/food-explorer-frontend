import { Flex, HStack, Heading, IconButton, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/Auth";
import { InputPrimary } from "../InputPrimary";
import { ButtonPrimary } from "../butons/ButtonPrimary";
import { IconExit } from "../../icons/IconExit";
import { IconSearch } from "../../icons/IconSearch";
import { IconInvoice } from "../../icons/IconInvoice";
import { IconMain } from "../../icons/IconMain";
import { ButtonText } from "../butons/ButtonText";

export function Header() {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [search, setSearch] = useState("");
  const total = 0;

  return (
    <HStack spacing="32px" px="123px" py="24px" bgColor="#00111A">
      <Link to="/home">
        <HStack spacing="12px">
          <IconMain boxSize="29.2px" />
          <Heading fontSize="25px">food explorer</Heading>
        </HStack>
      </Link>

      <ButtonText color={"#E1E1E6"} fontSize="16px" fontWeight="400">
        Meus favoritos
      </ButtonText>

      <Flex flex={1}>
        <InputPrimary
          placeholder="Pesquisar pelo título"
          leftIcon={<IconSearch boxSize="19px" />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Flex>

      <ButtonPrimary leftIcon={<IconInvoice boxSize="20px" />}>
        Meu pedido ({total})
      </ButtonPrimary>

      <IconButton
        variant="ghost"
        aria-label="Exit"
        bgColor="transparent"
        _hover={{
          opacity: 0.5,
          bgColor: "#ffffffa2",
        }}
        icon={<IconExit fill="none" boxSize="22px" />}
      />
    </HStack>
  );
}
