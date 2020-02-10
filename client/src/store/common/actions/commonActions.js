import { SET_LOADING_FALSE, SET_LOADING_TRUE } from "../types";
// Set Loading to true for Async Calls
export const setLoadingTrue = () => dispatch => {
  dispatch({ type: SET_LOADING_TRUE });
};

// Set Loading to false
export const setLoadingFalse = () => dispatch => {
  dispatch({ type: SET_LOADING_FALSE });
};

// Catch Errors
export const catchErrors = error => dispatch => {
  dispatch({ type: CATCH_ERRORS, payload: error.message });
};
