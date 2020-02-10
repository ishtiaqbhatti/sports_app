import {
  GET_PACKAGES,
  GET_OFFICE,
  GET_PLANNER_ITEM,
  LOADING,
  GET_PLANNERS,
  ON_START,
  ON_SUCCESS,
  GET_CURRENT_PLANNER,
  GET_PLANNER_ITEM_PACKAGES,
  SET_LOADING_FALSE,
  SET_FILTERED_PLANNERS,
  SET_FILTERED_PLANNERS_TO_NULL,
  SET_PLANNER_OPTIONS_LOADED,
  RESET_PACK_AND_SERV
} from "../types/types";

const initialState = {
  planner: {},
  plannerOptionsLoaded: false,
  loading: false,
  success: false,

  filteredPlanners: [],
  packages: {},
  office: {},
  plannerItem: {},
  plannerItemPackages: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_PLANNER:
      return {
        ...state,
        planner: action.payload,
        success: false
      };

    case GET_PACKAGES:
      return {
        ...state,
        packages: action.payload
      };

    case GET_OFFICE:
      return {
        ...state,
        office: action.payload
      };

    case GET_PLANNER_ITEM:
      return {
        ...state,
        plannerItem: action.payload,
        loading: false
      };

    case ON_SUCCESS:
      return {
        ...state,
        success: true
      };

    case GET_PLANNER_ITEM_PACKAGES:
      return {
        ...state,
        plannerItemPackages: action.payload,
        loading: false
      };

    case SET_PLANNER_OPTIONS_LOADED:
      return {
        ...state,
        plannerOptionsLoaded: true
      };

    case RESET_PACK_AND_SERV:
      return {
        ...state,
        plannerItemPackages: {}
      };
    default:
      return state;
  }
}
