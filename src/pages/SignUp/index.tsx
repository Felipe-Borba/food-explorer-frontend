import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/global/Input";
import { ButtonPrimary } from "../../components/global/butons/ButtonPrimary";
import { ButtonText } from "../../components/global/butons/ButtonText";
import SigInLayout from "../../components/layouts/SignInLayout";

export default function SignIn() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSignIn() {
    // navigate("/home");
  }

  return (
    <SigInLayout sectionText="Criar sua conta" onSubmit={handleSignIn}>
      <Input
        title="Seu nome"
        placeholder="Exemplo: Maria da Silva"
        onChange={(e) => setNome(e.target.value)}
      />

      <Input
        title="E-mail"
        placeholder="Exemplo: exemplo@exemplo.com.br"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        title="Senha"
        placeholder="No mínimo 6 caracteres"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <ButtonPrimary type="submit">Criar conta</ButtonPrimary>

      <Link to="/sign-in">
        <ButtonText>Ja tenho uma conta</ButtonText>
      </Link>
    </SigInLayout>
  );
}
