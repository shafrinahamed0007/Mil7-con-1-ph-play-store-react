import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${isActive ? "text-purple-500 bg-purple-200 duration-2000" : ""}`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
