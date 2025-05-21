import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "./Context/AuthContext";

const Register = () => {
  const {  setUser, createUser, updataUserProfile } = use(AuthContext);
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
        // alert("Account created sucessfully")
        updataUserProfile({
          displayName: name,
          photoURL: imageUrl,
        })
          .then((result) => {
            setUser({ ...user, displayName: name, photoURL: imageUrl });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user)
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold my-10">Register Now!</h1>
      <div className="text-center lg:text-left"></div>
      <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={registerAccount} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Your Name"
              name="name"
            />
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
              //   pattern="^(?=.*[A-Z])(?=.*[a-z]).{6,}$"
              className="input"
              placeholder="Password"
              name="password"
            />
            <label className="label">Image URL</label>
            <input
              type="text"
              className="input"
              placeholder="ImageURL"
              name="imageUrl"
            />

            <div>
              <span className="text-sm">
                <span className="mr-2">Allready Have A Account?</span>
                <Link
                  to={"/logIn"}
                  className="link link-hover hover:text-blue-700 text-blue-400"
                >
                  Login
                </Link>
              </span>
            </div>
            <button className="btn btn-neutral mt-4">Register Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
