import React from "react";
import { FormControl, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useAddressesList from "../../../modules/addressesList/useAddressesList";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    boxSizing: "border-box",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  cardsBlock: {
    padding: "30px 0",
  },
  cardWrapper: {
    minWidth: "172px",
  },
  card: {
    padding: "15px",
    cursor: "pointer",
    opacity: "100%",
  },
  cardNotActive: {
    padding: "15px",
    cursor: "pointer",
    opacity: "50%",
  },
}));

const RouteSelector = ({ from, setFrom, to, setTo }) => {
  const classes = useStyles();
  const { addresses } = useAddressesList();

  return (
    <>
      <FormControl className={classes.formControl}>
        <Select
          native
          labelId="from"
          id="from"
          defaultValue={from}
          onChange={setFrom}
          label="from"
        >
          <option value="" disabled>
            Откуда
          </option>
          {addresses
            .filter((item) => item.address !== to)
            .map((item) => {
              return (
                <option key={item.id} value={item.address}>
                  {item.address}
                </option>
              );
            })}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select
          native
          labelId="where"
          id="where"
          defaultValue={to}
          onChange={setTo}
          label="where"
        >
          <option value="" disabled>
            Куда
          </option>
          {addresses
            .filter((item) => item.address !== from)
            .map((item) => {
              return (
                <option key={item.id} value={item.address}>
                  {item.address}
                </option>
              );
            })}
        </Select>
      </FormControl>
    </>
  );
};

export default React.memo(RouteSelector);
