import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { CssBaseline } from "@material-ui/core/";
import { LoginPage, RegistrationPage, MapPage, ProfilePage } from "./pages";

function App() {
  return (
    <CssBaseline>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/registration" component={RegistrationPage} />
        <PrivateRoute path="/map" component={MapPage} />
        <PrivateRoute path="/profile" component={ProfilePage} />
        <Redirect to="/map" />
      </Switch>
    </CssBaseline>
  );
}

export default App;
