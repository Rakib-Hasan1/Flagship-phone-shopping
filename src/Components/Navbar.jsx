import { Link, NavLink } from "react-router";
import { MdShoppingCart } from "react-icons/md";
import { MdBookmarkAdd } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "../Provider/Context";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="navbar p-0 bg-base-100 shadow-sm mx-auto px-8 md:px-14 lg:px-18 xl:px-24">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="mr-2 cursor-pointer hover:text-gray-700 lg:hidden"
          >
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
                to="/cart"
              >
                <MdShoppingCart size={22} />
                <p>{cart.length}</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
                to="/favorite"
              >
                <MdBookmarkAdd size={22} />
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="font-bold text-xl">
          FlagshipFaceOff
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
              to="/cart"
            >
              <MdShoppingCart size={22} />
              <p className="absolute right-0 -top-1 text-shadow-orange-800">{cart.length}</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
              to="/favorite"
            >
              <MdBookmarkAdd size={22} />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
