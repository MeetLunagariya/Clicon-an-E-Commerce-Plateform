import { createContext, useEffect, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    const userItem = localStorage.getItem("user");
    if (userItem) {
      const user = JSON.parse(userItem);
      const now = new Date().getTime();
      if (user.expiry > now) {
        setisLoggedIn(true);
      } else {
        localStorage.removeItem("user");
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setisLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}