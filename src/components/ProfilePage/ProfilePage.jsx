import React from "react";
import { Header } from "../Header";
import ProfileDataSaved from "./ProfileDataSaved";
import ProfileForm from "./ProfileForm";
import { useSelector } from "react-redux";
import profileBG from "../../assets/backgrounds/profile.png";
import WithBackground from "../WithBackground";
import { Grid } from "@material-ui/core";

export const ProfilePage = () => {
  const { isProfileOpened } = useSelector((state) => state.flags);

  return (
    <>
      <Grid
        container
        component="main"
        direction="column"
        justify="flex-start"
        wrap="nowrap"
      >
        <Header />
        <WithBackground background={profileBG}>
          {isProfileOpened ? <ProfileForm /> : <ProfileDataSaved />}
        </WithBackground>
      </Grid>
    </>
  );
};
