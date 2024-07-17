import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <button
      onClick={handleLogout}
      className="rounded-md
        text-sm
        bg-Color_primario 
        text-white
        font-semibold"
    >
      Cerrar Sesión
    </button>
  );
};

export default LogoutButton;
