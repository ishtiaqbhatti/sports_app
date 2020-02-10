import {
  LOADING,
  SET_LOADING_FALSE,
  ADMIN_DATA_LOADED,
  GET_RESULTS,
  NO_RESULTS_FOUND,
  CLEAR_NO_RESULTS,
  PROFILE_LOADED,
  PACKAGES_LOADED,
  NOTICEBOARD_LOADED,
  PROFILE_UNLOADED,
  GET_TRANSLATED_LABELS,
  GET_LANGUAGE,
  GET_DASHBOARD_LANG,
  RESET_RESULTS,
  GET_CATEGORIES_OPTIONS_FOR_FILTERS
} from "../types/types";

const initialState = {
  pager: {},
  pageOfItems: [],
  loading: false,
  loadingfromAdmin: false,
  profileLoaded: false,
  noResults: false,
  packagesLoaded: false,
  noticeboardLoaded: false,
  language: "",
  translatedLabels: {},
  dashboardLabels: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };

    case SET_LOADING_FALSE:
      return {
        ...state,
        loading: false
      };

    case ADMIN_DATA_LOADED:
      return {
        ...state,
        loadingfromAdmin: true
      };

    case PROFILE_LOADED:
      return {
        ...state,
        profileLoaded: true
      };

    case PROFILE_UNLOADED:
      return {
        ...state,
        profileLoaded: false
      };

    case PACKAGES_LOADED:
      return {
        ...state,
        packagesLoaded: true
      };

    case GET_RESULTS:
      const data = action.payload.pageOfItems.sort(function(a, b) {
        var textA = a.storeName;
        var textB = b.storeName;
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      return {
        ...state,
        pager: action.payload.pager,
        pageOfItems: data
      };

    case NO_RESULTS_FOUND:
      return {
        ...state,
        noResults: true,
        loading: false
      };

    case CLEAR_NO_RESULTS:
      return {
        ...state,
        noResults: false
      };

    case NOTICEBOARD_LOADED:
      return {
        ...state,
        noticeboardLoaded: true
      };

    case GET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };

    case GET_TRANSLATED_LABELS:
      return {
        ...state,
        translatedLabels: action.payload
      };

    case GET_DASHBOARD_LANG:
      return {
        ...state,
        dashboardLabels: action.payload
      };

    case RESET_RESULTS:
      return {
        ...state,
        pager: {},
        pageOfItems: []
      };
    default:
      return state;
  }
}
