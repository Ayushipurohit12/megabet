import { Navigate, Outlet } from "react-router-dom";
import { loggedInState } from "../utils/AtomStates";
import { useRecoilState } from "recoil";
const AuthMiddleware = () => {
  const [isLoggedIn, setLoggedIn] = useRecoilState(loggedInState);

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default AuthMiddleware;
