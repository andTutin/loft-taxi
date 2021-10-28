import { authActions, AuthAction } from "./types";

interface AuthState {
  email: string | null;
  token: string | null;
  error: string | null;
}
const initialState: AuthState = {
  email: null,
  token: null,
  error: null,
};

const reducer = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case authActions.LOGIN_REQUEST_SUCCESSFUL:
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token,
      };
    case authActions.LOGIN_REQUEST_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case authActions.REGISTRATION_REQUEST_SUCCESSFUL:
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token,
      };
    case authActions.REGISTRATION_REQUEST_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case authActions.LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
