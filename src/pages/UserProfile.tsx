import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NavTop from "../components/NavTop/NavTop";
import Profile from "../components/Profile/Profile";

import config from "../config.json";
import { AuthContext } from "../context/auth-context";

const UserProfile = () => {
  const { user, isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const { routes } = config;

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(routes.login.path);
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <>
      <NavTop title="My Profile"></NavTop>
      <Profile user={user} isLoggedIn={isLoggedIn} logout={logout} />
    </>
  );
};

export default UserProfile;
