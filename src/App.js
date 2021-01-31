import React, { useState } from "react";
import AuthContext from "./ctxs/authContext";
import RouteContext from "./ctxs/routeContext";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import MapPage from "./pages/MapPage";
import RegistrationPage from "./pages/RegistrationPage";
import "./App.css";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [activePage, setActivePage] = useState("login");

  const login = (email = 'test@test.com', password = '123123') => {
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
          setActivePage,
        }}
      >
        <div className="App" style={{height: '100vh'}}>
          {
            {
              login: <LoginPage />,
              registration: <RegistrationPage />,
              map: <MapPage />,
              profile: <ProfilePage />,
            }[activePage]
          }
        </div>
      </RouteContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
