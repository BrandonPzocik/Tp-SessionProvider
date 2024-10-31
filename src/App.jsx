import React from "react";
import { useSession } from "./hooks/useSession";
import { Login } from "./components/login";
import { Home } from "./components/Home";

const AppContent = () => {
  const { isAuthenticated } = useSession();

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
