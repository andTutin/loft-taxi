import React from "react";
import Header from "../../components/Header";
import ProfileFilled from "./ProfileFilled";
import ProfileForm from "./ProfileForm";
import { useSelector } from "react-redux";
import bg from "../../assets/img/bg-profile.png";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  profilePageBg: {
    background: `url(${bg}) top left / cover`,
  },
}));

const ProfilePage = () => {
  const classes = useStyles();
  const { isProfileOpened } = useSelector((state) => state.flags);

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
        {isProfileOpened ? <ProfileForm /> : <ProfileFilled />}
      </Grid>
    </>
  );
};

export default ProfilePage;
