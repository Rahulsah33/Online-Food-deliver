import axios from "axios";
import {
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  REGISTER_SECCESS,
  LOGIN_SUCCESS,
  GET_USER_REQUEST,
} from "./ActionType";
import { api, API_URL } from "../../Config/api";

//  For User-Register

export const registerUser = (reqData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });

  try {
    const { data } = await axios.post(
      `${API_URL}/auth/signup`,
      reqData.userData
    );

    if (data.jwt) localStorage.setItem("jwt", data.jwt);
    if (data.role === "ROLE_RESTURANT_OWNER") {
      reqData.navigate("/admin/resturant");
    } else {
      reqData.navigate("/");
    }
    dispatch({ type: REGISTER_SECCESS, payload: data.jwt });

    console.log("Register Success", data);
  } catch (error) {
    console.log("Error", error);
  }
};

// For Login

export const loginUser = (reqData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const { data } = await axios.post(
      `${API_URL}/auth/signin`,
      reqData.userData
    );

    if (data.jwt) localStorage.setItem("jwt", data.jwt);
    if (data.role === "ROLE_RESTURANT_OWNER") {
      reqData.navigate("/admin/resturant");
    } else {
      reqData.navigate("/");
    }
    dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
    console.log("Login Success", data);
  } catch (error) {
    console.log("Error", error);
  }
};

// Getting-User

export const getUser = (jwt) => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });

  try {
    const { data } = await api.post(`/auth/signup`, {
      Headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({ type: REGISTER_SECCESS, payload: data.jwt });
    console.log("user_profile", data);
  } catch (error) {
    console.log("Error", error);
  }
};
