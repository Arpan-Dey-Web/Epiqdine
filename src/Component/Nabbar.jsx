import React, { use } from "react";
import { FaUser } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "./Context/AuthContext";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import Swal from "sweetalert2";


const Nabbar = () => {
  const { user, signOutUser } = use(AuthContext);
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
          title: "SignOut SucessFully!",
          text: "We Will Miss You🥲.",
          icon: "success",
        });
        signOutUser();
      }
    });
  };

  const links = (
    <div className="flex gap-4  flex-col p-2  text-xl md:items-center md:justify-center lg:flex-row font-semibold md:text-lg">
      <li>
        <button>
          <NavLink to={"/"}>Home</NavLink>
        </button>
      </li>
      <li>
        <button>
          <NavLink to={"/createGroup"}>Create Group</NavLink>
        </button>
      </li>
      <li>
        <button>
          <NavLink to={"/allGroups"}>All Groups</NavLink>
        </button>
      </li>

      <li>
        <button>
          <NavLink to={`/myGroups/${user?.email}`}>My Groups</NavLink>
        </button>
      </li>
    </div>
  );
   
  return (
    <div className="navbar nabbar  shadow-sm rounded-2xl my-4">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-2 shadow"
          >
            <span className="text-black"> {links}</span>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:block w-14 rounded-full">
            <img
              className="rounded-full h-10 "
              src="/public/Screenshot 2025-05-22 210421.png"
              alt=""
            />
          </div>
          <Link to={"/"} className="text-lg font-semibold logoName ">
            <span className="md:text-3xl  text-yellow-400 font-extrabold  ">
              Inner
            </span>
            <span className="text-blue-500 md:text-3xl font-extrabold">
              Self
            </span>
          </Link>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end ">
        <div className="mr-2">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>

        {/* user avatar */}
        <div>
          <div
            data-tooltip-id="my-tooltip"
            data-tooltip-content={
              user?.displayName ? user?.displayName : "No user"
            }
            data-tooltip-place="top"
          >
            <button className=" p-1 border border-amber-500 rounded-full  ">
              {user?.photoURL ? (
                <img
                  className="w-10 h-10 rounded-full "
                  src={user?.photoURL}
                  alt=""
                />
              ) : (
                <span className="flex justify-center items-center">
                  <FaUser size={25}></FaUser>
                </span>
              )}
            </button>
          </div>

          <Tooltip id="my-tooltip" />
        </div>
        <div className="ml-4  ">
          {user ? (
            <button
              onClick={() => handleSignOut()}
              className=" inline-block rounded-full border border-indigo-600 px-6 py-2 md:px-12 md:py-2  font-medium text-white hover:bg-indigo-600 hover:text-white focus:ring-3 focus:outline-hidden  md:text-lg "
            >
              LogOut
            </button>
          ) : (
            <div className="flex gap-3">
              <Link
                to={"/logIn"}
                className="inline-block rounded-full border border-indigo-600 px-6 py-2 md:px-7 md:py-3  font-medium text-white hover:bg-indigo-600 hover:text-white focus:ring-3 focus:outline-hidden  md:text-lg"
              >
                LogIn
              </Link>
              <Link
                to={"/register"}
                className="inline-block rounded-full border border-indigo-600 px-6 py-2 md:px-7 md:py-3  font-medium text-white hover:bg-indigo-600 hover:text-white focus:ring-3 focus:outline-hidden  md:text-lg"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nabbar;
