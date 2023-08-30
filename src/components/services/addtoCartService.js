import axios from "axios";
let Base_Url = `https://express-app-chousinrahit.vercel.app`;
const getToken = () => {
  let token = localStorage.getItem("token");
  if (token) {
    return token;
  } else {
    return;
  }
};

export const addtoCartProducts = async ({ productId, quantity }) => {
  let url = `/api/v1/cart`;
  let request = await axios.post(
    Base_Url + url,
    {
      productId,
      quantity,
    },
    {
      headers: {
        authorization: `Bearer ${getToken()}`,
        "content-type": "application/json",
        //  Accept: "application/json",
      },
    }
  );
  return request;
};
export const getProductsfromCart = async () => {
  let url = `/api/v1/cart`;
  let request = await axios.get(Base_Url + url, {
    headers: {
      authorization: `Bearer ${getToken()}`,
      "content-type": "application/json",
    },
  });
  return request;
};
export const getCartCount = async () => {
  let url = `/api/v1/cart/count`;
  let request = await axios.get(Base_Url + url, {
    headers: {
      authorization: `Bearer ${getToken()}`,
      "content-type": "application/json",
    },
  });
  return request;
};

export const deleteAllProducts = async () => {
  let url = `/api/v1/cart`;
  let request = await axios.delete(Base_Url + url, {
    headers: {
      authorization: `Bearer ${getToken()}`,
      "content-type": "application/json",
    },
  });
  return request;
};
export const deleteSingleItemFromTheCart = async (productID) => {
  console.log(productID);
  let url = `/api/v1/cart/deleteSignleItem/${productID}`;
  let request = await axios.delete(
    Base_Url + url,

    {
      headers: {
        authorization: `Bearer ${getToken()}`,
        "content-type": "application/json",
        //  Accept: "application/json",
      },
    }
  );
  return request;
};
