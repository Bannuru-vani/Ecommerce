import axios from "axios";
import { useContext } from "react";

// export const getProducts = async () => {
//   let url = `https://jsonplaceholder.typicode.com/posts`;
//   let request = await axios.get(url, {
//     headers: {},
//   });
//   return request;
// };
let Base_Url = `https://express-app-chousinrahit.vercel.app`;
const getToken = () => {
  let token = localStorage.getItem("token");
  if (token) {
    return token;
  } else {
    return;
  }
};

export const getStepper = async () => {
  // const {
  //   state: { token },
  // } = useContext(AuthContext);

  //console.log(token, "abc");
  let url = `/api/v1/slider`;
  let request = await axios.get(Base_Url + url, {
    headers: {
      authorization: `Bearer ${getToken()}`,
      "content-type": "application/json",
      Accept: "application/json",
    },
  });
  return request;
};
