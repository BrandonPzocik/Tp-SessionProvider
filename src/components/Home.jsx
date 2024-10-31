import React from "react";
import useSession from "../hooks/useSession";

export const Home = () => {
  const { logout } = useSession();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Bienvenido a la Aplicación</h1>
      <p>Has iniciado sesión correctamente.</p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};
