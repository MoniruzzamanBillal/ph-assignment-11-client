import React from "react";
import UseAuthContext from "../Hooks/UseAuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = UseAuthContext();

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={`/login`} />;
};

export default PrivateRoute;
