import { useSignIn } from "react-auth-kit";
import { tryit } from "radash";
import api from "../api";

interface Params {
  email: string;
  password: string;
}

function getExpiresIn(expiresAt: string) {
  const diff = Math.abs(new Date().getTime() - new Date(expiresAt).getTime());
  return Math.floor(diff / (1000 * 60));
}

export default function useLogin() {
  const signIn = useSignIn();

  return async (params: Params) => {
    const request = tryit(api.getAuthToken);
    const [err, data] = await request(params.email, params.password);

    if (err) {
      return err;
    }

    signIn({
      token: data.auth.token,
      authState: data.user,
      tokenType: "Bearer",
      expiresIn: getExpiresIn(data.auth.expires_at),
    });
  };
}
