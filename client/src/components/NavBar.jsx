import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"
          }
        >
          Our Shop
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-gray-900/30 fixed w-full z-50 text-white">
      <div className="navbar mx-auto max-w-[1920px]">
        {/* Logo Section */}
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>

        {/* Navigation Menu */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-4 space-x-4">{navItems}</ul>
        </div>

        {/* Mobile Dropdown */}
        <div className="navbar-center lg:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
        </div>

        {/* Login and Sign Up Buttons */}
        <div className="navbar-end space-x-2">
          <NavLink
            to="/login"
            className="btn btn-outline text-white hover:bg-yellow-400"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="btn bg-yellow-400 text-gray-900 hover:bg-yellow-500"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
