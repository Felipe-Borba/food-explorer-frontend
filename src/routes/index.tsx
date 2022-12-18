import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export const Routes = () => {
  const isLogged = false;

  return (
    <BrowserRouter>{isLogged ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
};
