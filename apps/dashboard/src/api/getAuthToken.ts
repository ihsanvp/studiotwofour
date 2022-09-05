import http from "../utils/http";
import { User } from "../models/User";

interface Response {
  user: User;
  auth: {
    type: string;
    token: string;
    expires_at: string;
  };
}

export default async function getAuthToken(email: string, password: string) {
  const res = await http.post<Response>("/auth/login", {
    email,
    password,
  });

  return res.data;
}
