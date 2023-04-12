import { Navigate } from "react-router-dom";
import Auth from "../../services/auth";

const PublicRestrictedRoute = ({ children }) => {
  if (Auth.isLoggedIn()) {
    return <Navigate to={"/"} replace />;
  } else {
    return children;
  }
};

export default PublicRestrictedRoute;
