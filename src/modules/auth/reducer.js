import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import {
  loginRequestSuccessful,
  registrationRequestSuccessful,
  logout,
} from "./actions";

const session = JSON.parse(localStorage.getItem("session"));

const loginStatus = handleActions(
  {
    [loginRequestSuccessful]: () => true,
    [registrationRequestSuccessful]: () => true,
    [logout]: () => false,
  },
  session?.loginStatus || false
);

const token = handleActions(
  {
    [loginRequestSuccessful]: (state, action) => action.payload.token,
    [registrationRequestSuccessful]: (state, action) => action.payload.token,
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
  loginStatus,
  token,
  email,
});
