import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import {
  loadingStart,
  loadingDone,
  profileOpen,
  profileClose,
} from "./actions";
import { loginRequestFailed, registrationRequestFailed } from "../auth";
import { getCardRequestFailed, postCardRequestFailed } from "../payment";

const error = handleActions(
  {
    [loginRequestFailed]: (state, action) => action.payload,
    [registrationRequestFailed]: (state, action) => action.payload,
    [getCardRequestFailed]: (state, action) => action.payload,
    [postCardRequestFailed]: (state, action) => action.payload,
  },
  null
);

const isLoading = handleActions(
  {
    [loadingStart]: () => true,
    [loadingDone]: () => false,
  },
  false
);

const isProfileOpened = handleActions(
  {
    [profileOpen]: () => true,
    [profileClose]: () => false,
  },
  true
);

export default combineReducers({
  error,
  isLoading,
  isProfileOpened,
});
