import { ON_CLICK_CANCEL, ON_CLICK_SAVE, ON_CLICK_EDIT } from "../types/types";

export const onClickEdit = () => {
  console.log("I am hit in Button Actions");
  return {
    type: ON_CLICK_EDIT
  };
};

export const onClickSave = () => {
  return {
    type: ON_CLICK_SAVE
  };
};

export const onClickCancel = () => {
  return {
    type: ON_CLICK_CANCEL
  };
};
