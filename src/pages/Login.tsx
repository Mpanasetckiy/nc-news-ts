import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import LoginForm from "../components/LoginForm/LoginForm";

import config from "../config.json";

import { AuthContext } from "../context/auth-context";
import { useAxios } from "../hooks/useAxios";
import { User } from "../types/types";

const Login = () => {
  const { isLoggedIn, login } = useContext(AuthContext);
  const [users, setUsers] = useState<User[]>([]);
  const { sendRequest, isLoading } = useAxios();
  const navigate = useNavigate();
  const { routes } = config;

  const fetchUsers = async () => {
    try {
      const { users } = await sendRequest(
        `${import.meta.env.VITE_API_URL}/users`
      );
      if (!isLoading) {
        setUsers(users);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate(routes.home.path);
    }
  }, [isLoggedIn]);

  const handleLogin = (chosenUser: { username: string }) => {
    const currentUser = users.find((u) => u.username === chosenUser.username);
    if (currentUser) {
      login(currentUser);
      navigate(routes.home.path);
    }
  };

  return <LoginForm users={users} handleLogin={handleLogin} />;
};

export default Login;
