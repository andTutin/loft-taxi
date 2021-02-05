const session = JSON.parse(localStorage.getItem("session"));

let initialState = {
  loginStatus: false,
  email: null,
  token: null,
  error: null,
};

if (session) {
  initialState = {
    ...initialState,
    loginStatus: session.loginStatus,
    email: session.email,
    token: session.token,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_LOGIN_SUCCESS":
      return {
        ...state,
        loginStatus: true,
        email: action.payload.email,
        token: action.payload.token,
      };
    case "POST_LOGIN_FAILURE":
      return {
        ...state,
        error: action.payload.error
      };
    case "LOGOUT":
      return {
        ...state,
        loginStatus: false,
      };
    default:
      return state;
  }
};

export default reducer;
