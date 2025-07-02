import React, { use } from "react";
import { FaUser } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "./Context/AuthContext";
import { IoMoon, IoSunny } from "react-icons/io5";
import Swal from "sweetalert2";
import { ThemeContext } from "./Context/ThemeContext";
import logo from "../assets/Logo.png";
const Nabbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const { changeTheme, theme } = use(ThemeContext);

  // Handle Sign Out with confirmation
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

  const profileDropDownLinks = (
    <>
      <li className="p-1 ">
        <NavLink to={`/myfood/${user?.email}`}>My Foods</NavLink>
      </li>

      <li className="p-1 ">
        <NavLink to={`/myorder/${user?.email}`}>My Orders</NavLink>
      </li>
      <li className="p-1 ">
        <NavLink to={"/addfood"}>Add Food</NavLink>
      </li>
    </>
  );

  const links = (
    <ul className="menu menu-vertical md:menu-horizontal gap-4 text-lg font-semibold">
      <li className="btn-ghost  transition-all duration-300">
        <NavLink
          to="/"
          className="px-4 py-2  transition-all duration-300"
        >
          Home
        </NavLink>
      </li>
      <li className="btn-ghost transition-all duration-300">
        <NavLink
          to="/allFoods"
          className="px-4 py-2  transition-all duration-300"
        >
          All Foods
        </NavLink>
      </li>
      <li className="btn-ghost transition-all duration-300">
        <NavLink
          to="/gallery"
          className="px-4 py-2  transition-all duration-300"
        >
          Gallery
        </NavLink>
      </li>

      {user && (
        <>
          <li className="btn-ghost  transition-all duration-300">
            <NavLink
              to={`/myfood/${user?.email}`}
              className="px-4 py-2  transition-all duration-300"
            >
              My Foods
            </NavLink>
          </li>

          <li className="btn-ghost  transition-all duration-300">
            <NavLink
              to={`/myorder/${user?.email}`}
              className="px-4 py-2  transition-all duration-300"
            >
              My Orders
            </NavLink>
          </li>

          <li className="btn-ghost  transition-all duration-300">
            <NavLink
              to="/addfood"
              className="px-4 py-2  transition-all duration-300"
            >
              Add Food
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );

  return (
    <div
      className={`navbar  shadow-md rounded-b-2xl mb-4 sticky top-0 z-10 bg-base-300`}
    >
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
            {profileDropDownLinks}
            <li className="md:hidden  rounded-3xl ">
              <button
                className=" btn-ghost rounded-3xl  font-semibold  py-2  "
                onClick={() => handleSignOut()}
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>

        <Link to={"/"} className="flex items-center gap-2 ml-2">
          <div className="w-10 h-10 object-center hidden md:block">
            <img src={logo} className="rounded-full" alt="logo" />
          </div>
          <span className="  md:text-3xl font-bold font-[Fira_Code] ">
            <span className="text-yellow-400 font-[Fira_Code]">Epiq</span>
            <span className="text-orange-400 font-[Fira_Code]">Dine</span>
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">{links}</div>

      <div className="navbar-end flex items-center gap-4">
        {/* Theme Toggle */}
        <div>
          <button
            className={` btn border border-white rounded-full `}
            onClick={() => {
              changeTheme();
            }}
          >
            {theme === "dark" ? <IoSunny /> : <IoMoon />}
          </button>
        </div>
        {/* User Avatar */}
        {user ? (
          <div className="dropdown dropdown-start">
            <div data-tooltip-id="my-tooltip" data-tooltip-place="top">
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
          <div className="hidden md:block">
            <button
              onClick={() => handleSignOut()}
              className="btn btn-outline btn-primary rounded-full "
            >
              LogOut
            </button>
          </div>
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
