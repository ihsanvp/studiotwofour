import { useSignIn } from "react-auth-kit";
import { User } from "../models/User";
import api from "../utils/api";
import { tryit } from "radash";
import { AxiosResponse } from "axios";

interface AuthLoginResponse {
  user: User;
  auth: {
    type: string;
    token: string;
    expires_at: string;
  };
}

interface LoginParams {
  email: string;
  password: string;
}

function getExpiresIn(expiresAt: string) {
  const diff = Math.abs(new Date().getTime() - new Date(expiresAt).getTime());
  return Math.floor(diff / (1000 * 60));
}

export default function useLogin() {
  const signIn = useSignIn();

  return async (params: LoginParams) => {
    const getAuth = tryit(api.post);
    const [err, res] = await getAuth("/auth/login", {
      email: params.email,
      password: params.password,
    });

    if (err) {
      return err;
    }

    const response = res as AxiosResponse<AuthLoginResponse>;

    const expiresIn = getExpiresIn(response.data.auth.expires_at);
    console.log(expiresIn, "minutes");

    signIn({
      token: response.data.auth.token,
      authState: response.data.user,
      tokenType: "Bearer",
      expiresIn,
    });
  };
}
