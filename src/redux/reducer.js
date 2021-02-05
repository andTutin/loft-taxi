const session = JSON.parse(localStorage.getItem("session"));
const user = JSON.parse(localStorage.getItem("user"));

let initialState = {
  loginStatus: session?.loginStatus || false,
  name: user?.name || null,
  surname: user?.surname || null,
  email: session?.email || null,
  token: session?.token || null,
  isCardFilled: false,
  cardNumber: null,
  cardName: null,
  expiryDate: null,
  cvc: null,
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
    case "POST_CARD_SUCCESS":
      return {
        ...state,
        isCardFilled: true,
        cardNumber: action.payload.cardNumber,
        cardName: action.payload.cardName,
        expiryDate: action.payload.expiryDate,
        cvc: action.payload.cvc,
      };
    case "POST_CARD_FAILURE":
      return {
        ...state,
        error: action.payload.error,
      };
    case "GET_CARD_SUCCESS":
      return {
        ...state,
        isCardFilled: true,
        cardNumber: action.payload.cardNumber,
        cardName: action.payload.cardName,
        expiryDate: action.payload.expiryDate,
        cvc: action.payload.cvc,
      };
    case "LOGOUT":
      return {
        ...state,
        loginStatus: false,
      };
    case "EDIT_PROFILE":
      return {
        ...state,
        isCardFilled: false,
      };
    default:
      return state;
  }
};

export default reducer;
