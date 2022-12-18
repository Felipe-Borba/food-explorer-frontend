
export interface UserUpdate {
  name: string;
  email: string;
  passwordOld: string;
  password: string;
}

export interface LogInProps {
  email: string;
  password: string;
}

export interface AuthData {
  user: User | null
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
}