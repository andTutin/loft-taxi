import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../modules/auth";

const PrivateRoute = ({ path, component: RouteComponent }) => {
  const { token } = useAuth();

  return (
    <>
      {token ? (
        <Route path={path} component={RouteComponent} />
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default PrivateRoute;
