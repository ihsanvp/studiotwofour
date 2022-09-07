import { useSignOut } from "react-auth-kit";
import { tryit } from "radash";
import api from "../api";
import { useNavigate } from "react-router-dom";

interface Options {
  loginPath?: string;
}

export default function useLogout(options: Options = {}) {
  const loginPath = options.loginPath || "/login";

  const signOut = useSignOut();
  const navigate = useNavigate();

  return async () => {
    const request = tryit(api.revokeToken);
    await request();

    signOut();
    navigate(loginPath);
  };
}
