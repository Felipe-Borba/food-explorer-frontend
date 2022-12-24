import { ApiResponse } from "../../services/api";

export interface CreateUser {
  name: string;
  email: string;
  password: string;
}

export interface LogIn {
  email: string;
  password: string;
}

export interface AuthData {
  user: User | null;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  created_at: string;
  updated_at: string;
}

export interface AuthContext {
  data: {
    user: User | null;
  };
  createUser(user: CreateUser): Promise<ApiResponse>;
  logIn(user: LogIn): Promise<ApiResponse>;
  signOut(): void;
}
