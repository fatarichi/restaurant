export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
};

/** Payload untuk login dan register */
export type AuthPayload = {
  user: User;
  token: string;
};

/** Body Input */
export type RegisterBody = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

export type LoginBody = {
  email: string;
  password: string;
};

export type UpdateProfileBody = Partial<Omit<User, "id" | "createdAt">>;
