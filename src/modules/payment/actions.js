import { createAction } from "redux-actions";

const POST_CARD_REQUEST = "POST_CARD_REQUEST";
const POST_CARD_REQUEST_SUCCESSFUL = "POST_CARD_REQUEST_SUCCESSFUL";
const POST_CARD_REQUEST_FAILED = "POST_CARD_REQUEST_FAILED";

const GET_CARD_REQUEST = "GET_CARD_REQUEST";
const GET_CARD_REQUEST_SUCCESSFUL = "GET_CARD_REQUEST_SUCCESSFUL";
const GET_CARD_REQUEST_FAILED = "GET_CARD_REQUEST_FAILED";

export const postCardRequest = createAction(POST_CARD_REQUEST);
export const postCardRequestSuccessful = createAction(
  POST_CARD_REQUEST_SUCCESSFUL
);
export const postCardRequestFailed = createAction(POST_CARD_REQUEST_FAILED);

export const getCardRequest = createAction(GET_CARD_REQUEST);
export const getCardRequestSuccessful = createAction(
  GET_CARD_REQUEST_SUCCESSFUL
);
export const getCardRequestFailed = createAction(GET_CARD_REQUEST_FAILED);
