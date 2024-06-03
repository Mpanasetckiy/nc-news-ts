import { useNavigate } from "react-router-dom";

import NavTopView from "./NavTopView";

interface NavTopProps {
  title: string;
  isPage?: boolean;
}

const NavTop: React.FC<NavTopProps> = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return <NavTopView {...props} onNavigateBack={handleClick} />;
};

export default NavTop;
