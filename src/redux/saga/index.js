import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { loginAction, setTokenAction } from "redux/actions";
import { loginService } from "./services";

function* loginWatch() {
  yield takeLatest(loginAction, function* ({ payload }) {
    debugger;
    try { debugger;
      const { email, password, callback } = payload;
      const result = yield call(loginService, email, password);
     
      if (result) {
        callback(true);
        yield put(setTokenAction(result.token));
      } else {
        callback(false);
      }
    } catch (error) {
      debugger;
      throw error;
    }
  });
}

export default function* rootSaga() {
  yield all([loginWatch].map(fork));
}
