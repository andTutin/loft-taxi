import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import {
  loadingStart,
  loadingDone,
  profileOpen,
  profileClose,
} from "./actions";

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
  isLoading,
  isProfileOpened,
});
