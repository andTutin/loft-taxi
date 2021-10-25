import {
  CardData,
  GetCardRequestFailedAction,
  GetCardRequestsuccessfullAction,
  paymentActions,
  PostCardRequestAction,
  PostCardRequestFailedAction,
  PostCardRequestSuccessfullAction,
} from "./types";

export const postCardRequest = ({
  cardNumber,
  expiryDate,
  cardName,
  cvc,
  token,
}: CardData & { token: string }): PostCardRequestAction => ({
  type: paymentActions.POST_CARD_REQUEST,
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
}: CardData): PostCardRequestSuccessfullAction => ({
  type: paymentActions.POST_CARD_REQUEST_SUCCESSFUL,
  payload: {
    cardNumber,
    expiryDate,
    cardName,
    cvc,
  },
});

export const postCardRequestFailed = (
  error: any
): PostCardRequestFailedAction => ({
  type: paymentActions.POST_CARD_REQUEST_FAILED,
  error,
});

export const getCardRequest = (token: string) => ({
  type: paymentActions.GET_CARD_REQUEST,
  token,
});

export const getCardRequestSuccessful = ({
  cardNumber,
  cardName,
  expiryDate,
  cvc,
}: CardData): GetCardRequestsuccessfullAction => ({
  type: paymentActions.GET_CARD_REQUEST_SUCCESSFUL,
  payload: {
    cardNumber,
    expiryDate,
    cardName,
    cvc,
  },
});

export const getCardRequestFailed = (
  error: any
): GetCardRequestFailedAction => ({
  type: paymentActions.GET_CARD_REQUEST_FAILED,
  error,
});
