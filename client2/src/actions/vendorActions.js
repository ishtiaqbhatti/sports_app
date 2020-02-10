import axios from "axios";
import {
  GET_ERRORS,
  NO_RESULTS_FOUND,
  GET_VENDOR_ITEM,
  GET_VENDOR_ITEM_SERVICES,
  GET_VENDOR_SERVICES,
  CLEAR_ERRORS,
  ON_SUCCESS_VENDOR_PROFILE,
  ON_FAIL_VENDOR_PROFILE,
  CLEAR_SUCCESS_MESSAGES,
  CLEAR_LOCATION_OPTIONS,
  GET_VENDORS,
  SET_FILTERED_VENDORS,
  SET_FILTERED_VENDORS_TO_NULL,
  GET_RESULTS,
  GET_PROFILE
} from "../types/types";
import { getCurrentProfile } from "./profileActions";
import isEmpty from "../utils/is-empty";
import {
  setLoading,
  setLoadingFalse,
  clearNoResults,
  clearErrors
} from "./common";

// Getting List of All Vendors

export const getVendors = searchQuery => dispatch => {
  dispatch(setLoading());
  dispatch(clearNoResults());
  let url = "/api/vendor";
  if (!isEmpty(searchQuery)) url = url.concat(searchQuery.url);
  axios
    .get(url)
    .then(vendors => dispatch({ type: GET_RESULTS, payload: vendors.data }))
    .then(() => dispatch(setLoadingFalse()))
    .catch(message =>
      dispatch({ type: NO_RESULTS_FOUND, payload: message.data })
    );
};

//Getting Vendor Services
export const getVendorServices = () => dispatch => {
  axios
    .get("/api/vendor/services/dashboard/all")
    .then(services => {
      dispatch({ type: GET_VENDOR_SERVICES, payload: services.data });
    })
    .catch(err => console.log(err));
};

//Getting Vendor by ID
export const getVendorbyId = id => dispatch => {
  dispatch(setLoading());
  axios
    .get(`/api/vendor/${id}`)
    .then(res =>
      dispatch({
        type: GET_VENDOR_ITEM,
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

//Getting Specific Planner Packages by ID
export const getVendorItemServices = user => dispatch => {
  dispatch(setLoading());
  axios
    .get(`/api/vendor/services/${user}`)
    .then(services =>
      dispatch({ type: GET_VENDOR_ITEM_SERVICES, payload: services.data })
    )
    .then(() => dispatch(setLoadingFalse()))
    .catch(err => console.log(err));
};

//Set filtered Vendors
export const setFilteredVendors = vendors => {
  return {
    type: SET_FILTERED_VENDORS,
    payload: vendors
  };
};

export const registerVendor = (profile, history) => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/vendor", profile)
    .then(() => history.push("/dashboard-toggler"))

    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//Registe Vendor Profile
export const registerVendorProfile = (
  profile,
  profileCompleted,
  history
) => dispatch => {
  dispatch(setLoading());
  if (!profileCompleted) {
    axios
      .post("/api/vendor/profile/new", profile)
      .then(profile => dispatch({ type: GET_PROFILE, payload: profile.data }))
      .then(() => history.push("/dashboard"))
      .then(() => {
        history.push("/dashboard/services");
      })
      .then(() => dispatch(setLoadingFalse()))
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      });
  } else {
    axios
      .post("/api/vendor/profile", profile)
      .then(profile =>
        dispatch({
          type: GET_PROFILE,
          payload: profile.data
        })
      )
      .then(() => dispatch(setLoadingFalse()))
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      });
  }
};

//Adding Office
export const addVendorOffice = officeFields => dispatch => {
  dispatch(clearLocationOptions());
  axios
    .post("/api/vendor/office", officeFields)
    .then(vendor => dispatch({ type: GET_PROFILE, payload: vendor.data }))
    .catch(err => console.log(err));
};

//Adding Vendor Images
export const addVendorImages = uploaded => dispatch => {
  axios
    .post("/api/vendor/images", uploaded)
    .then(res => console.log(res.status))
    .catch(err => console.log(err));
};

//Adding Keywords for Planner and Vendor
export const addVendorKeywords = keywords => dispatch => {
  axios
    .post("/api/vendor/keywords", keywords)
    .then(keywords => console.log(keywords))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

//Add Vendor Services
export const addVendorServices = (
  services,
  featureCompleted,
  history
) => dispatch => {
  console.log(services);
  console.log("ADD VENDOR SERVICES");
  if (!featureCompleted) {
    history.push("/dashboard/office");
    axios.post("/api/vendor/services/new", services).then(response => {
      dispatch({
        type: GET_PROFILE,
        payload: response.data.vendor
      });
      dispatch({
        type: GET_VENDOR_SERVICES,
        payload: response.data.services
      });
    });
  } else {
    dispatch(setLoading());
    axios
      .post("/api/vendor/services", services)
      .then(services =>
        dispatch({
          type: GET_VENDOR_SERVICES,
          payload: services.data
        })
      )
      .then(() => dispatch(setLoadingFalse()))
      .catch(err => console.log(err));
  }
};

export const onSuccessVendorProfile = () => {
  return {
    type: ON_SUCCESS_VENDOR_PROFILE
  };
};

export const onFailVendorProfile = () => {
  return {
    type: ON_FAIL_VENDOR_PROFILE
  };
};

export const clearSuccessMessages = () => {
  return {
    type: CLEAR_SUCCESS_MESSAGES
  };
};

export const clearLocationOptions = () => {
  return {
    type: CLEAR_LOCATION_OPTIONS
  };
};

export const setFilteredVendorsToNull = () => {
  return {
    type: SET_FILTERED_VENDORS_TO_NULL
  };
};
