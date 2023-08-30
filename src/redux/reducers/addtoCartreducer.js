import { ActionTypes } from "../contants/action-types";
const InitialState = {
  addtoCart: [],
  getProductsdata: [],
  productsCount: [],
  deleteAllProducts: [],
  deleteSingleItemFromTheCart: [],
};
export const addtoCartreducer = (state = InitialState, action) => {
  let { type, addtoCart } = action;
  console.log(action);
  console.log(type, addtoCart, "hhhhhhhhhhhhhhh");
  switch (type) {
    case ActionTypes.GET_INDIVIDUAL_PRODUCTS:
      return {
        ...state,
        addtoCart: addtoCart,
      };

    default:
      return state;
  }
};
export const getProductsfromtheCart = (state = InitialState, action) => {
  let { type, getProductsdata } = action;
  console.log(action);
  console.log(type, getProductsdata, "cart products");
  switch (type) {
    case ActionTypes.GET_PRODUCTS_FROM_THE_CART:
      return {
        ...state,
        getProductsdata: getProductsdata,
      };
    default:
      return state;
  }
};
export const getProductsCount = (state = InitialState, action) => {
  let { type, productsCount } = action;
  console.log(action);
  console.log(type, productsCount, "cart products");
  switch (type) {
    case ActionTypes.CART_COUNT:
      return {
        ...state,
        productsCount: productsCount,
      };
    default:
      return state;
  }
};
export const deleteAllProductsfromCart = (state = InitialState, action) => {
  let { type, deleteAllProducts } = action;
  console.log(action);
  switch (type) {
    case ActionTypes.DELETE_ALL_PRODUCTS_FROM_THE_CART:
      return {
        ...state,
        deleteAllProducts: deleteAllProducts,
      };
    default:
      return state;
  }
};
export const deleteSingleItemCartFromReducer = (
  state = InitialState,
  action
) => {
  let { type, deleteSingleItemFromTheCart } = action;
  switch (type) {
    case ActionTypes.DELETE_SINGLE_ITEM_FROM_CART:
      return {
        ...InitialState,
        deleteSingleItemFromTheCart: deleteSingleItemFromTheCart,
      };
    default:
      return state;
  }
};
