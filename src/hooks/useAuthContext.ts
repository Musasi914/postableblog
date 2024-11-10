import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return { isAuth, setIsAuth };
};
