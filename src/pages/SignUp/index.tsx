import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputPrimary } from "../../components/global/InputPrimary";
import { ButtonPrimary } from "../../components/global/butons/ButtonPrimary";
import { ButtonText } from "../../components/global/butons/ButtonText";
import SigInLayout from "../../components/layouts/SignInLayout";
import { useAuth } from "../../context/Auth";

export default function SignIn() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { createUser } = useAuth();

  async function handleSignIn() {
    const response = await createUser({ name: nome, email, password });
    alert(response.message?.join("\n"));

    if (response.status < 300) {
      navigate("/sign-in");
    }
  }

  return (
    <SigInLayout sectionText="Criar sua conta">
      <InputPrimary
        label="Seu nome"
        placeholder="Exemplo: Maria da Silva"
        onChange={(e) => setNome(e.target.value)}
      />

      <InputPrimary
        label="E-mail"
        placeholder="Exemplo: exemplo@exemplo.com.br"
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputPrimary
        label="Senha"
        placeholder="No mínimo 6 caracteres"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <ButtonPrimary w={"100%"} onClick={handleSignIn}>
        Criar conta
      </ButtonPrimary>

      <Link to="/sign-in">
        <ButtonText>Ja tenho uma conta</ButtonText>
      </Link>
    </SigInLayout>
  );
}
