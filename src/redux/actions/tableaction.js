// import { ActionTypes } from "../contants/action-types";
// import { getProducts } from "../../components/services/api";

// export const getProductsData = () => {
//   return async (dispatch) => {
//     // console.log(dispatch);
//     try {
//       const res = await getProducts();
//       const resData = res?.data;
//       // console.log(resData);
//       if (res.status === 200) {
//         dispatch({
//           type: ActionTypes.SHOW_DATA,
//           data: resData,
//         });
//       }
//     } catch (err) {
//       console.log(err, "err");
//     }
//   };
// };
