import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import {
  loginRequestSuccessful,
  registrationRequestSuccessful,
  logout,
} from "./actions";

const session = JSON.parse(localStorage.getItem("session"));

const token = handleActions(
  {
    [loginRequestSuccessful]: (state, action) => action.payload.token,
    [registrationRequestSuccessful]: (state, action) => action.payload.token,
    [logout]: () => null,
  },
  session?.token || null
);

const email = handleActions(
  {
    [loginRequestSuccessful]: (state, action) => action.payload.email,
    [registrationRequestSuccessful]: (state, action) => action.payload.email,
  },
  session?.email || null
);

export default combineReducers({
  token,
  email,
});
