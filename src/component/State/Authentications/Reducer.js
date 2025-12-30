import { error } from "ajv/dist/vocabularies/applicator/dependencies";
import {
  ADD_TO_FAVORITE_REQUEST,
  GET_USER_REQUEST,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_SECCESS,
} from "./ActionType";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  jwt: null,
  favorites: [],
  success: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
    case ADD_TO_FAVORITE_REQUEST:
      return { ...state, isLoading: true, error: null, success: null };

    case REGISTER_SECCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jwt: action.payload,
        success: "Register Success",
      };

    default:
      break;
  }
};
