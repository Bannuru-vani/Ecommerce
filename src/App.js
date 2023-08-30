import React, { Fragment } from "react";
import { useContext } from "react";
import WithHeader from "./components/WithHeader";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Headers from "./components/Headers";
import Footer from "./components/Footer";
import Createaccount from "./components/Createaccount";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";
import { Context as AuthContext } from "./components/context/authContext";
import ResetPassword from "./components/ResetPassword";
import { ToastContainer } from "react-toastify";
import IndividualItems from "./components/IndividualItems";
import "react-toastify/dist/ReactToastify.css";
import AddtoCart from "./components/AddtoCart";
import Checkout from "./components/Checkout";
import Practice from "./components/Practice";
import Account from "./components/Account";
function App() {
  const {
    state: { token },
  } = useContext(AuthContext);

  return (
    <div className="App">
      <BrowserRouter>
        <>
          <Headers />
          <Routes>
            <Route
              path="/cart/individual/product/:slug"
              element={<IndividualItems />}
            />
            <Route
              path="/cart/products/addtocart"
              element={<AddtoCart />}
            ></Route>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
        </>

        <>
          <Routes>
            <Route path="/create_Account" element={<Createaccount />}></Route>
            <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
            <Route
              path="/resetPassword/:resettoken"
              element={<ResetPassword />}
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/practice" element={<Practice />}></Route>
            <Route path="/account" element={<Account />}></Route>
          </Routes>
        </>
      </BrowserRouter>

      <ToastContainer />
    </div>
  );
}

export default App;
