import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("You must to use this inside of AuthProvider");
  }

  return context;
};

export default useAuthContext;
