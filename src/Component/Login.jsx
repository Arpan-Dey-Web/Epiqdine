import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "./Context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FaEye, FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signInuser, logInWithGoogle } = use(AuthContext);
  const logInUserWithGoogle = () => {
    logInWithGoogle()
      .then((result) => {
        Swal.fire({
          title: "Logged In Sucessfully!",
          icon: "success",
          draggable: true,
        });
        navigate(`${location.state ? location.state : "/"}`);

      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  const logInWithEmailPaassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInuser(email, password)
      .then((result) => {
        Swal.fire({
          title: "Signed In Sucesssfully",
          icon: "success",
          draggable: true,
        });

        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Enter Valid Email, Password",
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
        Login Now!
      </h1>

      <div className="card w-full mx-auto border border-gray-500 max-w-lg shadow-2xl">
        <div className="card-body rounded-2xl bg-[#1C2434] text-white">
          <form onSubmit={logInWithEmailPaassword} className="fieldset">
            <div className="grid grid-cols-1 gap-2 text-white">
              <div>
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

                <span className={`${inputClass} relative`}>
                  <label className="label py-2">Password</label>
                  <input
                    type={show ? "text" : "password"}
                    className={inputBoxClass}
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-9 top-12 cursor-pointer"
                  >
                    {show ? <FaRegEyeSlash size={15} /> : <FaEye size={15} />}
                  </span>
                </span>
              </div>
            </div>

            <div className="text-right mb-2">
              <a className="link link-hover text-indigo-400 hover:text-indigo-300 text-sm">
                Forgot password?
              </a>
            </div>

            <div className="text-center text-sm mt-1">
              <span className="mr-2">Don't have an account?</span>
              <Link
                to={"/register"}
                className="link link-hover text-indigo-400 hover:text-indigo-300"
              >
                Register 
              </Link>
            </div>

            <button
              type="submit"
              className="inline-block rounded-full border border-indigo-600 px-7 py-2 font-medium text-white hover:bg-indigo-600 hover:text-white focus:ring-3 focus:outline-hidden md:text-lg mt-6"
            >
              Login Your Account
            </button>
          </form>

          <div className="text-center mt-6">
           
            <div className="flex justify-center items-center">
              <button
                onClick={() => logInUserWithGoogle()}
                className="flex items-center justify-center gap-2 w-full p-3 rounded-full border border-gray-300 bg-white text-black hover:bg-gray-100 transition duration-200 shadow-sm"
              >
                <svg
                  aria-label="Google logo"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path fill="#fff" d="M0 0h512v512H0z" />
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  />
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  />
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  />
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  />
                </svg>
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
