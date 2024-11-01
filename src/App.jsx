import React from "react";
import { useSession } from "./hooks/useSession";
import { Login } from "./components/login";
import { Home } from "./components/Home";
import "./index.css";

const AppContent = () => {
  const { isAuthenticated, username } = useSession();

  return <div>{isAuthenticated ? <Home /> : <Login />}</div>;
};

export const App = () => {
  return (
    <>
      <AppContent />
    </>
  );
};

export default App;
