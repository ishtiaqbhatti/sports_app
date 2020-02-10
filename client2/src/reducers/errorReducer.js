import {
  GET_LOGIN_ERRORS,
  GET_REGISTER_ERRORS,
  GET_ERRORS,
  CLEAR_ERRORS
} from "../types/types";

const initialState = {
  errors: null,
  loginErrors: null,
  registerErrors: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LOGIN_ERRORS:
      return {
        ...state,
        loginErrors: action.payload
      };
    case GET_REGISTER_ERRORS:
      return {
        ...state,
        registerErrors: action.payload
      };

    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null
      };
    default:
      return state;
  }
}
