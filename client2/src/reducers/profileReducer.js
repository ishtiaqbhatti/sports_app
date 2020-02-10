import {
  GET_PROFILE,
  GET_PROFILES,
  GET_NOTICEBOARD,
  GET_PLANNERS,
  GET_PLANNER_ITEM,
  PROFILES_LOADING,
  GET_PACKAGES,
  GET_PLANNER_ITEM_PACKAGES,
  SEARCH_RESULTS,
  GET_KEYWORDS,
  GET_RESET_PASSWORD_ERRORS,
  SUCCESSFULLY_RESET_PASSWORD
} from "../types/types";

const initialState = {
  profile: null,
  profiles: [],
  loading: false,
  notices: [],
  packages: null,
  planners: [],
  plannerItem: {},
  plannerItemPackages: {},
  searchResults: [],
  success: false,
  keywords: [],
  resetPasswordErrors: {},
  successMessage: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
        loading: false
      };
    case GET_KEYWORDS:
      return {
        ...state,
        keywords: action.payload
      };
    case PROFILES_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload
      };

    case GET_PACKAGES:
      return {
        ...state,
        packages: action.payload
      };

    case GET_RESET_PASSWORD_ERRORS:
      return {
        ...state,
        resetPasswordErrors: action.payload
      };

    case SUCCESSFULLY_RESET_PASSWORD:
      return {
        ...state,
        successMessage: action.payload
      };

    default:
      return state;
  }
}
