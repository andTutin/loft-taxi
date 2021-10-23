import { authActions, AuthAction } from "./types";

export interface DefaultRootState {
  email: string | null;
  token: string | null;
  error: string | null;
}
const initialState: DefaultRootState = {
  email: null,
  token: null,
  error: null,
};

const reducer = (
  state: DefaultRootState = initialState,
  action: AuthAction
): DefaultRootState => {
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

export const tokenSelector = (state: DefaultRootState): string | null =>
  state.token;
export const errorSelector = (state: DefaultRootState): string | null =>
  state.error;
export default reducer;
