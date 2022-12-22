import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ApiResponse, api, apiErrorParser } from "../../services/api";
import { AuthContext, AuthData, CreateUser, LogIn } from "./types";

const AuthCtx = createContext<AuthContext | null>(null);

export function useAuth() {
  const context = useContext(AuthCtx);

  if (!context) {
    throw new Error("AuthContext not loaded!");
  }

  return context;
}

export function AuthProvider({ children }: PropsWithChildren) {
  const [data, setData] = useState<AuthData>({
    user: null,
  });

  async function logIn({ email, password }: LogIn): Promise<ApiResponse> {
    try {
      const response = await api.post("/users/session", {
        email,
        senha: password,
      });
      const { token, user } = response.data;

      localStorage.setItem("@foodExplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodExplorer:token", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user });
      return { status: response.status };
    } catch (error) {
      console.log(error);
      return apiErrorParser(error, "Não foi possível logar");
    }
  }

  function signOut() {
    localStorage.removeItem("@foodExplorer:user");
    localStorage.removeItem("@foodExplorer:token");
    setData({ user: null });
  }

  async function createUser({ email, name, password }: CreateUser) {
    return api
      .post("/users", { nome: name, email, senha: password })
      .then((response) => {
        return { status: response.status, message: ["Usuário criado"] };
      })
      .catch((error) => {
        return apiErrorParser(error, "Nao foi possível cadastrar um usuário!");
      });
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodExplorer:user");
    if (user) {
      setData({
        user: JSON.parse(user),
      });
    }

    const token = localStorage.getItem("@foodExplorer:token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  return (
    <AuthCtx.Provider value={{ createUser, logIn, signOut, data }}>
      {children}
    </AuthCtx.Provider>
  );
}
