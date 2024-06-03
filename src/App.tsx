import { Routes, Route } from "react-router-dom";

import Article from "./pages/Article";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";

import { useAuth } from "./hooks/useAuth";
import { AuthContext } from "./context/auth-context";
import config from "./config.json";

import "./App.css";

function App() {
  const { routes } = config;
  const { isLoggedIn, user, login, logout } = useAuth();

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      <Routes>
        <Route path={routes.home.path} element={<Home />} />
        <Route path={routes.article.path} element={<Article />} />
        <Route path={routes.userProfile.path} element={<UserProfile />} />
        <Route path={routes.login.path} element={<Login />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
