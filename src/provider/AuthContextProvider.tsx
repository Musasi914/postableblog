import { ReactNode } from "react";
import { useState } from "react";

import { AuthContext } from "../context/AuthContext";

type ProviderProps = {
  children: ReactNode;
};

export default function AuthContextProvider({ children }: ProviderProps) {
  const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem("isAuth")));

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
