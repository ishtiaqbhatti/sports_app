import { SET_LOADING_FALSE, SET_LOADING_TRUE, CATCH_ERRORS } from "../types";

const initialState = {
  loading: false,
  error: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_TRUE:
      return {
        ...state,
        loading: true
      };

    case SET_LOADING_FALSE:
      return {
        ...state,
        loading: false
      };

    case CATCH_ERRORS:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
}
