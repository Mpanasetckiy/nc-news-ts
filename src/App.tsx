import { Routes, Route } from "react-router-dom";

import { useAuth } from "./hooks/useAuth";
import { AuthContext } from "./context/auth-context";
import "./App.css";

function App() {
  const { isLoggedIn, user, login, logout } = useAuth();
  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      <Routes></Routes>
    </AuthContext.Provider>
  );
}

export default App;
