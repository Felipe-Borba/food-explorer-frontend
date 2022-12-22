import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputPrimary } from "../../components/global/InputPrimary";
import { ButtonPrimary } from "../../components/global/butons/ButtonPrimary";
import { ButtonText } from "../../components/global/butons/ButtonText";
import SigInLayout from "../../components/layouts/SignInLayout";
import { useAuth } from "../../context/Auth";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { logIn } = useAuth();

  async function handleSignIn() {
    const response = await logIn({ email, password });

    if (response.status < 300) {
      navigate("/home");
    } else {
      alert(response.message?.join("\n"));
    }
  }

  return (
    <SigInLayout sectionText="Faça seu login">
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
        Entrar
      </ButtonPrimary>

      <Link to="/sign-up">
        <ButtonText>CriarConta</ButtonText>
      </Link>
    </SigInLayout>
  );
}
