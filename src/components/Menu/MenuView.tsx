import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { MenuOutlined, UserOutlined, HomeOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";

import { AuthContext } from "../../context/auth-context";
import config from "../../config.json";

import "./MenuView.css";

const MenuView: React.FC = () => {
  const { routes } = config;
  const { user } = useContext(AuthContext);
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const items = [
    {
      key: 1,
      label: (
        <Link to={routes.userProfile.path}>
          {user ? `${user.username}` : "My Profile"}
        </Link>
      ),
      icon: <UserOutlined />,
    },
    {
      key: 2,
      label: <Link to={routes.home.path}>Home</Link>,
      icon: <HomeOutlined />,
    },
  ];

  return (
    <Space direction="vertical">
      {isDesktop ? (
        <Space size="large">
          <Link to={routes.userProfile.path} className="MenuView__icon">
            <UserOutlined /> {user ? `${user.username}` : "My Profile"}
          </Link>
          <Link to={routes.home.path} className="MenuView__icon">
            <HomeOutlined /> Home
          </Link>
        </Space>
      ) : (
        <Space wrap>
          <Dropdown
            className="MenuView__DropDown"
            menu={{
              items,
            }}
            trigger={["click"]}
            placement="bottomRight"
          >
            <Button
              type="text"
              icon={<MenuOutlined className="MenuView__icon" />}
            />
          </Dropdown>
        </Space>
      )}
    </Space>
  );
};

export default MenuView;
