import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/global/Input";
import { ButtonPrimary } from "../../components/global/butons/ButtonPrimary";
import { ButtonText } from "../../components/global/butons/ButtonText";
import SigInLayout from "../../components/layouts/SignInLayout";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const { signIn, data } = useAuth();

  async function handleSignIn() {
    // await signIn({ email, password });
    // navigate("/home");
  }

  return (
    <SigInLayout sectionText="Faça seu login" onSubmit={handleSignIn}>
      <Input
        title="E-mail"
        placeholder="Exemplo: exemplo@exemplo.com.br"
        onChange={(e) => setEmail(e.target.value)}
      ></Input>

      <Input
        title="Senha"
        placeholder="No mínimo 6 caracteres"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      ></Input>

      <ButtonPrimary type="submit">Entrar</ButtonPrimary>

      <Link to="/sign-up">
        <ButtonText>CriarConta</ButtonText>
      </Link>
    </SigInLayout>
  );
}
