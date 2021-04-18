import { getService, postService } from "container/common/callApi";
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
export const signUpService = ({
  email,
  password,
  lastname,
  firstname,
  callback,
}) => {
  return async (dispatch) => {
    dispatch(loadingAction(true));
    await postService("/api/users", { email, password, lastname, firstname })
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

export const getPostInGroup = ({page, callback}) => {
  return async (dispatch) => {
    dispatch(loadingAction(true));
    await getService(`/api/v1/posts/paging/${page}`)
      .then((result) => {
        callback(result, false);
      })
      .catch((err) => {
        callback("", err);
      })
      .finally(() => {
        dispatch(loadingAction(false));
      });
  };
}