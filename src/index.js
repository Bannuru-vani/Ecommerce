import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { createStore } from "redux";
import { Provider } from "react-redux";
import { Provider as AuthProvider } from "../src/components/context/authContext";
import thunk from "redux-thunk";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/Store";
// const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
