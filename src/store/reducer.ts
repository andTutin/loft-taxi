import { combineReducers } from "redux";
import auth from "../modules/auth";
import payment from "../modules/payment";
import addressesList from "../modules/addressesList";
import route from "../modules/route";
import flags from "../modules/flags";

const combinedReducers = combineReducers({
  auth,
  payment,
  addressesList,
  route,
  flags,
});

export type DefaultRootState = ReturnType<typeof combineReducers>;

export default combinedReducers;
