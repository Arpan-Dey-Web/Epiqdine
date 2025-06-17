import React, { use } from "react";
import { AuthContext } from "../Component/Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../Component/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }
  if (user && user.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/logIn"></Navigate>;
};

export default PrivateRoute;
