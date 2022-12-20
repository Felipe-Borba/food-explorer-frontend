import { Flex, HStack, Heading, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/Auth";
import { InputPrimary } from "../InputPrimary";
import { ButtonPrimary } from "../butons/ButtonPrimary";
import { IconExit } from "../../icons/IconExit";
import { IconSearch } from "../../icons/IconSearch";
import { IconInvoice } from "../../icons/IconInvoice";
import { IconMain } from "../../icons/IconMain";

export function Header() {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [search, setSearch] = useState("");
  const total = 0;

  return (
    <HStack spacing="32px" px="123px" py="28px">
      <Link to="/home">
        <HStack spacing="12px">
          <IconMain boxSize="29.2px" />
          <Heading>food explorer</Heading>
        </HStack>
      </Link>

      <Flex flex={1}>
        <InputPrimary
          placeholder="Pesquisar pelo título"
          leftIcon={<IconSearch boxSize="19px" />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Flex>

      <ButtonPrimary leftIcon={<IconInvoice boxSize="20px" />} type="button">
        Meu pedido ({total})
      </ButtonPrimary>

      <IconExit boxSize="22px" />
    </HStack>
  );
}
