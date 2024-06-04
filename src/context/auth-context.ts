import { createContext } from "react";
import { AuthContextType } from "../types/types";

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
  addLikedArticle: () => {},
});
