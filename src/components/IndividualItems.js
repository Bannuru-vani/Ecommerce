import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { data } from "./_data";
import "./IndividualItems.css";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useParams, Link } from "react-router-dom";
import { Button, TextField, Typography, Alert } from "@mui/material";
import { useEffect } from "react";
import { getIndividualProductsData } from "../redux/actions/productAction";
import Snackbar from "@mui/material/Snackbar";
import { ToastContainer, toast } from "react-toastify";
import {
  addProductstoCart,
  getProductCartCount,
} from "../redux/actions/AddtoCartaction";
function IndividualItems() {
  const [age, setAge] = React.useState("");
  const [quantity, setQuantity] = React.useState(0);
  const [size, setSize] = useState({});
  const [color, setColor] = useState({});
  const notify = () => toast.error("quantity has to be more than one");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setSize(event.target.value);
  };
  const increaseQuantity = () => {
    console.log("quantity", quantity);
    // if (quantity < 1) {
    //   notify();
    // }

    setQuantity(quantity + 1);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const decreaseQuantity = () => {
    // if (quantity <= 1 || quantity === 0) {
    //   notify();
    // }
    console.log("quantity", quantity);
    setQuantity(quantity - 1);
  };
  const individualProduct = useSelector(
    (state) => state.individualproductReducer.individualProduct
  );
  let colors = individualProduct.color;
  console.log(colors, "colors");
  console.log(individualProduct, "individualProduct");
  const { slug } = useParams();
  console.log(slug, "slug");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIndividualProductsData(slug));
  }, [slug]);
  const addProductstotheCart = () => {
    console.log("kkkk", quantity);
    if (quantity < 1 || quantity === 0) {
      notify();
    }
    console.log("addProductstotheCart", "nnnnnnn");

    dispatch(addProductstoCart({ productId: individualProduct._id, quantity }));
    // dispatch(getProductCartCount());
  };
  return (
    <div>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Grid item xs={6} style={{ marginTop: "50px" }}>
          <img src={individualProduct.image} alt="product image" />
        </Grid>
        <Grid item xs={6} style={{ marginTop: "100px", padding: "38px" }}>
          <Typography variant="h4" style={{ textAlign: "start" }}>
            {individualProduct.name}
          </Typography>
          <div style={{ textAlign: "justify", marginTop: "20px" }}>
            <Typography
              variant="p"
              style={{ textAlign: "justify", marginTop: "10px" }}
            >
              {individualProduct.desc}
            </Typography>
          </div>
          <div style={{ textAlign: "start", marginTop: "20px" }}>
            <Typography variant="h4">{individualProduct.price}</Typography>
          </div>

          <div
            style={{
              display: "flex",
              textAlign: "start",
              justifyContent: "start",
              gap: "246px",
              margin: "28px",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <Typography>Color</Typography>
              {colors?.map((color) => (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    style={{
                      borderRadius: "20px",
                      backgroundColor: color,
                      width: "20px",
                      height: "20px",
                    }}
                  ></div>
                </div>
              ))}
            </span>
            <span style={{ display: "flex", alignItems: "center" }}>
              <Typography>Size</Typography>
              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  xs
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={size}
                  onChange={handleChange}
                  autoWidth
                  label="Size"
                >
                  <MenuItem value={10}>xs</MenuItem>
                  <MenuItem value={21}>Sm</MenuItem>
                  <MenuItem value={22}>xl</MenuItem>
                </Select>
              </FormControl>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              gap: "250px",
              marginTop: "20px",
            }}
          >
            <span>
              <Button
                variant="text"
                style={{ color: "black", fontSize: "28px" }}
                onClick={decreaseQuantity}
              >
                -
              </Button>

              <input
                className="form-control"
                style={{
                  border: "1px solid teal",
                  width: "31px",
                  height: "21px",
                }}
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
              <Button
                variant="text"
                style={{ color: "black", fontSize: "28px" }}
                onClick={increaseQuantity}
              >
                +
              </Button>
            </span>
            <span>
              <Button
                variant="outlined"
                type="submit"
                style={{ borderColor: "teal", color: "black" }}
                onClick={addProductstotheCart}
              >
                Add to Cart
              </Button>
              <ToastContainer />
            </span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default IndividualItems;
