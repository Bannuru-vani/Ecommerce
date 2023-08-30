import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  let { type, products } = action;
  // console.log(action);
  // console.log(type, products, "hhhhhhhhhhhhhhh");
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: products,
      };

    default:
      return state;
  }
};
