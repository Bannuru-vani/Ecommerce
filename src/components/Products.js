import React, { useEffect } from "react";
import { Grid, Button, Box } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import "./Dashboard.css";
import { useDispatch, userSelector, useSelector } from "react-redux";

import { data, popularProducts, categories } from "./_data";
import { getProducts } from "./services/productService";
import { getProductsData } from "../redux/actions/productAction";

function Products() {
  const { slug } = useParams();
  console.log(slug, "slug");
  // const data = useSelector((state) => state.tablereducers);
  const products = useSelector((state) => state.productReducer);
  console.log(products.products, "products");
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(getProducts());
  //   }, []);
  useEffect(() => {
    dispatch(getProductsData());
  }, []);
  return (
    <div style={{ margin: "20px" }}>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {products.products.map((product) => (
            <Grid item xs={3}>
              <div className="imageBox">
                <div
                  className="imageInn"
                  style={{ backgroundColor: "teal", height: "450px" }}
                >
                  <img src={product.image} />
                </div>

                <div className="hoverImg">
                  <div className="icons_img">
                    <Button
                      variant="outlined"
                      style={{ border: "none", borderRadius: "50px" }}
                    >
                      <Link to={"/cart/individual/product/" + product.slug}>
                        <i
                          style={{ fontSize: "30px" }}
                          class="fa-solid fa-cart-shopping"
                        ></i>
                      </Link>
                    </Button>
                    <Button variant="outlined">
                      {" "}
                      <i
                        style={{ fontSize: "30px" }}
                        class="fa-solid fa-magnifying-glass"
                      ></i>
                    </Button>
                    <Button variant="outlined">
                      {" "}
                      <i
                        style={{ fontSize: "30px" }}
                        class="fa-solid fa-heart"
                      ></i>
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Products;
