import { Typography, Button, Box, Grid, Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "./_data";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteAllProductsFromCart,
  getProductsFromTheCart,
  deleteSingleItemFromCart,
} from "../redux/actions/AddtoCartaction";

function AddtoCart() {
  const [quantity, setQuantity] = useState({});

  const { getProductsdata } = useSelector(
    (state) => state.getProductsfromtheCart
  );

  useEffect(() => {
    console.log(getProductsdata?.items);
    console.log(quantity);
    if (getProductsdata?.items?.length) {
      let quantitylist = {};
      getProductsdata?.items.forEach((product) => {
        quantitylist[product._id] = product.quantity;
        console.log(quantitylist, "quant");
      });

      setQuantity(quantitylist);
    }
  }, [getProductsdata]);
  const quantityChange = (value, id) => {
    console.log(value, id, "jjjj");
    let quantitylist = { ...quantity };
    quantitylist[id] = value;
    console.log(quantitylist);
    setQuantity(quantitylist);
  };
  // const { deleteAllProducts } = useSelector(
  //   (state) => state.deleteAllProductsfromCart
  // );
  //console.log(getProductsdata, deleteAllProducts, "getProductsdata");
  console.log(getProductsdata, "getProductsFromTheCart");
  const dispatch = useDispatch();
  const decrementQuantity = () => {
    setQuantity(quantity - 1);
  };
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const deleteSingleitemFromCart = (productId) => {
    console.log("deleteSingleItemFromCart");
    dispatch(deleteSingleItemFromCart(productId));
  };
  useEffect(() => {
    dispatch(getProductsFromTheCart());
    // dispatch(deleteAllProductsFromCart());
  }, []);
  const deleteAllProductsfromCart = () => {
    console.log("deleteAllProducts");
    dispatch(deleteAllProductsFromCart());
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <Typography variant="h3">Your Bag</Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <span>
          <Button
            variant="outlined"
            style={{
              border: "1px solid black",
              color: "black",
              padding: "15px",
            }}
          >
            Continue Shopping
          </Button>
        </span>
        <span style={{ display: "flex", gap: "20px" }}>
          <Link to="/" style={{ textDecoration: "underline" }}>
            <Typography variant="h6">Shopping Bag(2)</Typography>
          </Link>
          <Link to="/">
            <Typography style={{ textDecoration: "underline" }} variant="h6">
              Your wishlist(0)
            </Typography>
          </Link>
        </span>
        <span>
          <Button
            onClick={deleteAllProductsfromCart}
            variant="contained"
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "15px",
            }}
          >
            Delete All
          </Button>
        </span>
      </div>
      <Box sx={{ flexGrow: 1 }} style={{ marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            {getProductsdata.items?.map((products) => (
              <div
                style={{ display: "flex", alignItems: "center" }}
                key={products._id}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span>
                    <img
                      style={{
                        width: "500px",
                        height: "300px",
                        marginLeft: "129px",
                        backgroundSize: "contain",
                      }}
                      src={products.product.image}
                      alt="productimage"
                    />
                  </span>
                  <span>
                    <span style={{ display: "flex", marginTop: "10px" }}>
                      <Typography variant="h5" style={{ fontWeight: 300 }}>
                        Product:
                      </Typography>
                      <Typography variant="h6">
                        {products.product.name}
                        {/*  {getProductsdata.items[0].product.name} */}
                      </Typography>
                    </span>
                    <span style={{ display: "flex", marginTop: "10px" }}>
                      <Typography variant="h5" style={{ fontWeight: 300 }}>
                        ID:
                      </Typography>
                      <Typography variant="h6">102822</Typography>
                    </span>
                    <div style={{ display: "flex", margin: "2px" }}></div>

                    <span style={{ display: "flex", marginTop: "10px" }}>
                      <Typography variant="h5" style={{ fontWeight: 300 }}>
                        Size:
                      </Typography>
                      <Typography variant="h6">size</Typography>
                    </span>
                  </span>
                </div>
                <div>
                  <span>
                    <Button
                      variant="text"
                      style={{ color: "black", fontSize: "28px" }}
                      onClick={decrementQuantity}
                    >
                      -
                    </Button>
                    <input
                      value={quantity[products._id]}
                      onChange={(e) => {
                        quantityChange(e.target.value, products._id);
                      }}
                      className="form-control"
                      style={{
                        border: "1px solid teal",
                        width: "31px",
                        height: "21px",
                      }}
                    />
                    <Button
                      variant="text"
                      style={{ color: "black", fontSize: "28px" }}
                      onClick={incrementQuantity}
                    >
                      +
                    </Button>
                    <span>
                      <Button>Edit</Button>
                      <Button
                        onClick={() =>
                          deleteSingleitemFromCart(products.product._id)
                        }
                      >
                        Delete
                      </Button>
                    </span>
                  </span>
                  <span>
                    <Typography variant="h4">
                      $ {products.product.price}
                    </Typography>
                  </span>
                </div>
              </div>
            ))}
          </Grid>
          <Grid item xs={6} md={4}>
            <Card
              style={{ height: "300px", width: "500px", padding: "0px 30px" }}
            >
              <Typography variant="h4">Order Summary</Typography>
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <Typography variant="h6">SubTotal</Typography>
              </span>

              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                {" "}
                <Typography variant="h6">Estimated Shipping</Typography>
                <Typography variant="h6">$80</Typography>
              </span>
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                {" "}
                <Typography variant="h6">Shipping Amount</Typography>
                <Typography variant="h6">$80</Typography>
              </span>
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <Typography variant="h5">Total</Typography>
                <Typography variant="h6">
                  {getProductsdata.subTotal ? getProductsdata.subTotal : "-"}
                </Typography>
              </span>
              <div style={{ marginTop: "20px" }}>
                <Link to="/checkout">
                  {console.log(getProductsdata?.items?.length === 0)}
                  <Button
                    disabled
                    // disabled={true}
                    // disabled={getProductsdata?.items?.length === 0}
                    // variant="contained"
                    fullWidth
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      padding: "12px",
                    }}
                  >
                    Checkout Now
                  </Button>
                </Link>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default AddtoCart;
