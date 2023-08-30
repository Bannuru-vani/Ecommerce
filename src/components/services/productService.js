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
export const getProducts = async () => {
  let url = `/api/v1/product`;

  let request = await axios.get(Base_Url + url, {
    headers: {
      authorization: `Bearer ${getToken()}`,
      "content-type": "application/json",
      Accept: "application/json",
    },
  });
  return request;
};
export const getIndividualProducts = async (slug) => {
  console.log(slug);
  let url = `/api/v1/product/${slug}`;

  let request = await axios.get(Base_Url + url, {
    headers: {
      authorization: `Bearer ${getToken()}`,
      "content-type": "application/json",
      Accept: "application/json",
    },
  });
  return request;
};
