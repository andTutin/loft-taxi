import { PROFILE_CLOSE, PROFILE_OPEN } from ".";
import { LOADING_START, LOADING_DONE } from "./actions";
import { LOGOUT } from "../auth";

const initialState = {
  isLoading: false,
  isProfileOpened: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        isLoading: true,
      };

    case LOADING_DONE:
      return {
        ...state,
        isLoading: false,
      };

    case PROFILE_OPEN: {
      return {
        ...state,
        isProfileOpened: true,
      };
    }

    case PROFILE_CLOSE: {
      return {
        ...state,
        isProfileOpened: false,
      };
    }

    case LOGOUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default reducer;
