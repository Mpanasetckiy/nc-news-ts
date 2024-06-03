import { useState, useEffect, useCallback } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback((user: User) => {
    const userJSON = JSON.stringify(user);
    localStorage.setItem("user", userJSON);
    setUser(user);
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
  }, []);

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    if (localUser) {
      try {
        const user: User = JSON.parse(localUser);
        if (user) {
          setUser(user);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("Failed to parse user from localStorage", error);
      }
    }
  }, []);

  return { isLoggedIn, login, logout, user };
};
