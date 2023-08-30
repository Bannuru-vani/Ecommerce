import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
//import { tablereducers } from "./tablereducers";
import { individualproductReducer } from "./individualproductReducer";
import { sliderReducer } from "./sliderReducer";
import {
  getProductsfromtheCart,
  addtoCartreducer,
  getProductsCount,
  deleteAllProductsfromCart,
  deleteSingleItemCartFromReducer,
} from "./addtoCartreducer";
const reducers = combineReducers({
  // tablereducers,
  sliderReducer,
  productReducer,
  individualproductReducer,
  addtoCartreducer,
  getProductsfromtheCart,
  deleteAllProductsfromCart,
  getProductsCount,
  deleteSingleItemCartFromReducer,
});
export default reducers;
