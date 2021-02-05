import { Grid } from "@material-ui/core";
import React from "react";
import Header from "../../components/Header";
import ProfileForm from "./ProfileForm";

const ProfilePage = () => {
  return (
    <>
      <Grid container component="main" direction="column" justify="flex-start" wrap="nowrap">
        <Header />
        <ProfileForm />
      </Grid>
    </>
  );
};

export default ProfilePage;
