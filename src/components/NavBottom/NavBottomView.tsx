import {
  HomeOutlined,
  UserOutlined,
  PlusCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import NavLink from "../NavLink/NavLink";

import config from "../../config.json";

import "./NavBottomView.css";

const NavBottomView = () => {
  const { routes } = config;

  return (
    <footer className="NavBottomView__footer">
      <ul className="NavBottomView__ul">
        <NavLink to={routes.home.path}>
          <HomeOutlined />
        </NavLink>
        <NavLink to="/topics">
          <SearchOutlined />
        </NavLink>
        <NavLink to={routes.createArticle.path}>
          <PlusCircleOutlined />
        </NavLink>
        <NavLink to={routes.userProfile.path}>
          <UserOutlined />
        </NavLink>
      </ul>
    </footer>
  );
};

export default NavBottomView;
