import { createContext, useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userItem = localStorage.getItem("user");
    if (userItem) {
      const user = JSON.parse(userItem);
      const now = new Date().getTime();
      if (user.expiry > now) {
        setisLoggedIn(true);
        navigate("/home");
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