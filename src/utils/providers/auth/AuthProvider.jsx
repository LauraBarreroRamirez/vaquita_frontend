import {
  createContext,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from "react";
import { loginApi } from "../../../api/auth";
import apiClient from "../../../api/apiCLiente.jsx";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!storedToken);

  const login = useCallback(async (credentials) => {
    const { token, user } = await loginApi(credentials);

    apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;

    localStorage.setItem("token", token);

    localStorage.setItem("user", JSON.stringify(user));

    setUser(user);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("token"); // Elimina el token al cerrar sesión
    localStorage.removeItem("userId");
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  useEffect(() => {
    if (storedToken) {
      apiClient.defaults.headers.common.Authorization = `Bearer ${storedToken}`;

      // Aquí podrías hacer una llamada para obtener los detalles del usuario si fuera necesario
      // Supongamos que tienes una función getUserDetails() para obtener los detalles del usuario
      // getUserDetails().then((user) => {
      //   setUser(user);
      //   setIsAuthenticated(true);
      // }).catch((error) => {
      //   console.error("Error al restaurar la sesión", error);
      //   logout(); // Limpiar estado si la restauración falla
      // });
    }
  }, [storedToken, logout]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const userJson = JSON.parse(user);

    if (userJson) {
      setUser(userJson);
    }
    return () => {
      setUser(null);
    };
  }, []);

  const value = useMemo(
    () => ({
      login,
      user,
      logout,
      isAuthenticated,
    }),
    [login, user, logout, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
