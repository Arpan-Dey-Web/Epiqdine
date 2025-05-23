import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "./Context/AuthContext";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import { FaEye, FaRegEyeSlash } from "react-icons/fa6";

const Register = () => {
  const { setUser, createUser, updataUserProfile } = use(AuthContext);
  const navigate = useNavigate();
  const registerAccount = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const imageUrl = e.target.imageUrl.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: "Registration Sucessfully",
          icon: "success",
          draggable: true,
        });
        updataUserProfile({
          displayName: name,
          photoURL: imageUrl,
        })
          .then((result) => {
            toast("user profile updated");
            setUser({ ...user, displayName: name, photoURL: imageUrl });
            navigate("/");
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Profile Not Updated",
            });
            setUser(user);
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email Already Exist!!!",
        });
      });
  };
  const [show, setShow] = useState(false);

  const inputClass = "flex flex-col  justify-center items-center mb-2";
  const inputBoxClass =
    "w-full p-3 rounded-lg border border-slate-300 text-white  focus:outline-none focus:ring-2 focus:ring-blue-500 transition capitalize cursor-pointer";

  return (
    <div className="w-full mx-auto text-center">
      <h1 className="text-5xl font-bold py-10 text-white logoName">
        Register Now!
      </h1>

      <div className="card w-full mx-auto border border-gray-500 max-w-lg shadow-2xl">
        <div className="card-body rounded-2xl bg-[#1C2434] text-white ">
          <form onSubmit={registerAccount} className="fieldset">
            <div className="grid grid-cols-1 gap-2 text-white">
              <div>
                <span className={inputClass}>
                  <label className="label py-2">Name</label>
                  <input
                    type="text"
                    className={inputBoxClass}
                    placeholder="Your Name"
                    name="name"
                    required
                  />
                </span>

                <span className={inputClass}>
                  <label className="label py-2">Email</label>
                  <input
                    type="email"
                    className={inputBoxClass}
                    placeholder="Email"
                    name="email"
                    required
                  />
                </span>
              </div>

              <div>
                <span className={`${inputClass} relative`}>
                  <label className="label py-2">Password</label>
                  <input
                    type={show ? "text" : "password"}
                    pattern="^(?=.*[A-Z])(?=.*[a-z]).{6,}$"
                    className={`${inputBoxClass} `}
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-9 top-12"
                  >
                    {show ? <FaRegEyeSlash size={15} /> : <FaEye size={15} />}
                  </span>
                </span>

                <span className={inputClass}>
                  <label className="label py-2">Image URL</label>
                  <input
                    type="text"
                    className={inputBoxClass}
                    placeholder="Image URL"
                    name="imageUrl"
                  />
                </span>
              </div>
            </div>

            <div className="text-sm mt-4 text-center">
              <span className="mr-2 ">Already have an account?</span>
              <Link
                to={"/logIn"}
                className="link link-hover text-indigo-400 hover:text-indigo-300"
              >
                Login
              </Link>
            </div>

            <button
              type="submit"
              className="inline-block rounded-full border border-indigo-600 px-7 py-2 font-medium text-white hover:bg-indigo-600 hover:text-white focus:ring-3 focus:outline-hidden md:text-lg mt-6"
            >
              Register A New Account
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Register;
