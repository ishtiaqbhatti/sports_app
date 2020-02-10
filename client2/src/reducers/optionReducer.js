import {
  GET_ALL_AFRICAN_COUNTRIES_OPTIONS,
  GET_ALL_COUNTRIES_OPTIONS,
  GET_STATES_OPTIONS,
  GET_CITY_OPTIONS,
  GET_CATEGORIES_OPTIONS,
  GET_EVENT_TYPE_OPTIONS,
  GET_TARGET_MARKET_OPTIONS,
  GET_CATERING_OPTIONS,
  SET_OPTIONS_LOADING,
  CLEAR_OPTIONS_LOADING,
  GET_UNBLOCKED_CONTINENT_OPTIONS,
  GET_UNBLOCKED_AFRICAN_COUNTRIES_OPTIONS,
  GET_COUNTRIES_BY_CONTINENT_OPTIONS,
  GET_REVENUE_OPTIONS,
  GET_BUSINESS_TITLE_OPTIONS,
  GET_GENDER_OPTIONS,
  CLEAR_LOCATION_OPTIONS,
  GET_BRANCH1_COUNTRIES,
  GET_BRANCH2_COUNTRIES,
  GET_BRANCH3_COUNTRIES,
  GET_BRANCH1_CITY,
  GET_BRANCH2_CITY,
  GET_BRANCH3_CITY,
  GET_BRANCH1_STATE,
  GET_BRANCH2_STATE,
  GET_BRANCH3_STATE,
  SET_FILTER_OPTIONS,
  GET_ALL_CONTINENTS,
  GET_CATEGORIES_OPTIONS_FOR_FILTERS,
  GET_EVENT_TYPE_OPTIONS_FOR_FILTERS
} from "../types/types";

const initialState = {
  allContinents: [],
  unBlockedContinentOptions: [],
  unBlockedAfricanCountriesOptions: [],
  countriesByContinentOptions: [],
  countriesByContinentBranch1: [],
  countriesByContinentBranch2: [],
  countriesByContinentBranch3: [],
  allCountriesOptions: [],
  allAfricanCountriesOptions: [],
  cityOptions: [],
  cityBranch1: [],
  cityBranch2: [],
  cityBranch3: [],
  stateOptions: [],
  stateBranch1: [],
  stateBranch2: [],
  stateBranch3: [],
  categoriesOptions: [],
  webCatOptions: [],
  eventTypeOptions: [],
  webEventOptions: [],
  cateringOptions: [],
  targetMarketOptions: [],
  revenueOptions: [],
  businessTitleOptions: [],
  genderOptions: [],
  filtersLoaded: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CONTINENTS:
      return {
        ...state,
        allContinents: action.payload
      };
    case GET_UNBLOCKED_CONTINENT_OPTIONS:
      return {
        ...state,
        unBlockedContinentOptions: action.payload
      };

    case GET_COUNTRIES_BY_CONTINENT_OPTIONS:
      return {
        ...state,
        countriesByContinentOptions: action.payload
      };

    case GET_BRANCH1_COUNTRIES:
      return {
        ...state,
        countriesByContinentBranch1: action.payload
      };

    case GET_BRANCH2_COUNTRIES:
      return {
        ...state,
        countriesByContinentBranch2: action.payload
      };

    case GET_BRANCH3_COUNTRIES:
      return {
        ...state,
        countriesByContinentBranch3: action.payload
      };

    case GET_UNBLOCKED_AFRICAN_COUNTRIES_OPTIONS:
      return {
        ...state,
        unBlockedAfricanCountriesOptions: action.payload
      };

    case GET_ALL_AFRICAN_COUNTRIES_OPTIONS:
      return {
        ...state,
        allAfricanCountriesOptions: action.payload
      };
    case GET_ALL_COUNTRIES_OPTIONS:
      return {
        ...state,
        allCountriesOptions: action.payload
      };
    case GET_STATES_OPTIONS:
      return {
        ...state,
        stateOptions: action.payload
      };

    case GET_BRANCH1_STATE:
      return {
        ...state,
        stateBranch1: action.payload
      };

    case GET_BRANCH2_STATE:
      return {
        ...state,
        stateBranch2: action.payload
      };

    case GET_BRANCH3_STATE:
      return {
        ...state,
        stateBranch3: action.payload
      };
    case GET_CITY_OPTIONS:
      return {
        ...state,
        cityOptions: action.payload
      };

    case GET_BRANCH1_CITY:
      return {
        ...state,
        cityBranch1: action.payload
      };

    case GET_BRANCH2_CITY:
      return {
        ...state,
        cityBranch2: action.payload
      };

    case GET_BRANCH3_CITY:
      return {
        ...state,
        cityBranch3: action.payload
      };
    case GET_CATEGORIES_OPTIONS:
      return {
        ...state,
        categoriesOptions: action.payload
      };
    case GET_CATEGORIES_OPTIONS_FOR_FILTERS:
      return {
        ...state,
        webCatOptions: action.payload
      };

    case GET_EVENT_TYPE_OPTIONS:
      return {
        ...state,
        eventTypeOptions: action.payload
      };

    case GET_EVENT_TYPE_OPTIONS_FOR_FILTERS:
      return {
        ...state,
        webEventOptions: action.payload
      };
    case GET_CATERING_OPTIONS:
      return {
        ...state,
        cateringOptions: action.payload
      };
    case GET_TARGET_MARKET_OPTIONS:
      return {
        ...state,
        targetMarketOptions: action.payload
      };
    case GET_REVENUE_OPTIONS:
      return {
        ...state,
        revenueOptions: action.payload
      };

    case GET_BUSINESS_TITLE_OPTIONS:
      return {
        ...state,
        businessTitleOptions: action.payload
      };

    case GET_GENDER_OPTIONS:
      return {
        ...state,
        genderOptions: action.payload
      };

    case CLEAR_OPTIONS_LOADING:
      return {
        ...state,
        loading: false
      };
    case CLEAR_LOCATION_OPTIONS:
      return {
        ...state,
        countriesByContinentOptions: [],
        unBlockedAfricanCountriesOptions: [],
        countriesByContinentBranch1: [],
        countriesByContinentBranch2: [],
        countriesByContinentBranch3: [],
        stateOptions: [],
        stateBranch1: [],
        stateBranch2: [],
        stateBranch3: [],
        cityOptions: [],
        cityBranch1: [],
        cityBranch2: [],
        cityBranch3: []
      };
    case SET_FILTER_OPTIONS:
      return {
        ...state,
        filtersLoaded: action.payload
      };
    default:
      return state;
  }
}
