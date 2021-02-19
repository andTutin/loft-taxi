import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { CssBaseline } from "@material-ui/core/";
import { OrderPage } from "./components/OrderPage";
import { LoginPage } from "./components/LoginPage";
import { RegistrationPage } from "./components/RegistrationPage";
import { ProfilePage } from "./components/ProfilePage";

function App() {
  return (
    <CssBaseline>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/registration" component={RegistrationPage} />
        <PrivateRoute path="/map" component={OrderPage} />
        <PrivateRoute path="/profile" component={ProfilePage} />
        <Redirect to="/map" />
      </Switch>
    </CssBaseline>
  );
}

export default App;
