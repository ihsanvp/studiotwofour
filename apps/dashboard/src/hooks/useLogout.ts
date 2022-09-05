import { useSignOut } from "react-auth-kit";
import { tryit } from "radash";
import api from "../api";
import { useNavigate } from "react-router-dom";

interface Options {
  loginPath: string;
}

export default function useLogout(options: Options) {
  const signOut = useSignOut();
  const navigate = useNavigate();

  return async () => {
    const request = tryit(api.revokeToken);
    const [err, data] = await request();

    if (err) {
      return console.log(err);
    }

    signOut();
    navigate(options.loginPath);
  };
}
