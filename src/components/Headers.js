import React, { useContext, useEffect } from "react";
import { Typography, TextField, Grid, Button, Box } from "@mui/material";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductCartCount } from "../redux/actions/AddtoCartaction";
import { Context as AuthContext } from "../components/context/authContext";
function Headers() {
  const { productsCount } = useSelector((state) => state.getProductsCount);
  console.log(productsCount.cartCount);
  const dispatch = useDispatch();
  const {
    state: { token },
  } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      dispatch(getProductCartCount());
    }
  }, [token]);
  return (
    <div>
      <div className="text_home">
        <Typography variant="h6" style={{ color: "white" }}>
          Super deal free shipping on Orders over $50
        </Typography>
      </div>
      <div className="lama_header">
        <span>
          <Link to="/">
            <Typography className="text_lama" variant="h5">
              LAMA.S
            </Typography>
          </Link>

          {/*  <TextField id="filled-search" label="Search field" type="search" /> */}
        </span>
        <span style={{ display: "flex", gap: "100px", marginRight: "73px" }}>
          <Link to="/">
            <Typography variant="h6">Products</Typography>
          </Link>
          <Link to="/">
            <Typography variant="h6">categories</Typography>
          </Link>
          <Link to="/account">
            <Typography variant="h6">Account</Typography>
          </Link>
          <Link to="/practice">
            <Typography variant="h6">Practice</Typography>
          </Link>
        </span>
        <span>
          <Link to="/cart/products/addtocart">
            {" "}
            <Badge badgeContent={productsCount.cartCount} color="primary">
              <i class="fa-solid fa-cart-shopping"></i>
            </Badge>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Headers;
