const session = JSON.parse(localStorage.getItem("session"));
const user = JSON.parse(localStorage.getItem("user"));

let initialState = {
  loginStatus: session?.loginStatus || false,
  name: user?.name || null,
  surname: user?.surname || null,
  email: session?.email || null,
  token: session?.token || null,
  error: null,
};

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
        error: action.payload.error,
      };
    case "POST_REGISTRATION_SUCCESS":
      return {
        ...state,
        loginStatus: true,
        name: action.payload.name,
        surname: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
      };
    case "POST_REGISTRATION_FAILURE":
      return {
        ...state,
        error: action.payload.error,
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
