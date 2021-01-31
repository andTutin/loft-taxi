import React from "react";
import logo from "../logo.svg";

const LeftLogo = () => {
  return (
    <div
      style={{
        flex: "1",
        height: "100%",
        background: "#1C1A19",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={logo} alt="Логотип Лофт Такси" width="192px" height="228px" />
    </div>
  );
};

export default LeftLogo;
