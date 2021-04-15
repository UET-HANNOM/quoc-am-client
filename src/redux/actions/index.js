import { createActions } from "redux-actions";

const actions = createActions({
  PLAY_INTRO_ACTION: null,
  SET_TOKEN_ACTION: null,
  LOGIN_ACTION: ({email, password, callback}) => ({email, password, callback}),
  SET_AUTH_ACTION: null,
});
export const {
  playIntroAction,
  setTokenAction,
  loginAction,
  setAuthAction,
} = actions;