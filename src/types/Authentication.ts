export interface Register {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface User {
  name: string;
  email: string;
}

export interface AuthLogin {
  token: string | null;
  user: User | null;
}

export interface RegisterRequest {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface UpdateUser {
  name: string;
  phone: string;
  currentPassword: string;
  newPassword: string;
}
