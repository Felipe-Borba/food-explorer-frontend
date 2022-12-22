export interface UserUpdate {
  name: string;
  email: string;
  password: string;
}

export interface CreateUser {
  name: string;
  email: string;
  password: string;
}

export interface LogInProps {
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
  created_at: string;
  updated_at: string;
}

export interface AuthContext {
  data: {
    user: User | null;
  };
  createUser(user: CreateUser): Promise<{ status: number; message: string[] }>;
}
