import React from "react";
import Header from "../../components/Header";
import ProfileFilled from "./ProfileFilled";
import ProfileForm from "./ProfileForm";
import { useSelector } from "react-redux";
import bg from "./bg_profile.png";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  profilePageBg: {
    background: `url(${bg}) top left / cover`,
  },
}));

const ProfilePage = () => {
  const classes = useStyles();
  const { isProfileOpened } = useSelector((state) => state);

  if (isProfileOpened) {
    return (
      <>
        <Grid
          container
          component="main"
          direction="column"
          justify="flex-start"
          wrap="nowrap"
          className={classes.profilePageBg}
        >
          <Header />
          <ProfileForm />
        </Grid>
      </>
    );
  }

  return (
    <>
      <Grid
        container
        component="main"
        direction="column"
        justify="flex-start"
        wrap="nowrap"
        className={classes.profilePageBg}
      >
        <Header />
        <ProfileFilled />
      </Grid>
    </>
  );
};

export default ProfilePage;
