import React from "react";
import ProfileDataSaved from "./ProfileDataSaved";
import ProfileForm from "./ProfileForm";
import { useSelector } from "react-redux";

const Profile = () => {
  const { isProfileOpened } = useSelector((state) => state.flags);

  return isProfileOpened ? <ProfileForm /> : <ProfileDataSaved />;
};

export default Profile;
