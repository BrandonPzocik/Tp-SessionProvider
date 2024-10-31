import { createContext, useState, useContext } from "react";

// Exporta el contexto
export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  const login = async (username, password) => {
    try {
      const response = await fetch("http://localhost:4000/auth/sign-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        setIsAuthenticated(true);
        return { success: true };
      } else {
        return { success: false, message: "Credenciales incorrectas" };
      }
    } catch (error) {
      console.log("Error de autenticación:", error);
      return { success: false, message: "Error de conexión" };
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);
  };

  return (
    <SessionContext.Provider value={{ isAuthenticated, login, logout, token }}>
      {children}
    </SessionContext.Provider>
  );
};

// Hook para usar el contexto de sesión
export const useSession = () => {
  return useContext(SessionContext);
};
