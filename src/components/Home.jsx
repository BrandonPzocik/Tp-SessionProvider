import React from "react";
import useSession from "../hooks/useSession";

export const Home = () => {
  const { logout, username } = useSession();
  console.log("Username en Home:", username);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Bienvenido, {username}
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Has iniciado sesión correctamente.
        </p>
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};
