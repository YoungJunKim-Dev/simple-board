import { Navigate } from "react-router-dom";
import Auth from "../../services/auth";
import { useRecoilValue } from "recoil";
import LoginState from "../../states/LoginState";

const AdminRoute = ({ children }) => {
  const loginState = useRecoilValue(LoginState);
  if (!Auth.isLoggedIn() || loginState.member_id !== 0) {
    return <Navigate to={"/signin"} replace />;
  } else {
    return children;
  }
};

export default AdminRoute;
