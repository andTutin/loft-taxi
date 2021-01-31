import React from "react";
import Nav from "./Nav";
import logo from "../logoHeader.svg";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 30px",
        background: "#1C1A19",
      }}
    >
      <img src={logo} alt="Лофт Такси Лого"/>
      <Nav />
    </div>
  );
};

export default Header;
