import React, { useState } from "react";
import AuthContext from "./ctxs/authContext";
import RouteContext from "./ctxs/routeContext";
import { CssBaseline } from "@material-ui/core/";
import { LoginPage, RegistrationPage, MapPage, ProfilePage } from "./pages";

function App({ initialPage = "login" }) {
  const [loginStatus, setLoginStatus] = useState(false);
  const [activePage, setActivePage] = useState(initialPage);

  const login = (email = "test@test.com", password = "123123") => {
    setLoginStatus(true);
    setActivePage("map");
  };

  const logout = () => {
    setActivePage("login");
    setLoginStatus(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loginStatus,
        login,
        logout,
      }}
    >
      <RouteContext.Provider
        value={{
          activePage,
          setActivePage,
        }}
      >
        <CssBaseline>
          {
            {
              login: <LoginPage />,
              registration: <RegistrationPage />,
              map: <MapPage />,
              profile: <ProfilePage />,
            }[activePage]
          }
        </CssBaseline>
      </RouteContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
