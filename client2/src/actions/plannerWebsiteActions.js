import { SET_PLANNER_OPTIONS_LOADING_TO_TRUE } from "../types/types";
import {
  getAllAfricanCountries,
  getStatesOptions,
  getCityOptions,
  getCategoriesOptions,
  getEvntTypeOptions,
  getTargetMarketOptions
} from "./optionActions";

export const getPlannerOptions = () => dispatch => {
  dispatch(setPlannerOptionsLoading());
  dispatch(getAllCountriesOptions());
};

export const setOptionsLoading = () => {
  return {
    type: SET_OPTIONS_LOADING
  };
};
