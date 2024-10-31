import React, { useState } from "react";
import { useSession } from "../hooks/useSession";

export const Login = () => {
  const { login } = useSession(); // Cambiar a minúscula
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    const results = await login(username, password); // Cambiar a minúscula
    if (!results.success) {
      // Cambiar a results
      // Si falla la autenticación, mostramos el mensaje de error
      setError(results.message);
    } else {
      // Si tiene éxito, eliminamos cualquier mensaje de error previo
      setError(null);
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        {" "}
        {/* Usamos un formulario para manejar el evento */}
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required // Añadido para requerir el campo
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required // Añadido para requerir el campo
        />
        <button type="submit">Iniciar sesión</button>{" "}
        {/* Cambiado para usar el tipo submit */}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};
