import React, { use } from "react";
import { AuthContext } from "../Component/Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation()
    // console.log(user);
    if (loading) {
        return <div>loading.........</div>
    }
  if (user && user.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/logIn"></Navigate>;
};

export default PrivateRoute;
