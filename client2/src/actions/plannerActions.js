import axios from "axios";
import {
  GET_ERRORS,
  GET_CURRENT_PLANNER,
  GET_PLANNERS,
  GET_PLANNER_ITEM,
  GET_PACKAGES,
  GET_OFFICE,
  ON_SUCCESS,
  ON_START,
  GET_PLANNER_ITEM_PACKAGES,
  SET_FILTERED_PLANNERS,
  SET_FILTERED_PLANNERS_TO_NULL,
  NO_RESULTS_FOUND,
  GET_RESULTS,
  GET_PROFILE,
  PACKAGES_LOADED,
  PROFILE_UNLOADED
} from "../types/types";
import { getCurrentProfile } from "./profileActions";
import {
  setLoading,
  setLoadingFalse,
  clearNoResults,
  clearErrors
} from "./common";

import isEmpty from "../utils/is-empty";

export const getPlanners = searchQuery => dispatch => {
  dispatch(setLoading());
  dispatch(clearNoResults());
  let url = "/api/planner";
  if (!isEmpty(searchQuery)) url = url.concat(searchQuery.url);
  console.log(url);
  axios
    .get(url)
    .then(planners => dispatch({ type: GET_RESULTS, payload: planners.data }))
    .then(() => dispatch(setLoadingFalse()))
    .catch(message =>
      dispatch({ type: NO_RESULTS_FOUND, payload: message.data })
    );
};

// Register About Planner
export const registerPlanner = (profile, history) => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/planner", profile)
    .then(() => history.push("/dashboard-toggler"))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//Register Planner Profile
export const registerPlannerProfile = (
  profile,
  profileCompleted,
  history
) => dispatch => {
  dispatch(setLoading());
  if (!profileCompleted) {
    axios
      .post("/api/planner/profile/new", profile)
      .then(profile =>
        dispatch({
          type: GET_PROFILE,
          payload: profile.data
        })
      )
      .then(() => history.push("/dashboard"))
      .then(() => history.push("/dashboard/packages"))
      .catch(err => {
        dispatch(setLoadingFalse());
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      });
  } else {
    axios
      .post("/api/planner/profile", profile)
      .then(profile =>
        dispatch({
          type: GET_PROFILE,
          payload: profile.data
        })
      )
      .then(() => dispatch(setLoadingFalse()))
      // .then(res => history.push("/dashboard"))
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      });
  }
};

//Get Planner by ID
export const getPlannerbyId = id => dispatch => {
  dispatch(setLoading());
  axios
    .get(`/api/planner/${id}`)
    .then(res =>
      dispatch({
        type: GET_PLANNER_ITEM,
        payload: res.data
      })
    )
    .then(() => dispatch(setLoadingFalse()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    );
};

//Adding Packages
export const addPackages = (
  packageFields,
  featureCompleted,
  history
) => dispatch => {
  if (!featureCompleted) {
    history.push("/dashboard/office");
    axios
      .post("/api/planner/packages/new", packageFields)
      .then(packages => {
        console.log(packages);
        dispatch({ type: GET_PACKAGES, payload: packages.data });
      })
      .then(() => dispatch(getCurrentProfile()));
  } else {
    dispatch(setLoading());
    axios
      .post("/api/planner/packages", packageFields)
      .then(packages =>
        dispatch({
          type: GET_PACKAGES,
          payload: packages.data
        })
      )
      .then(() => dispatch(setLoadingFalse()))
      .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
  }
};

//Getting Packages
export const getPackages = () => dispatch => {
  dispatch(setLoading());
  axios
    .get("/api/planner/packages")
    .then(res =>
      dispatch({
        type: GET_PACKAGES,
        payload: res.data
      })
    )
    .then(() => dispatch(setLoadingFalse()))
    .then(() =>
      dispatch({
        type: PACKAGES_LOADED,
        payload: true
      })
    )
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

//Getting Specific Planner Packages by ID
export const getPlannerItemPackages = user => dispatch => {
  dispatch(setLoading());
  axios
    .get(`/api/planner/packages/${user}`)
    .then(packages =>
      dispatch({ type: GET_PLANNER_ITEM_PACKAGES, payload: packages.data })
    )
    .then(() => dispatch(setLoadingFalse()))
    .catch(err => console.log(err));
};

//Adding Office
export const addPlannerOffice = officeFields => dispatch => {
  dispatch(setLoading());
  axios
    .post("/api/planner/office", officeFields)
    .then(office =>
      dispatch({
        type: GET_PROFILE,
        payload: office.data
      })
    )
    .then(() => dispatch(setLoadingFalse()))
    .catch(err => console.log(err));
};

//Adding Planner Images
export const addPlannerImages = uploaded => dispatch => {
  axios
    .post("/api/planner/images", uploaded)
    .then(res => console.log(res.status))
    .catch(err => console.log(err));
};

//Adding Keywords for Planner
export const addPlannerKeywords = keywords => dispatch => {
  axios
    .post("/api/planner/keywords", keywords)
    .then(profile =>
      dispatch({
        type: GET_PROFILE,
        payload: profile.data
      })
    )
    .catch(err => console.log(err));
};

export const onStartFormSubmission = () => {
  return {
    type: ON_START
  };
};

//Successfully Form Submissions
export const onSuccess = () => {
  return {
    type: ON_SUCCESS
  };
};

export const setFilteredPlannersToNull = () => {
  return {
    type: SET_FILTERED_PLANNERS_TO_NULL
  };
};
//Loading
