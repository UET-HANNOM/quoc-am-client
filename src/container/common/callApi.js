import axios from "axios";
import { store } from "redux/store";

export const HOST_API = "localhost:5000";
// const RESPONSE_STATUS = {
//   SUCCESS: 200,
//   BAD_REQUEST: 400,
//   INTERNAL_SERVER_ERROR: 500,
//   FORBIDDEN: 403,
// };
export const postService = async (url, body) => {
  try {
    const headers = {
      Accept: "application/json ",
      "Content-Type": "application/json",
    };
    const token = store.getState().token;
    if (token) {
      headers["x-auth-token"] = token;
    }

    const response = await axios.post(
      `${HOST_API + url}`,
      JSON.stringify(body),
      {
        headers: headers,
        withCredentials: true,
      }
    );

    if (response.status >= 200 && response.status <= 210) {
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.error.split(":");
      const res = {
        status: error.response.status,
        errorMessage: errorMessage[errorMessage.length - 1],
        data: error.response.data,
      };
      throw res;
    } else {
      throw error;
    }
  }
};
export const getService = async (url, params) => {
  try {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const token = store.getState().token;
    if (token) {
      headers["x-auth-token"] = token;
    }

    let queryString = "";
    if (params) {
      queryString = `?${Object.keys(params)
        .map((key) => `${key}=${params[key] || ""}`)
        .join("&")}`;
    }
    const response = await axios.get(`${HOST_API}${url}${queryString}`, {
      headers,
    });
    if (response.status >= 200 && response.status <= 210) {
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.error.split(":");
      const res = {
        status: error.response.status,
        errorMessage: errorMessage[errorMessage.length - 1],
        data: error.response.data,
      };
      throw res;
    } else {
      throw error;
    }
  }
};
export const putService = async (url, body) => {
  try {
    const headers = {
      Accept: "application/json ",
      "Content-Type": "application/json",
    };
    const token = store.getState().token;
    if (token) {
      headers["x-auth-token"] = token;
    }

    const response = await axios.put(
      `${HOST_API + url}`,
      JSON.stringify(body),
      {
        headers: headers,
        withCredentials: true,
      }
    );

    if (response.status >= 200 && response.status <= 210) {
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.error.split(":");
      const res = {
        status: error.response.status,
        errorMessage: errorMessage[errorMessage.length - 1],
        data: error.response.data,
      };
      throw res;
    } else {
      throw error;
    }
  }
};
export const deleteService = async (url, params) => {
  try {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const token = store.getState().token;
    if (token) {
      headers["x-auth-token"] = token;
    }

    let queryString = "";
    if (params) {
      queryString = `?${Object.keys(params)
        .map((key) => `${key}=${params[key] || ""}`)
        .join("&")}`;
    }
    const response = await axios.get(`${HOST_API}${url}${queryString}`, {
      headers,
    });
    if (response.status >= 200 && response.status <= 210) {
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data.error.split(":");
      const res = {
        status: error.response.status,
        errorMessage: errorMessage[errorMessage.length - 1],
        data: error.response.data,
      };
      throw res;
    } else {
      throw error;
    }
  }
};
