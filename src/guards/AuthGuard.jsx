import { useEffect } from "react";
import useAuthContext from "../utils/providers/auth/useAuthContext";
import { useNavigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return <>{children}</>;
};

export default AuthGuard;
