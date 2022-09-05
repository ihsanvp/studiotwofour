import { Outlet } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

interface Props {
  loginPath: string;
}

export default function ProtectedLayout(props: Props) {
  return (
    <ProtectedRoute>
      <Outlet />
    </ProtectedRoute>
  );
}
