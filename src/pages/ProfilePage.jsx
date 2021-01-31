import React from "react";
import Header from "../components/Header";

const ProfilePage = ({ setLoginStatus, changePage }) => {
  return (
    <>
      <Header setLoginStatus={setLoginStatus} changePage={changePage} />
      <h1>Future Profile Page</h1>
    </>
  );
};

export default ProfilePage;
