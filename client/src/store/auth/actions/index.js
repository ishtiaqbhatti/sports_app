import axios from "axios";
import {
  setLoadingTrue,
  setLoadingFalse,
  catchErrors
} from "../../common/actions/commonActions";

// Register a Public User
export const publicRegister = () => async dispatch => {
  try {
    dispatch(setLoadingTrue());
    const res = await axios.post("/api/auth/register");
    dispatch(setLoadingFalse());
    dispatch({ type: REGISTER_PUBLIC_USER, payload: res.data });
  } catch (e) {
    dispatch(catchErrors(e));
  }
};
