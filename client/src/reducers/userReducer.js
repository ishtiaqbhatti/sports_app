import { SEARCH_RESULTS } from "../types/types";

const initialState = {
  profiles: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_RESULTS:
      return {
        ...state,
        profiles: action.payload
      };

    default:
      return state;
  }
}
