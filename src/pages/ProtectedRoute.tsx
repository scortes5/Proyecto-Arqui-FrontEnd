import { useAuth0 } from "@auth0/auth0-react";
import type React from "react";
import { Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    loginWithRedirect();
    return <div>Redirecting...</div>;
  }

  return children ?? <Outlet />;
};
