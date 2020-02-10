import { ON_CLICK_CANCEL, ON_CLICK_EDIT, ON_CLICK_SAVE } from "../types/types";

const initialState = {
  disabled: true,
  editdisabled: false,
  formdisabled: "disabled"
};
export default function(state = initialState, action) {
  switch (action.type) {
    case ON_CLICK_EDIT:
      return {
        ...state,
        disabled: false,
        editdisabled: true,
        formdisabled: ""
      };

    case ON_CLICK_SAVE:
      return {
        ...state,
        disabled: true,
        editdisabled: false,
        formdisabled: "disabled"
      };

    default:
      return state;
  }
}
