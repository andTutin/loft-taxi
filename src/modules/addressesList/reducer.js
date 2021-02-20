import { handleActions } from "redux-actions";
import { addressesListRequestSuccessful } from "./actions";

const addresses = JSON.parse(localStorage.getItem("addresses"));

const addressesList = handleActions(
  {
    [addressesListRequestSuccessful]: (state, action) => action.payload,
  },
  addresses || []
);

export default addressesList;
