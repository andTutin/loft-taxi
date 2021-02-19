import React from "react";
import AuthPagesLogo from "../AuthPagesLogo";
import WithBackground from "../WithBackground";
import LoginForm from "./LoginForm";
import { Grid } from "@material-ui/core/";
import authBG from "../../assets/backgrounds/auth.jpg";

export const LoginPage = () => {
  return (
    <Grid container component="main" alignItems="stretch" wrap="nowrap">
      <AuthPagesLogo />
      <WithBackground background={authBG}>
        <LoginForm />
      </WithBackground>
    </Grid>
  );
};
