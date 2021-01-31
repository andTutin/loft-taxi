import React from "react";
import Nav from "./Nav";

const Header = ({ setLoginStatus, changePage }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 30px",
      }}
    >
      <h1>loft taxi logo</h1>
      <Nav setLoginStatus={setLoginStatus} changePage={changePage} />
    </div>
  );
};

export default Header;
