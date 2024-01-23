import { NavLink } from "react-router-dom";

const NavItem = ({ text, location }) => {
  return (
    <div>
      <NavLink to={location}>{text}</NavLink>
    </div>
  );
};

export default NavItem;
