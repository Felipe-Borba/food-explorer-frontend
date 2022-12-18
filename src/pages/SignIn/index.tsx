import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/global/Input";
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
    try {
      await logIn({ email, password });
      navigate("/home");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <SigInLayout sectionText="Faça seu login" onSubmit={handleSignIn}>
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

      <ButtonPrimary type="submit">Entrar</ButtonPrimary>

      <Link to="/sign-up">
        <ButtonText>CriarConta</ButtonText>
      </Link>
    </SigInLayout>
  );
}
