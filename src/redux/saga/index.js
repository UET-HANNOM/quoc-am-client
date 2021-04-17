import { all, call, fork, put, takeEvery, takeLatest } from "redux-saga/effects";
import { loadingAction, loginAction, setTokenAction } from "redux/actions";
import { loginService } from "./services";

function* loginWatch() {
  yield takeEvery(loginAction, function* ({ payload }) { debugger
    try {
      yield put(loadingAction(true));
      const { email, password, callback } = payload;
      const result = yield call(loginService, email, password);
      if (result) {
        callback(true);
        yield put(setTokenAction(result.token));
      } else {
        callback(false);
      }
    } catch (error) {
      throw error;
    } finally {
      yield put(loadingAction(false));
    }
  });
}

export default function* rootSaga() {
  yield all([loginWatch].map(fork));
}