import { FlagsAction, flagsActions } from "./types";

export type FlagsState = {
  isLoading: boolean;
  isProfileOpened: boolean;
};

const initialState: FlagsState = {
  isLoading: false,
  isProfileOpened: true,
};

const reducer = (state = initialState, action: FlagsAction) => {
  switch (action.type) {
    case flagsActions.LOADING_START:
      return {
        ...state,
        isLoading: true,
      };

    case flagsActions.LOADING_DONE:
      return {
        ...state,
        isLoading: false,
      };

    case flagsActions.PROFILE_OPEN: {
      return {
        ...state,
        isProfileOpened: true,
      };
    }

    case flagsActions.PROFILE_CLOSE: {
      return {
        ...state,
        isProfileOpened: false,
      };
    }

    default:
      return state;
  }
};

export default reducer;
