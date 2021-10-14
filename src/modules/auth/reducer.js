import {
  LOGIN_REQUEST_SUCCESSFUL,
  LOGIN_REQUEST_FAILED,
  REGISTRATION_REQUEST_SUCCESSFUL,
  REGISTRATION_REQUEST_FAILED,
  LOGOUT,
} from "./actions";

const initialState = {
  email: null,
  token: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST_SUCCESSFUL:
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token,
      };
    case LOGIN_REQUEST_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case REGISTRATION_REQUEST_SUCCESSFUL:
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token,
      };
    case REGISTRATION_REQUEST_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
export default reducer;
