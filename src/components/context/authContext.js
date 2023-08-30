import creatDataContext from "./creatDataContext";

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "Login":
      return { ...state, token: payload };
    default:
      return state;
  }
};
const login = (dispatch) => (payload) => {
  dispatch({
    type: "Login",
    payload: payload,
  });
};
const signup = (dispatch) => (payload) => {
  dispatch({
    type: "Login",
    payload: payload,
  });
};
export const { Context, Provider } = creatDataContext(
  authReducer,
  { login, signup },
  {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWFlZWUwN2RiNjljMDAxNmZmYTI1MCIsImlhdCI6MTY2MzMyMDQwMywiZXhwIjoxNjYzMzU2NDAzfQ.GpCfzyFSobj0h5QAEgmAzazD-a84rgpWo4TQ1_NSG5o",
  }
);
