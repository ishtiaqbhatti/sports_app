import { GET_ALL_COUNTRIES_OPTIONS } from "../types/types";

const initialState = {
  allCountriesOptions: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountriesOptions: action.payload
      };

    default:
      return state;
  }
}
