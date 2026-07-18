import logo from "../../assets/images/logo.png";
import { FaGithub } from "react-icons/fa";
import MyNavLink from "../MyNavLink/MyNavLink";

const Navbar = () => {
  const links = (
    <>
      <li>
        <MyNavLink to="/">Home</MyNavLink>
      </li>
      <li>
        <MyNavLink to="/apps">Apps</MyNavLink>
      </li>
      <li>
        <MyNavLink to="/installapp">Install Apps</MyNavLink>
      </li>
      <li>
        <MyNavLink to="/dashboard">Dashboard</MyNavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img className="w-[50px] h-[50px]" src={logo}></img>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-purple-500 text-white">
          {" "}
          <FaGithub /> Contribute
        </button>
      </div>
    </div>
  );
};

export default Navbar;
