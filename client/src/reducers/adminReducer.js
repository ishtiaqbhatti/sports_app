import {
  GET_ABOUT_US,
  GET_CATERING,
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
  GET_TERMS,
  GET_BLOCKED_COUNTRIES,
  GET_IMAGES_FROM_ADMIN,
  GET_STATES,
  GET_CITIES_BY_STATE,
  CLEAR_LOCATION_OPTIONS,
  BLOCK_UNBLOCK_USER,
  DELETE_USER,
  UNBLOCK_COUNTRY,
  BLOCK_UNBLOCK_CONTINENT
} from "../types/types";

const initialState = {
  about_us: null,
  admin: {},
  terms: null,
  cateringDisplay: [],
  cateringAdmin: [],
  notices: [],
  categories: [],
  eventTypes: [],
  countries: [],
  packages: null,
  loading: false,
  continents: [],
  searchResults: [],
  caterings: [],
  usersCount: "",
  plannerCount: "",
  vendorCount: "",
  blockPlannerCount: "",
  blockVendorCount: "",
  africanCountries: [],
  unBlockCountries: [],
  unBlockContinents: [],
  countriesByContinent: [],
  blockedCountries: [],
  images: {},
  states: [],
  cities: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ADMIN_DATA:
      return {
        ...state,
        admin: action.payload
      };

    case PROFILES_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_ABOUT_US:
      return {
        ...state,
        about_us: action.payload
      };
    case GET_TERMS:
      return {
        ...state,
        terms: action.payload
      };

    case GET_CATERING:
      return {
        ...state,
        caterings: action.payload
      };

    case GET_NOTICEBOARD:
      return {
        ...state,
        notices: action.payload
      };

    case GET_CATEGORY:
      return {
        ...state,
        categories: action.payload
      };

    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };

    case GET_EVENT_TYPES:
      return {
        ...state,
        eventTypes: action.payload
      };

    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      };

    case GET_ADMIN_PACKAGES:
      return {
        ...state,
        packages: action.payload
      };

    case GET_CONTINENTS:
      return {
        ...state,
        continents: action.payload
      };

    case SEARCH_BY_ADMIN:
      return {
        ...state,
        searchResults: action.payload
      };

    case BLOCK_UNBLOCK_USER:
      var searchResults = [...state.searchResults];
      let id = action.payload;
      for (var i in searchResults) {
        if (searchResults[i]._id === id) {
          searchResults[i].liveProfile = !searchResults[i].liveProfile;
        }
      }
      return {
        ...state,
        searchResults: searchResults
      };

    case BLOCK_UNBLOCK_CONTINENT:
      var continents = [...state.continents];
      let cont = action.payload;
      for (var a in continents) {
        if (continents[a].continent === cont) {
          continents[a].isBlocked = !continents[a].isBlocked;
        }
      }
      return {
        ...state,
        continents: continents
      };

    case DELETE_USER:
      let userId = action.payload;
      var oldResults = [...state.searchResults];
      const updatedResults = oldResults.filter(
        user => user.user._id !== userId
      );

      return {
        ...state,
        searchResults: updatedResults
      };

    case GET_USER_STATS:
      return {
        ...state,
        usersCount: action.payload
      };

    case GET_PLANNER_COUNT:
      return {
        ...state,
        plannerCount: action.payload
      };

    case GET_VENDOR_COUNT:
      return {
        ...state,
        vendorCount: action.payload
      };

    case GET_BLOCK_PLANNER_COUNT:
      return {
        ...state,
        blockPlannerCount: action.payload
      };

    case GET_BLOCK_VENDOR_COUNT:
      return {
        ...state,
        blockVendorCount: action.payload
      };
    case GET_AFRICAN_COUNTRIES:
      return {
        ...state,
        africanCountries: action.payload
      };
    case GET_UNBLOCK_COUNTRIES:
      return {
        ...state,
        unBlockCountries: action.payload
      };
    case GET_UNBLOCKED_CONTINENTS:
      return {
        ...state,
        unBlockContinents: action.payload
      };
    case GET_COUNTRIES_BY_CONTINENT:
      return {
        ...state,
        countriesByContinent: action.payload
      };

    case GET_BLOCKED_COUNTRIES:
      return {
        ...state,
        blockedCountries: action.payload
      };

    case UNBLOCK_COUNTRY:
      let countr = action.payload;
      console.log(countr);
      var oldCountries = [...state.blockedCountries];
      const updatedCountries = oldCountries.filter(
        country => country.sortname !== countr
      );
      return {
        ...state,
        blockedCountries: updatedCountries
      };

    case GET_IMAGES_FROM_ADMIN:
      return {
        ...state,
        images: action.payload
      };

    case GET_STATES:
      return {
        ...state,
        states: action.payload
      };

    case GET_CITIES_BY_STATE:
      return {
        ...state,
        cities: action.payload
      };

    case CLEAR_LOCATION_OPTIONS:
      return {
        ...state,
        countriesByContinent: [],
        states: [],
        cities: []
      };
    default:
      return state;
  }
}
