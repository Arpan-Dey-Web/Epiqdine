import React, { use } from "react";
import { FaUser } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "./Context/AuthContext";
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
    <div className="navbar nabbar shadow-sm rounded-2xl my-4">
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
            {links}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-14 rounded-full">
            <img
              className="rounded-full h-10 "
              src="/public/Screenshot 2025-05-22 210421.png"
              alt=""
            />
          </div>
          <Link to={"/"} className="text-lg font-semibold logoName ">
            <span className="md:text-3xl  font-extrabold text-yellow-400">
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
                  className="w-8 h-8 rounded-full "
                  src={user?.photoURL}
                  alt=""
                />
              ) : (
                <span className="p-2">
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
              className=" inline-block rounded-full border border-indigo-600 px-6 py-2 md:px-12 md:py-3  font-medium text-white hover:bg-indigo-600 hover:text-white focus:ring-3 focus:outline-hidden  md:text-lg "
            >
              LogOut
            </button>
          ) : (
            <div className="flex gap-3">
              <Link
                to={"/logIn"}
                className="inline-block rounded-full border border-indigo-600 px-6 py-2 md:px-12 md:py-3  font-medium text-white hover:bg-indigo-600 hover:text-white focus:ring-3 focus:outline-hidden  md:text-lg"
              >
                LogIn
              </Link>
              <Link
                to={"/register"}
                className="inline-block rounded-full border border-indigo-600 px-6 py-2 md:px-12 md:py-3  font-medium text-white hover:bg-indigo-600 hover:text-white focus:ring-3 focus:outline-hidden  md:text-lg"
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
