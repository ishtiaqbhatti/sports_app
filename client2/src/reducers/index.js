import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import userReducer from "./userReducer";
import plannerReducer from "./plannerReducer";
import vendorReducer from "./vendorReducer";
import commonReducer from "./commonReducer";
import optionReducer from "./optionReducer";
import buttonReducer from "./buttonReducer";

export default combineReducers({
  admin: adminReducer,
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  user: userReducer,
  planner: plannerReducer,
  common: commonReducer,
  vendor: vendorReducer,
  options: optionReducer,
  button: buttonReducer
});
