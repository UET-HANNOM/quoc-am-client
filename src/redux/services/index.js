import { postService } from "container/common/callApi";
import { loadingAction, setTokenAction } from "redux/actions";

export const loginService = ({ email, password, callback }) => {
  return async (dispatch) => {
    dispatch(loadingAction(true));
    await postService("/api/auth", { email, password })
      .then((result) => {
        callback(true);
        dispatch(setTokenAction(result));
      })
      .catch((err) => {
        callback(err);
      })
      .finally(() => {
        dispatch(loadingAction(false));
      });
  };
};
