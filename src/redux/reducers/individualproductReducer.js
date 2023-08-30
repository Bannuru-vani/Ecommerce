import { ActionTypes } from "../contants/action-types";

const initialState = {
  individualProduct: [],
};

export const individualproductReducer = (state = initialState, action) => {
  let { type, individualProduct } = action;
  console.log(action);
  console.log(type, individualProduct, "hhhhhhhhhhhhhhh");
  switch (type) {
    case ActionTypes.GET_INDIVIDUAL_PRODUCTS:
      return {
        ...state,
        individualProduct: individualProduct,
      };

    default:
      return state;
  }
};
