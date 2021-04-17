import { createActions } from "redux-actions";

const actions = createActions({
  LOADING_ACTION: null,
  PLAY_INTRO_ACTION: null,
  SET_TOKEN_ACTION: null,
  LOGIN_ACTION: ({email, password, callback}) => ({email, password, callback}),
  SET_AUTH_ACTION: null,
});
export const {
  loadingAction,
  playIntroAction,
  setTokenAction,
  loginAction,
  setAuthAction,
} = actions;