export enum flagsActions {
  LOADING_START = "LOADING_START",
  LOADING_DONE = "LOADING_DONE",
  PROFILE_OPEN = "PROFILE_OPEN",
  PROFILE_CLOSE = "PROFILE__CLOSE",
}

export type LoadingStartAction = { type: typeof flagsActions.LOADING_START };
export type LoadingDoneAction = { type: typeof flagsActions.LOADING_DONE };
export type ProfileOpenAction = { type: typeof flagsActions.PROFILE_OPEN };
export type ProfileCloseAction = { type: typeof flagsActions.PROFILE_CLOSE };

export type FlagsAction =
  | LoadingStartAction
  | LoadingDoneAction
  | ProfileOpenAction
  | ProfileCloseAction;
