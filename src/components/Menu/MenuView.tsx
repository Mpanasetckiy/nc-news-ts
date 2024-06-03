import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { MenuOutlined, UserOutlined, HomeOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";

import { AuthContext } from "../../context/auth-context";
import config from "../../config.json";

import "./MenuView.css";

const MenuView: React.FC = () => {
  const { routes } = config;
  const { user } = useContext(AuthContext);
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
      <Space wrap>
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
          placement="bottomRight"
        >
          <Button type="text" icon={<MenuOutlined />}></Button>
        </Dropdown>
      </Space>
    </Space>
  );
};

export default MenuView;
