import { ActionTypes } from "../contants/action-types";
import {
  addtoCartProducts,
  getProductsfromCart,
  getCartCount,
  deleteAllProducts,
  deleteSingleItemFromTheCart,
} from "../../components/services/addtoCartService";
export const addProductstoCart = ({ productId, quantity }) => {
  return async (dispatch) => {
    try {
      const res = await addtoCartProducts({ productId, quantity });
      console.log(res, "response");
      const resData = res.data;
      console.log(resData, "response");
      if (res.status === 201) {
        dispatch({
          type: ActionTypes.ADD_PRODUCTS_TO_THE_CART,
          addtoCart: resData,
        });
        console.log("ADD_PRODUCTS_TO_THE_CART");
        dispatch(getProductCartCount());
      }
    } catch (error) {
      console.log("err", error);
    }
  };
};
export const getProductsFromTheCart = () => {
  return async (dispatch) => {
    try {
      const res = await getProductsfromCart();
      console.log(res, "response");
      const resData = res.data;
      console.log(resData, "response");
      if (res.status === 200) {
        dispatch({
          type: ActionTypes.GET_PRODUCTS_FROM_THE_CART,
          getProductsdata: resData || [],
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};
export const getProductCartCount = () => {
  return async (dispatch) => {
    console.log("getProductCartCount");
    try {
      const res = await getCartCount();
      console.log(res, "response");
      const resData = res.data;
      console.log(resData, "response");
      if (res.status === 200) {
        dispatch({
          type: ActionTypes.CART_COUNT,
          productsCount: resData,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};
export const deleteAllProductsFromCart = () => {
  return async (dispatch) => {
    try {
      const res = await deleteAllProducts();
      console.log(res, "response");
      const resData = res.data;
      console.log(resData, "response");
      if (res.status === 200) {
        dispatch({
          type: ActionTypes.DELETE_ALL_PRODUCTS,
          deleteAllProducts: resData,
        });
        dispatch(getProductsFromTheCart());
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};
export const deleteSingleItemFromCart = (productID) => {
  return async (dispatch) => {
    try {
      const res = await deleteSingleItemFromTheCart(productID);
      const resData = res.data;
      if (res.status === 200) {
        dispatch({
          type: ActionTypes.DELETE_SINGLE_ITEM_FROM_CART,
          deleteSingleItemFromTheCart: resData,
        });
        dispatch(getProductsFromTheCart());
        dispatch(getCartCount());
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};
