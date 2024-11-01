import { useContext } from "react";
import { SessionContext } from "../context/SessionProvider"; // Asegúrate de que estás importando SessionContext

export const useSession = () => {
  const { isAuthenticated, login, logout, token, username } =
    useContext(SessionContext);
  return { isAuthenticated, login, logout, token, username };
};

export default useSession;
