import React, { useState } from "react";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import MapPage from "./pages/MapPage";
import RegistrationPage from "./pages/RegistrationPage";
import "./App.css";

function App() {
  const [loginSatus, setLoginStatus] = useState(false);
  const [activePage, setActivePage] = useState(loginSatus ? "map" : "login");

  return (
    <div className="App">
      {
        {
          login: (
            <LoginPage
              setLoginStatus={setLoginStatus}
              changePage={setActivePage}
            />
          ),
          registration: (
            <RegistrationPage
              setLoginStatus={setLoginStatus}
              changePage={setActivePage}
            />
          ),
          map: (
            <MapPage
              setLoginStatus={setLoginStatus}
              changePage={setActivePage}
            />
          ),
          profile: (
            <ProfilePage
              setLoginStatus={setLoginStatus}
              changePage={setActivePage}
            />
          ),
        }[activePage]
      }
    </div>
  );
}

export default App;
