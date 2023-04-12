import { Navigate } from "react-router-dom";
import Auth from "../../services/auth";

const ProtectedRoute = ({ children }) => {
  if (!Auth.isLoggedIn()) {
    return <Navigate to={"/signin"} replace />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
