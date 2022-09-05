import { ReactNode } from "react";
import { useIsAuthenticated } from "react-auth-kit";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

export default function ProtectedRoute(props: Props) {
  const isAuthenticated = useIsAuthenticated();
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return props.children;
}
