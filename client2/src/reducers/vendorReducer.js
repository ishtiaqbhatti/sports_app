import {
  GET_VENDOR_SERVICES,
  GET_VENDOR_ITEM,
  GET_VENDOR_ITEM_SERVICES,
  ON_SUCCESS_VENDOR_PROFILE,
  CLEAR_SUCCESS_MESSAGES,
  ON_FAIL_VENDOR_PROFILE,
  GET_VENDORS,
  LOADING,
  SET_LOADING_FALSE,
  SET_FILTERED_VENDORS,
  SET_FILTERED_VENDORS_TO_NULL,
  SET_VENDOR_OPTIONS_LOADED,
  RESET_PACK_AND_SERV
} from "../types/types";

const initialState = {
  services: {},
  vendorOptionsLoaded: false,
  vendors: [],
  loading: false,
  filteredVendors: [],
  vendorItem: {},
  vendorItemServices: {},
  onSuccessVendorProfile: false,
  onFailVendorProfile: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_VENDOR_SERVICES:
      return {
        ...state,
        services: action.payload
      };

    case SET_FILTERED_VENDORS:
      return {
        ...state,
        filteredVendors: action.payload
      };

    case SET_FILTERED_VENDORS_TO_NULL:
      return {
        ...state,
        filteredVendors: []
      };

    case GET_VENDOR_ITEM:
      return {
        ...state,
        vendorItem: action.payload
      };

    case GET_VENDOR_ITEM_SERVICES:
      return {
        ...state,
        vendorItemServices: action.payload
      };

    case ON_SUCCESS_VENDOR_PROFILE:
      return {
        ...state,
        onSuccessVendorProfile: true
      };

    case CLEAR_SUCCESS_MESSAGES:
      return {
        ...state,
        onSuccessVendorProfile: false
      };

    case ON_FAIL_VENDOR_PROFILE:
      return {
        ...state,
        onFailVendorProfile: true
      };

    case SET_VENDOR_OPTIONS_LOADED:
      return {
        ...state,
        vendorOptionsLoaded: true
      };

    case RESET_PACK_AND_SERV:
      return {
        ...state,
        vendorItemServices: {}
      };

    default:
      return state;
  }
}
