import React from "react";
import LeftLogo from "../../components/LeftLogo";
import BgSection from "../../components/BgSection";
import RegistrationForm from "./RegistrationForm";
import Grid from "@material-ui/core/Grid";

const RegistrationPage = () => {
  return (
    <Grid container component="main" alignItems="stretch" wrap="nowrap">
      <LeftLogo />
      <BgSection>
        <RegistrationForm />
      </BgSection>
    </Grid>
  );
};

export default RegistrationPage;
