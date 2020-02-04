import {
  LOADING,
  SET_LOADING_FALSE,
  ADMIN_DATA_LOADED,
  CLEAR_NO_RESULTS,
  CLEAR_ERRORS,
  GET_TRANSLATED_LABELS,
  DUMMY_ACTION,
  GET_LANGUAGE,
  RESET_RESULTS,
  RESET_PACK_AND_SERV
} from "../types/types";
import getLabels from "../utils/getLabels";

export const setLoading = () => {
  return {
    type: LOADING
  };
};

//Loading False
export const setLoadingFalse = () => {
  return {
    type: SET_LOADING_FALSE
  };
};

export const adminDataLoaded = () => {
  return {
    type: ADMIN_DATA_LOADED
  };
};

export const clearNoResults = () => {
  return {
    type: CLEAR_NO_RESULTS
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const getTranslatedLabels = lang => dispatch => {
  const findLabels = getLabels(lang);
  dispatch({
    type: GET_TRANSLATED_LABELS,
    payload: findLabels
  });

  dispatch({
    type: GET_LANGUAGE,
    payload: lang
  });
};

export const resetResults = () => dispatch => {
  dispatch({
    type: RESET_RESULTS
  });
};

export const resetPackAndServ = () => dispatch => {
  dispatch({
    type: RESET_PACK_AND_SERV
  });
};
