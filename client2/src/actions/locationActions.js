import axios from "axios";
import {
  GET_ALL_COUNTRIES_OPTIONS,
  GET_ALL_CONTINENTS,
  GET_UNBLOCKED_CONTINENTS,
  GET_ALL_AFRICAN_COUNTRIES_OPTIONS
} from "../types/types";

//Getting All Continents
export const getAllContinents = () => dispatch => {
  axios
    .get("/api/admin/continents")
    .then(res => dispatch({ type: GET_ALL_CONTINENTS, payload: res.data }))
    .catch(() => dispatch({ type: GET_ALL_CONTINENTS, payload: [] }));
};

//Getting UnBlocked Continents
export const getUnBlockedContinents = () => dispatch => {
  axios
    .get("/api/location/continents/unblocked")
    .then(res =>
      dispatch({ type: GET_UNBLOCKED_CONTINENTS, payload: res.data })
    )
    .catch(() => dispatch({ type: GET_UNBLOCKED_CONTINENTS, payload: [] }));
};
