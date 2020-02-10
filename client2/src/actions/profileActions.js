import {
  GET_PROFILE,
  GET_ERRORS,
  SEARCH_RESULTS,
  PROFILE_LOADED,
  GET_PLANNERS,
  GET_VENDORS,
  GET_PLANNER_ITEM,
  PROFILES_LOADING,
  GET_PACKAGES,
  GET_PLANNER_ITEM_PACKAGES,
  GET_KEYWORDS,
  SUCCESSFULLY_RESET_PASSWORD,
  GET_RESET_PASSWORD_ERRORS,
  CLEAR_ERRORS,
  GET_CURRENT_PROFILE,
  GET_DASHBOARD_LANG
} from "../types/types";
import axios from "axios";
import getLables from "../utils/getLabels";

import { setLoading, setLoadingFalse } from "./common";

export const getLoginToggler = (history, user) => dispatch => {
  dispatch(clearErrors());
  dispatch(setLoading());
  axios
    .get("/api/profile")
    .then(res => {
      if (!res.data) {
        const userType =
          user.type === "planner" ? "/about-planner" : "/about-vendor";
        history.push(userType);
      } else {
        const labels = getLables(res.data.lang);
        dispatch({ type: GET_DASHBOARD_LANG, payload: labels });
        dispatch({ type: GET_PROFILE, payload: res.data });
      }

      if (!res.data.user.profileCompleted) {
        history.push("/dashboard/profile");
      } else if (res.data.user.profileCompleted && user.type === "planner") {
        history.push("/dashboard/packages");
      } else if (res.data.user.profileCompleted && user.type === "vendor") {
        history.push("/dashboard/services");
      }
    })
    .then(() => dispatch(setLoadingFalse()))
    .then(() =>
      dispatch({
        type: PROFILE_LOADED,
        payload: true
      })
    )
    .catch(() => dispatch(setLoadingFalse()));
};

export const getCurrentProfile = () => dispatch => {
  dispatch(setLoading());
  axios
    .get("/api/profile")
    .then(profile => {
      const labels = getLables(profile.data.lang);
      dispatch({ type: GET_DASHBOARD_LANG, payload: labels });
      dispatch({
        type: GET_PROFILE,
        payload: profile.data
      });
    })
    .then(() => dispatch(setLoadingFalse()))
    .catch(() => dispatch(setLoadingFalse()));
};

// export const getDashboardLanguage = (lang) => {
//   dispatch({
//     type: GET_DASHBOARD_LANGUAGE,

//   })
// }

export const addVendorProfile = profileFields => dispatch => {
  axios
    .post("/api/profile/vendor", profileFields)
    .then(profile => console.log(profile))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const addVendorServices = serviceFields => dispatch => {
  axios
    .post("/api/profile/vendor", serviceFields)
    .then(profile => console.log(profile))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

//Adding Keywords for Planner and Vendor
export const addKeywords = keywords => dispatch => {
  axios
    .post("/api/profile/keywords", keywords)
    .then(keywords => console.log(keywords))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

//Getting Keywords for Current Planner/Vendor
export const getKeywords = () => dispatch => {
  axios
    .get("/api/profile/keywords")
    .then(res => dispatch({ type: GET_KEYWORDS, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

export const searchProfiles = (searchFields, history) => dispatch => {
  dispatch(setProfilesLoading());
  axios
    .post("/api/profile/search", searchFields)
    .then(results => dispatch({ type: SEARCH_RESULTS, payload: results.data }))
    .then(history.push("/search"))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const getPlannerItem = id => dispatch => {
  dispatch(setProfilesLoading());
  axios
    .get(`/api/profile/planner/${id}`)
    .then(plannerItem =>
      dispatch({ type: GET_PLANNER_ITEM, payload: plannerItem.data })
    )
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const setProfilesLoading = () => {
  return {
    type: PROFILES_LOADING
  };
};

const httpClient = axios.create();
httpClient.defaults.timeout = 5000;

export const uploadImage = image => dispatch => {
  const formData = new FormData();
  formData.append("image", image);

  httpClient
    .post("/api/image-upload", formData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

export const resetPassword = passwordFields => dispatch => {
  axios
    .post("/api/profile/reset", passwordFields)

    .then(response =>
      dispatch({ type: SUCCESSFULLY_RESET_PASSWORD, payload: response.data })
    )
    .then(() => dispatch(clearErrors()))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
