export const POST_CARD_REQUEST = "POST_CARD_REQUEST";
export const POST_CARD_REQUEST_SUCCESSFUL = "POST_CARD_REQUEST_SUCCESSFUL";
export const POST_CARD_REQUEST_FAILED = "POST_CARD_REQUEST_FAILED";

export const GET_CARD_REQUEST = "GET_CARD_REQUEST";
export const GET_CARD_REQUEST_SUCCESSFUL = "GET_CARD_REQUEST_SUCCESSFUL";
export const GET_CARD_REQUEST_FAILED = "GET_CARD_REQUEST_FAILED";

export const postCardRequest = ({
  cardNumber,
  expiryDate,
  cardName,
  cvc,
  token,
}) => ({
  type: POST_CARD_REQUEST,
  payload: {
    cardNumber,
    expiryDate,
    cardName,
    cvc,
    token,
  },
});

export const postCardRequestSuccessful = ({
  cardNumber,
  expiryDate,
  cardName,
  cvc,
}) => ({
  type: POST_CARD_REQUEST_SUCCESSFUL,
  payload: {
    cardNumber,
    expiryDate,
    cardName,
    cvc,
  },
});

export const postCardRequestFailed = (error) => ({
  type: POST_CARD_REQUEST_FAILED,
  error,
});

export const getCardRequest = (token) => ({
  type: GET_CARD_REQUEST,
  token,
});

export const getCardRequestSuccessful = ({
  cardNumber,
  cardName,
  expiryDate,
  cvc,
}) => ({
  type: GET_CARD_REQUEST_SUCCESSFUL,
  payload: {
    cardNumber,
    expiryDate,
    cardName,
    cvc,
  },
});

export const getCardRequestFailed = (error) => ({
  type: GET_CARD_REQUEST_FAILED,
  error,
});
