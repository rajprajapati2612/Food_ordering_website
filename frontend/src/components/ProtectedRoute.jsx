import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../pages/auth.context.jsx";

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  // Wait for getMe() to finish
  if (loading) {
    return <div>Loading...</div>;
  }

  // getMe() has finished and there is no user
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // getMe() finished and user exists
  return children;
};

export default ProtectedRoute;