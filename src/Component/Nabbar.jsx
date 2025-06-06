import React, { use } from "react";
import { FaUser } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "./Context/AuthContext";
import { IoMoon, IoSunny } from "react-icons/io5";
import Swal from "sweetalert2";
import { ThemeContext } from "./Context/ThemeContext";

const Nabbar = ({ themeData, setThemeData }) => {
  const { user, signOutUser } = use(AuthContext);
  const { changeTheme } = use(ThemeContext);

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want To SignOut!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, SignOut!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Signed Out Successfully!",
          text: "We Will Miss You 🥲",
          icon: "success",
        });
        signOutUser();
      }
    });
  };

  const links = (
    <ul className="menu menu-vertical md:menu-horizontal gap-3 text-lg font-semibold">
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allFoods"}>All Foods</NavLink>
      </li>
      <li>
        <NavLink to={"/gallery"}>Gallery</NavLink>
      </li>
    </ul>
  );

  return (
    <div className="navbar bg-base-100 text-base-content shadow-md rounded-2xl my-4 px-4">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        <Link to={"/"} className="flex items-center gap-2 ml-2">
          <div className="w-10 h-10 object-center hidden md:block">
            <img
              src="/public/logo.png"
              className="rounded-full"
              alt="logo"
            />
          </div>
          <span className="text-2xl md:text-3xl font-bold">
            <span className="text-yellow-600">Epiq</span>
            <span className="text-yellow-300">Dine</span>
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">{links}</div>

      <div className="navbar-end flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          className="btn btn-circle border border-neutral"
          onClick={() => {
            changeTheme();
            setThemeData(!themeData);
          }}
        >
          {themeData ? <IoSunny /> : <IoMoon />}
        </button>

        {/* User Avatar */}
        {user ? (
          <div>
            <div
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user?.displayName || "No user"}
              data-tooltip-place="top"
            >
              <button className="p-1 border border-accent rounded-full">
                {user?.photoURL ? (
                  <img
                    src={user?.photoURL}
                    className="w-10 h-10 rounded-full"
                    alt="user"
                  />
                ) : (
                  <FaUser size={24} />
                )}
              </button>
            </div>
            <Tooltip id="my-tooltip" />
          </div>
        ) : (
          " "
        )}

        {/* Auth Buttons */}
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-outline btn-primary rounded-full px-6 md:px-8"
          >
            LogOut
          </button>
        ) : (
          <div className="flex gap-3">
            <Link
              to={"/logIn"}
              className="btn btn-outline btn-primary rounded-full"
            >
              LogIn
            </Link>
           
          </div>
        )}
      </div>
    </div>
  );
};

export default Nabbar;
