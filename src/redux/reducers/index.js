import {handleActions} from 'redux-actions';
import { loadingAction, playIntroAction, setAuthAction, setTokenAction } from '../actions';
const initialState = {
  isLoading: false,
  playIntro: false,
  isAuth: false,
  useInfo: {},
  token: "",
};
export default handleActions(
  {
    [loadingAction.toString()]: (state, {payload})=>({
      ...state,
      isLoading: payload
    }),
    [playIntroAction.toString()]: (state, {payload})=>({
      ...state,
      playIntro: payload
    }),
    [setTokenAction.toString()]: (state, {payload})=>({
      ...state,
      token: payload
    }),
    [setAuthAction.toString()]: (state, {payload})=>({
      ...state,
      useInfo: payload.useInfo,
    }),
  },
  initialState,
);