import { Flex, HStack, Heading, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import mainIcon from "../../../assets/main-icon.svg";
import { useAuth } from "../../../context/Auth";
import { InputPrimary } from "../InputPrimary";
import { ButtonPrimary } from "../butons/ButtonPrimary";

export function Header() {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [search, setSearch] = useState("");
  const total = 0;

  return (
    <HStack spacing="32px" px="123px" py="28px">
      <Link to="/home">
        <HStack spacing="12px">
          <Image src={mainIcon} alt="Logo do app" />
          <Heading>food explorer</Heading>
        </HStack>
      </Link>

      <Flex flex={1}>
        <InputPrimary
          placeholder="Pesquisar pelo título"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Flex>

      <ButtonPrimary type="button">
        Meu pedido ({total})
      </ButtonPrimary>
    </HStack>
  );
}
