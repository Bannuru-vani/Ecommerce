import { ActionTypes } from "../contants/action-types";
import {
  getIndividualProducts,
  getProducts,
} from "../../components/services/productService";
export const getProductsData = () => {
  return async (dispatch) => {
    try {
      const res = await getProducts();
      console.log(res, "response");
      const resData = res.data;
      console.log(resData, "response");
      if (res.status === 200) {
        dispatch({
          type: ActionTypes.SET_PRODUCTS,
          products: resData,
        });
      }
    } catch (error) {
      console.log("err", error);
    }
  };
};
export const getIndividualProductsData = (slug) => {
  return async (dispatch) => {
    try {
      const res = await getIndividualProducts(slug);
      console.log(res, "response");
      const resData = res.data;
      console.log(resData, "response");
      if (res.status === 200) {
        dispatch({
          type: ActionTypes.GET_INDIVIDUAL_PRODUCTS,
          individualProduct: resData,
        });
      }
    } catch (error) {
      console.log("err", error);
    }
  };
};
