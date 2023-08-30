import { ActionTypes } from "../contants/action-types";
const initialState = {
  data: [],
};
export const sliderReducer = (state = initialState, action) => {
  const { type, data } = action;
  console.log(type, data, "ddd");
  switch (type) {
    case ActionTypes.SLIDER_DATA:
      return {
        ...state,
        data: data,
      };
    default:
      return state;
  }
};
