import React from "react";
import Header from "../components/Header";

const MapPage = ({ setLoginStatus, changePage }) => {
  return (
    <>
      <Header setLoginStatus={setLoginStatus} changePage={changePage} />
      <h1>Future Map Page</h1>
    </>
  );
};

export default MapPage;
