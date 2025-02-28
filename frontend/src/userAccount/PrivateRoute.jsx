import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Store/context/AuthContext";

function PrivateRoute() {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
}

export default PrivateRoute;