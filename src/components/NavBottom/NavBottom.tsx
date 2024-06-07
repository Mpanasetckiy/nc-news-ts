import NavBottomView from "./NavBottomView";

import { MobileOnly } from "../../styles/styles";

const NavBottom = () => {
  return (
    <MobileOnly>
      <NavBottomView />
    </MobileOnly>
  );
};

export default NavBottom;
