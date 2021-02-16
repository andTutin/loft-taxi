import { combineReducers } from "redux";
import auth from "../modules/auth";
import payment from "../modules/payment";
import addressesList from "../modules/addressesList";
import route from "../modules/route";
import helpers from "../modules/helpers";

export default combineReducers({
  auth,
  payment,
  addressesList,
  route,
  helpers,
});
