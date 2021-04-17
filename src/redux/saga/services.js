import { postService } from "container/common/callApi";

export const loginService = async (email, password) => {
  try {
    return await postService("/api/auth", { email, password });
  } catch (error) {
    throw error;
  }
};
