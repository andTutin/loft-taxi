import {
  flagsActions,
  LoadingDoneAction,
  LoadingStartAction,
  ProfileCloseAction,
  ProfileOpenAction,
} from "./types";

export const loadingStart = (): LoadingStartAction => ({
  type: flagsActions.LOADING_START,
});

export const loadingDone = (): LoadingDoneAction => ({
  type: flagsActions.LOADING_DONE,
});

export const profileOpen = (): ProfileOpenAction => ({
  type: flagsActions.PROFILE_OPEN,
});

export const profileClose = (): ProfileCloseAction => ({
  type: flagsActions.PROFILE_CLOSE,
});
