import React, { useContext } from "react";
import { AuthContext } from "../ctx/authContext";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ path, component: RouteComponent }) => {
  const { loginStatus } = useContext(AuthContext);

  return (
    <>
      {loginStatus ? (
        <Route path={path} component={RouteComponent} />
      ) : (
        <Redirect to="/registration" />
      )}
    </>
  );
};

export default PrivateRoute;
