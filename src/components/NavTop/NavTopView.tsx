import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";

import Menu from "../Menu/Menu";

import "./NavTopView.css";

interface NavTopViewProps {
  title: string;
  isPage?: boolean;
  onNavigateBack: () => void;
}

const NavTopView: React.FC<NavTopViewProps> = ({
  title,
  isPage = true,
  onNavigateBack,
}) => {
  return (
    <header className="NavTopView__header">
      <div>
        {!isPage ? (
          <Button
            shape="circle"
            icon={<LeftOutlined />}
            onClick={onNavigateBack}
          ></Button>
        ) : (
          <h1>NC NEWS</h1>
        )}
      </div>
      <h2>{title}</h2>
      <Menu />
    </header>
  );
};

export default NavTopView;
