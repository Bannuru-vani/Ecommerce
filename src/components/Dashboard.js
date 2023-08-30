import { Typography, TextField, Grid, Button, Box } from "@mui/material";
import React from "react";
import "./Dashboard.css";

import { data, popularProducts, categories } from "./_data";
import Table from "./Table";

import Badge from "@mui/material/Badge";
import Slider from "./Slider";
import Products from "./Products";

function Dashboard() {
  return (
    <div>
      <div>
        <Slider />{" "}
      </div>
      {/* <div style={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {categories.map((categorie) => (
            <Grid item xs={4}>
              <div
                className="categories"
                style={{
                  width: "500px",
                  height: "500px",
                  backgroundImage: "url(" + categorie.img,
                  backgroundPosition: "center",
                  backgroundSize: "initial",
                }}
              >
                <Typography>{categorie.title}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
              </div> */}
      <div>
        <Products />
      </div>
    </div>
  );
}

export default Dashboard;
