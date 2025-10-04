export interface IAuthProvider {
  provider: "google" | "credentials";
  providerId: string;
}

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: "ADMIN";
  isVerified: boolean;
  auth: IAuthProvider[];
}
