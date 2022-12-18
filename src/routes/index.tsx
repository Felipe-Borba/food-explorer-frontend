import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../context/Auth";

export const Routes = () => {
  const { data } = useAuth();

  return (
    <BrowserRouter>{data.user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
};
