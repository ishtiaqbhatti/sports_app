import axios from "axios";
import {
  setLoadingTrue,
  setLoadingFalse,
  catchErrors
} from "../../common/actions/commonActions";
import { REGISTER_PUBLIC_USER } from '../types'
// Register a Public User
export const registerPublicUser = (data) => async dispatch => {
  try {
    dispatch(setLoadingTrue());
    const res = await axios.post("/api/auth/register", data);
    dispatch(setLoadingFalse());
    dispatch({ type: REGISTER_PUBLIC_USER, payload: res.data });
  } catch (e) {
    dispatch(catchErrors(e));
  }
};

// // Register a Private User
// export const privateRegister = (data) => async dispatch => {
//   try {
//      dispatch(setLoadingTrue());
//      const res = await axios.post("/api/auth/")
//   } catch(e) {

//   }

// }