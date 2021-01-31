import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 30px",
      }}
    >
      <h1>loft taxi logo</h1>
      <Nav />
    </div>
  );
};

export default Header;
