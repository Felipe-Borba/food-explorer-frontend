import { PropsWithChildren, createContext, useContext, useState } from "react";
import { api } from "../../services/api";
import {
  AuthContext,
  AuthData,
  CreateUser,
  LogInProps,
  UserUpdate,
} from "./types";

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

  async function logIn(props: LogInProps) {
    console.log("todo");
  }

  function signOut() {
    console.log("todo");
  }

  async function updateUser(user: UserUpdate) {
    console.log("todo");
  }

  async function createUser({ email, name, password }: CreateUser) {
    return api
      .post("/users", { nome: name, email, senha: password })
      .then((response) => {
        return { status: response.status, message: ["Usuário criado"] };
      })
      .catch((error) => {
        if (error?.response) {
          const { data, status } = error.response;

          return {
            status: status,
            message:
              typeof data.message === "string" ? [data.message] : data.message,
          };
        }

        return { status: 500, message: ["Nao foi possível cadastrar!"] };
      });
  }

  return (
    <AuthCtx.Provider value={{ createUser, data }}>{children}</AuthCtx.Provider>
  );
}
