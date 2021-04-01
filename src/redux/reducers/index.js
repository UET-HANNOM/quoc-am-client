import {handleActions} from 'redux-actions';
import { playIntroAction } from '../actions';
const initialState = {
  isLoading: false,
  playIntro: false,
};
export default handleActions(
  {
    // [onLoadingAction.toString()]: (state) => ({...state, isLoading: true}),
    // [offLoadingAction.toString()]: (state) => ({...state, isLoading: false}),
    // [setDataAction.toString()]: (state, {payload}) => ({
    //   ...state,
    //   [payload.dataName]: payload.result,
    // }),
    // [setTokenAction.toString()]:(state,{payload})=>({
    //   ...state,
    //   token:payload
    // }),
    [playIntroAction.toString()]: (state, {payload})=>({
      ...state,
      playIntro: payload
    })
  },
  initialState,
);