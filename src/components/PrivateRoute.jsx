import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ path, component: RouteComponent }) => {
  const { loginStatus } = useSelector((state) => state.auth);

  return (
    <>
      {loginStatus ? (
        <Route path={path} component={RouteComponent} />
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default PrivateRoute;
