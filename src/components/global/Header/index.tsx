import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import mainIcon from "../../../assets/main-icon.svg";
import { useAuth } from "../../../context/Auth";
import { Input } from "../Input";
import { ButtonPrimary } from "../butons/ButtonPrimary";

export function Header() {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [search, setSearch] = useState("");
  const total = 0;

  return (
    <Container>
      <Link to="/home">
        <img src={mainIcon} alt="Logo do app" />
        <h3>food explorer</h3>
      </Link>

      <Input
        placeholder="Pesquisar pelo título"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ButtonPrimary type="button">Meu pedido ({total})</ButtonPrimary>
    </Container>
  );
}

const Container = styled.header`
  width: 100vw;
  display: flex;
  flex-dir: row;
  align-items: center;
  justify-content: center;

  padding: 24px 123px;
  gap: 32px;

  > a {
    display: flex;
    flex: 1;
    flex-dir: row;
    align-items: center;
    justify-content: center;
  }
`;
