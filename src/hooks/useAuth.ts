import { useState, useEffect, useCallback } from "react";
import { User } from "../types/types";

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

  const addLikedArticle = useCallback((article_id: number, like: number) => {
    const userLocalJson = localStorage.getItem("user");
    if (userLocalJson) {
      try {
        const userLocal: User = JSON.parse(userLocalJson);
        userLocal.likes = { ...userLocal.likes, [article_id]: like };
        setUser(userLocal);

        const userJSON = JSON.stringify(userLocal);
        localStorage.setItem("user", userJSON);
      } catch (error) {}
    }
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

  return { isLoggedIn, login, logout, user, addLikedArticle };
};
