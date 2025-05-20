import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "./Context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const { signInuser, logInWithGoogle } = use(AuthContext);
  const logInUserWithGoogle = () => {
    logInWithGoogle()
      .then((result) => {
        navigate(`${location.state? location.state: "/"}`);
        console.log(result);
      })
      .catch((error) => {
        alert("error ",error);
      });
  };

  const logInWithEmailPaassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInuser(email, password)
      .then((result) => {
        // console.log(result);
        alert("logged in sucessfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="text-center py-10">
        <h1 className="text-5xl font-bold">Login now!</h1>
      </div>
      <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={logInWithEmailPaassword} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
            />
            <label className="label">Password</label>
            <input
              type="text"
              className="input"
              placeholder="Password"
              name="password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <hr className="border border-gray-300 border-dashed mt-2 mb-2" />
            <div className="text-center ">
              <p className="text-sm">
                <span className="mr-2">Don't Have An Account?</span>
                <span className="link link-hover hover:text-blue-700 text-blue-400 ">
                  <Link to={"/register"}>Register</Link>
                </span>
              </p>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          <div className="text-center ">
            <p className="pb-3 text-sm">Login With</p>
            <div className="flex justify-center items-center">
              <button onClick={() => logInUserWithGoogle()} className="btn">
                <FcGoogle size={30} />
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
