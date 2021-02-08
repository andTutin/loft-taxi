import React /*, { useState }*/ from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./Card";
import standart from "./standart.png";
import premium from "./premium.png";
import business from "./business.png";

const useStyles = makeStyles((theme) => ({
  cardsBlock: {
    padding: "30px 0",
    minHeight: "300px",
  },
}));

const CardsBlock = ({ status, setStatus }) => {
  const classes = useStyles();
  const checkActive = (card) => (card === status ? true : false);

  const cardClickHandler = (card) => {
    setStatus(card);
  };

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="stretch"
      wrap="nowrap"
      spacing={3}
      className={classes.cardsBlock}
    >
      <Card
        status="Стандарт"
        price="150"
        car={standart}
        isActive={checkActive("Стандарт")}
        setActive={cardClickHandler}
      />
      <Card
        status="Премиум"
        price="250"
        car={premium}
        isActive={checkActive("Премиум")}
        setActive={cardClickHandler}
      />
      <Card
        status="Бизнес"
        price="350"
        car={business}
        isActive={checkActive("Бизнес")}
        setActive={cardClickHandler}
      />
    </Grid>
  );
};

export default CardsBlock;
