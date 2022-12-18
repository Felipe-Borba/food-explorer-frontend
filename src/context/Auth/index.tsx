import { PropsWithChildren, createContext, useContext, useState } from "react";
import { AuthData, LogInProps, UserUpdate } from "./types";

export const AuthContext = createContext({
  data: {
    user: null,
  } as AuthData,
  async logIn(props: LogInProps) {},
  signOut() {},
  async updateUser(user: UserUpdate) {},
});

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export function AuthProvider({ children }: PropsWithChildren) {
  const [data, setData] = useState<AuthData>({
    user: null,
  });

  async function logIn(props: LogInProps) {
    console.log("todo");
    setData({
      user: {
        id: 1,
        created_at: "01-09-2002",
        email: "email.com",
        name: "fulano",
        password: "123",
        updated_at: "01-09-2002",
      },
    });
  }

  function signOut() {
    console.log("todo");
  }

  async function updateUser(user: UserUpdate) {
    console.log("todo");
  }

  return (
    <AuthContext.Provider value={{ updateUser, logIn, data, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
