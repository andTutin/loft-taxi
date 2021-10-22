import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { CssBaseline } from "@material-ui/core/";
import Auth from "./components/Auth";
import Main from "./components/Main";

function App() {
  return (
    <CssBaseline>
      <Switch>
        <Route path="/login" component={Auth} />
        <Route path="/registration" component={Auth} />
        <PrivateRoute path="/order" exact component={Main} />
        <PrivateRoute path="/profile" exact component={Main} />
        <Redirect to="/order" />
      </Switch>
    </CssBaseline>
  );
}

export default App;
