import { Grid } from "@material-ui/core";
import React from "react";
import Header from "../../components/Header";
import ProfileFilled from "./ProfileFilled";
import ProfileForm from "./ProfileForm";
import { useSelector } from "react-redux";
import bg from "./bg_profile.png";

const ProfilePage = () => {
  const { isCardFilled } = useSelector((state) => state);

  return (
    <>
      <Grid
        container
        component="main"
        direction="column"
        justify="flex-start"
        wrap="nowrap"
        style={{ background: `url(${bg}) top left / cover` }}
      >
        <Header />
        {isCardFilled ? <ProfileFilled /> : <ProfileForm />}
      </Grid>
    </>
  );
};

export default ProfilePage;
