import { ActionTypes } from "../contants/action-types";

import { getStepper } from "../../components/services/api";
export const getSliderData = () => {
  return async (dispatch) => {
    try {
      const res = await getStepper();
      const resData = res.data;
      console.log(resData, "slider");
      if (res.status === 200) {
        dispatch({
          type: ActionTypes.SLIDER_DATA,
          data: resData,
        });
      }
    } catch (err) {
      console.log(err, "errr");
    }
  };
};
