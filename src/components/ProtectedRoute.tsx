import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import type { RootState } from "../store";

const ProtectedRoute = () => {
  const { isConnected } = useSelector((state: RootState) => state.wallet);

  return isConnected ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
