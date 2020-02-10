import axios from "axios";
import { adminDataLoaded } from "./common";

import {
  GET_CATERING_OPTIONS,
  GET_ABOUT_US,
  GET_TERMS,
  GET_CATERING,
  GET_ERRORS,
  GET_NOTICEBOARD,
  GET_CATEGORY,
  GET_USERS,
  GET_EVENT_TYPES,
  GET_USER_STATS,
  GET_ALL_COUNTRIES,
  GET_ADMIN_DATA,
  PROFILES_LOADING,
  GET_ADMIN_PACKAGES,
  GET_CONTINENTS,
  SEARCH_BY_ADMIN,
  GET_BLOCK_PLANNER_COUNT,
  GET_BLOCK_VENDOR_COUNT,
  GET_PLANNER_COUNT,
  GET_VENDOR_COUNT,
  GET_AFRICAN_COUNTRIES,
  GET_UNBLOCK_COUNTRIES,
  GET_UNBLOCKED_CONTINENTS,
  GET_COUNTRIES_BY_CONTINENT,
  GET_BLOCKED_COUNTRIES,
  GET_IMAGES_FROM_ADMIN,
  GET_STATES,
  GET_CITIES_BY_STATE,
  CLEAR_LOCATION_OPTIONS,
  NOTICEBOARD_LOADED,
  BLOCK_UNBLOCK_USER,
  DELETE_USER,
  UNBLOCK_COUNTRY,
  BLOCK_CONTINENT,
  UNBLOCK_CONTINENT,
  BLOCK_UNBLOCK_CONTINENT
} from "../types/types";

import {
  getCateringOptions,
  getCategoriesOptions,
  getEventTypeOptions
} from "./optionActions";
import { setLoading, setLoadingFalse } from "./common";

export const getAdminData = () => dispatch => {
  axios
    .get("/api/admin")
    .then(res => {
      console.log(res);
      dispatch({ type: GET_ADMIN_DATA, payload: res.data });
      dispatch(getCateringOptions(res.data.catering));
      dispatch(getCategoriesOptions(res.data.categories));
      dispatch(getEventTypeOptions(res.data.eventTypes));
    })
    .then(() => dispatch(adminDataLoaded()))
    .catch(err => console.log(err));
};

export const getAdminDataOnSuccess = data => dispatch => {
  dispatch(getCateringOptions(data.catering));
  dispatch(getCategoriesOptions(data.categories));
  // dispatch(getEventTypeOptions(data.eventTypes));
};

export const addNoticeboard = (newNotice, history) => dispatch => {
  axios
    .post("/api/admin/noticeboard", newNotice)
    .then(window.location.reload())
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const getNoticeboard = () => dispatch => {
  dispatch(setLoading());
  axios
    .get("/api/admin/noticeboard")
    .then(res => dispatch({ type: GET_NOTICEBOARD, payload: res.data }))
    .then(() => dispatch({ type: NOTICEBOARD_LOADED }))
    .then(() => dispatch(setLoadingFalse()))
    .catch(err => dispatch({ type: GET_NOTICEBOARD, payload: {} }));
};

export const getAdminPackages = () => dispatch => {
  axios
    .get("/api/admin/packages")
    .then(res =>
      dispatch({ type: GET_ADMIN_PACKAGES, payload: res.data.packages })
    )
    .catch(err => console.log(err));
};

export const addCategory = newCategory => dispatch => {
  axios
    .post("/api/admin/category", newCategory)
    .then(admin => dispatch({ type: GET_ADMIN_DATA, payload: admin.data }))
    .catch(err => console.log(err));
};

export const addBgImages = uploaded => dispatch => {
  console.log(uploaded);
  axios
    .post("/api/admin/bg-images", uploaded)
    .then(res => console.log(res.status))
    .catch(err => console.log(err));
};

export const getUsers = () => dispatch => {
  axios
    .get("/api/users")
    .then(res => dispatch({ type: GET_USERS, payload: res.data }))
    .catch(err => console.log(err));
};

export const addEventTypes = eventType => dispatch => {
  axios
    .post("/api/admin/event-types", eventType)
    .then(admin => dispatch({ type: GET_ADMIN_DATA, payload: admin.data }))
    .catch(err => console.log(err));
};

export const getAllCountries = () => dispatch => {
  axios
    .get("/api/location/countries/all")
    .then(res => dispatch({ type: GET_ALL_COUNTRIES, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const addAdminPackages = updatedPackages => dispatch => {
  axios
    .post("/api/admin/packages", updatedPackages)
    .then()
    .catch(err => console.log(err));
};

export const setProfilesLoading = () => {
  return {
    type: PROFILES_LOADING
  };
};

//Getting All Continents
export const getContinents = () => dispatch => {
  axios
    .get("/api/location/continents")
    .then(res => dispatch({ type: GET_CONTINENTS, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

// Make a post request to block a specific continent
export const blockContinent = continent => dispatch => {
  dispatch({ type: BLOCK_UNBLOCK_CONTINENT, payload: continent.continent });
  axios
    .post("/api/location/continents/block", continent)
    .catch(err => console.log(err));
};

// Make a post request to unblock a specific continent
export const unBlockContinent = continent => dispatch => {
  dispatch({ type: BLOCK_UNBLOCK_CONTINENT, payload: continent.continent });
  axios
    .post("/api/location/continents/unblock", continent)
    .catch(err => console.log(err));
};

// Making a post request to search planners and vendors by Admin
export const searchByAdmin = searchCriteria => dispatch => {
  axios
    .post("/api/admin/search", searchCriteria)
    .then(res => dispatch({ type: SEARCH_BY_ADMIN, payload: res.data }))
    .catch(err => console.log(err));
};

// Deleting a User (Planner or Vendor) by Admin
export const deleteUser = user => dispatch => {
  dispatch({ type: DELETE_USER, payload: user.id });
  axios
    .post("/api/admin/users/delete", user)
    .then(console.log("Deleted"))
    .catch(err => console.log(err));
};

//Block a specific User by Admin
export const blockUser = user => dispatch => {
  dispatch({ type: BLOCK_UNBLOCK_USER, payload: user.id });
  axios
    .post("/api/admin/users/block", user)
    .then()
    .catch(err => console.log(err));
};

//Block a specific User by Admin
export const unBlockUser = user => dispatch => {
  dispatch({ type: BLOCK_UNBLOCK_USER, payload: user.id });
  axios
    .post("/api/admin/users/unblock", user)
    .then()
    .catch(err => console.log(err));
};

export const addCatering = catering => dispatch => {
  console.log("I am hit");
  axios
    .post("/api/admin/catering", catering)
    .then(admin => dispatch({ type: GET_ADMIN_DATA, payload: admin.data }))
    .catch(err => console.log(err));
};

// Deleting a Specific Catering Capacity
export const deleteCatering = catering => dispatch => {
  axios
    .post("/api/admin/catering/delete", catering)
    .then(admin => dispatch({ type: GET_ADMIN_DATA, payload: admin.data }))
    .catch(err => console.log(err));
};

//Deleting a Specific Category
export const deleteCategory = category => dispatch => {
  axios
    .post("/api/admin/category/delete", category)
    .then(admin => dispatch({ type: GET_ADMIN_DATA, payload: admin.data }))
    .catch(err => console.log(err.message));
};

//Deleting a Specific Event Type
export const deleteEventTypes = eventType => dispatch => {
  axios
    .post("/api/admin/event-types/delete", eventType)
    .then(admin => dispatch({ type: GET_ADMIN_DATA, payload: admin.data }))
    .catch(err => console.log(err.message));
};

//Getting Count of users
export const getUserCount = () => dispatch => {
  axios
    .get("/api/admin/stats/total")
    .then(res => dispatch({ type: GET_USER_STATS, payload: res.data }))
    .catch(err => console.log(err));
};

//Getting Planner's Count
export const getPlannerCount = () => dispatch => {
  axios
    .get("/api/admin/stats/planners")
    .then(res => dispatch({ type: GET_PLANNER_COUNT, payload: res.data }))
    .catch(err => console.log(err));
};

//Getting Vendor's Count
export const getVendorCount = () => dispatch => {
  axios
    .get("/api/admin/stats/vendors")
    .then(res => dispatch({ type: GET_VENDOR_COUNT, payload: res.data }))
    .catch(err => console.log(err));
};

//Getting Block Planner's Count
export const getBlockPlannerCount = () => dispatch => {
  axios
    .get("/api/admin/stats/block-planners")
    .then(res => dispatch({ type: GET_BLOCK_PLANNER_COUNT, payload: res.data }))
    .catch(err => console.log(err));
};

//Getting Block Vendor's Count
export const getBlockVendorCount = () => dispatch => {
  axios
    .get("/api/admin/stats/block-vendors")
    .then(res => dispatch({ type: GET_BLOCK_VENDOR_COUNT, payload: res.data }))
    .catch(err => console.log(err));
};

//Getting List of African Countries

//Getting List of All Countries Which are UnBlocked
export const getUnBlockCountries = () => dispatch => {
  axios
    .get("/api/admin/countries")
    .then(res => dispatch({ type: GET_UNBLOCK_COUNTRIES, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err }));
};

// Adding About Us by Admin
export const addAboutUs = aboutUs => dispatch => {
  axios
    .post("/api/admin/about-us", aboutUs)
    .then(admin =>
      dispatch({
        type: GET_ADMIN_DATA,
        payload: admin.data
      })
    )
    .catch(err => console.log(err));
};

// Adding T&C by Admin
export const addTerms = terms => dispatch => {
  axios
    .post("/api/admin/terms", terms)
    .then(admin =>
      dispatch({
        type: GET_ADMIN_DATA,
        payload: admin.data
      })
    )
    .catch(err => console.log(err));
};

// Adding Privacy Policy by Admin
export const addPP = pp => dispatch => {
  axios
    .post("/api/admin/privacy-policy", pp)
    .then(admin =>
      dispatch({
        type: GET_ADMIN_DATA,
        payload: admin.data
      })
    )
    .catch(err => console.log(err));
};

//Getting Terms and Condition of Website
export const getTerms = () => dispatch => {
  axios
    .get("/api/admin/terms")
    .then(res => dispatch({ type: GET_TERMS, payload: res.data.terms }));
};

//Getting List of Blocked Countries
export const getBlockedCountries = () => dispatch => {
  axios
    .get("/api/location/countries/cblocked")
    .then(res => dispatch({ type: GET_BLOCKED_COUNTRIES, payload: res.data }))
    .catch(err => console.log(err));
};

//Blocking a Specific Country
export const blockCountry = country => dispatch => {
  axios
    .post("/api/location/countries/block", country)
    .then(dispatch(getBlockedCountries()))
    .catch(err => console.log(err));
};

//UnBlocking a Specific Country
export const unBlockCountry = country => dispatch => {
  dispatch({ type: UNBLOCK_COUNTRY, payload: country.country });
  axios
    .post("/api/location/countries/unblock", country)
    .then()
    .catch(err => console.log(err));
};

//Getting Admin Images
export const getAdminImages = () => dispatch => {
  axios
    .get("/api/admin/bg-images")
    .then(images =>
      dispatch({ type: GET_IMAGES_FROM_ADMIN, payload: images.data })
    )
    .catch(err => console.log(err));
};

// Changing Target Market
export const changeTargetMarketByAdmin = data => dispatch => {
  axios
    .post("/api/admin/target-market", data)
    .then(() => console.log("Success"))
    .catch(err => console.log(err));
};

//Getting States of a Particular Country
export const getStates = label => dispatch => {
  axios
    .post("/api/location/countries/states", label)
    .then(states => dispatch({ type: GET_STATES, payload: states.data }))
    .catch(err => console.log(err));
};

//Gettin Cities of a Particular State
export const getCitiesByState = label => dispatch => {
  axios
    .post("/api/location/states/countries", label)
    .then(cities =>
      dispatch({ type: GET_CITIES_BY_STATE, payload: cities.data })
    )
    .catch(err => console.log(err));
};

export const clearLocationOptions = () => {
  return {
    type: CLEAR_LOCATION_OPTIONS
  };
};
