import React from "react";
import LeftLogo from "../../components/LeftLogo";
import BgSection from "../../components/BgSection";
import LoginForm from "./LoginForm";
import { Grid } from "@material-ui/core/";

const LoginPage = () => {
  return (
    <Grid container component="main" alignItems="stretch" wrap="nowrap">
      <LeftLogo />
      <BgSection>
        <LoginForm />
      </BgSection>
    </Grid>
  );
};

export default LoginPage;
