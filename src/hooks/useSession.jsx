import { useContext } from "react";
import { SessionContext } from "../context/SessionProvider";
export const useSession = () => {
  const { isAuthenticated, login, logout, token, username } =
    useContext(SessionContext);
  return { isAuthenticated, login, logout, token, username };
};
