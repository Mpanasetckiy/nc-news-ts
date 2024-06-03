import { Link, useMatch } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  const match = useMatch(to);

  return (
    <li className={match ? "active" : "inactive"}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default NavLink;
