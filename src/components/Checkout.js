import React, { useState, useEffect } from "react";
import { Typography, Grid, TextField, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useForm } from "react-hook-form";
import Radio from "@mui/material/Radio";

import FormControlLabel from "@mui/material/FormControlLabel";

function Checkout() {
  const {
    register,
    handleSubmit,
    onBlur,
    watch,
    formState: { errors },
  } = useForm();
  const watchAllFields = watch();
  console.log("watchAllFields", watchAllFields);
  return (
    <div>
      <span style={{ margin: "10px", textAlign: "start" }}>
        <Typography variant="h4">Checkout</Typography>
      </span>
      <Grid container spacing={2} style={{ marginTop: "10px" }}>
        <Grid
          style={{ justifyContent: "center", marginTop: "10px" }}
          item
          xs={6}
          md={8}
        >
          <Typography variant="h5" style={{ alignItems: "center" }}>
            Billing Details
          </Typography>
          <div>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "80px",
                margin: "10px",
              }}
            >
              <span>
                <TextField
                  id="standard-basic"
                  label="First name"
                  {...register("firstName", {
                    required: "FirstName is required",
                  })}
                  onBlur={onBlur}
                  variant="standard"
                  // onChange={(e) => {
                  //   setFirstName(e.target.value);
                  // }}
                  // name="firstName"
                />
                <br />
                <div>
                  <Typography
                    style={{
                      color: "red",
                      marginTop: "5px",
                      marginRight: "53px",
                    }}
                  >
                    {errors.firstName && <p>{"FirstName is required"}</p>}
                    {/* {errors.firstName?.message} */}
                  </Typography>
                </div>
              </span>
              <span>
                <TextField
                  {...register("lastName", {
                    required: "LastName is required",
                  })}
                  // onChange={(e) => {
                  //   setLastName(e.target.value);
                  // }}
                  // name="lastName"
                  id="standard-basic"
                  label="Last name"
                  variant="standard"
                />
                <div>
                  <Typography
                    style={{
                      color: "red",
                      marginTop: "5px",
                      marginRight: "53px",
                    }}
                  >
                    {errors.lastName?.message}
                  </Typography>
                </div>
              </span>
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "10px",
              }}
            >
              <span>
                <TextField
                  id="standard-basic"
                  label="Company name(optional)"
                  fullWidth
                  style={{ width: "500px" }}
                  variant="standard"
                />
              </span>

              <span></span>
            </span>

            <span
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "10px",
              }}
            >
              <span style={{ width: "500px" }}>
                <InputLabel
                  id="demo-simple-select-autowidth-label"
                  style={{ textAlign: "flex-start" }}
                >
                  Country/Region
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  autoWidth
                  style={{ width: "500px" }}
                >
                  <MenuItem value={10}>India</MenuItem>
                  <MenuItem value={21}>America</MenuItem>
                  <MenuItem value={22}>LOndon</MenuItem>
                </Select>
              </span>
              <span></span>
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                margin: "10px",
              }}
            >
              <span>
                <TextField
                  id="standard-basic"
                  label="Street Address"
                  fullWidth
                  style={{ width: "500px" }}
                  variant="standard"
                />
              </span>

              <span></span>
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                margin: "10px",
              }}
            >
              <span style={{ margin: "10px" }}>
                <TextField
                  id="standard-basic"
                  fullWidth
                  style={{ width: "500px" }}
                  variant="standard"
                />
              </span>

              <span></span>
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                margin: "10px",
              }}
            >
              <span>
                <TextField
                  id="standard-basic"
                  label="Town/city"
                  fullWidth
                  style={{ width: "500px" }}
                  variant="standard"
                />
              </span>

              <span></span>
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <span>
                <TextField
                  id="standard-basic"
                  label="Zip"
                  fullWidth
                  style={{ width: "500px" }}
                  variant="standard"
                  {...register("zip", {
                    required: "Zip is required",
                    maxLength: 6,
                  })}

                  // onChange={(e) => {
                  //   setZip(e.target.value);
                  // }}
                />
                <br />
                {errors.zip ? (
                  <>
                    {errors.zip.type === "required" && (
                      <p style={{ background: "red", color: "white" }}>
                        {errors.zip.message}
                      </p>
                    )}
                    {errors?.zip.type === "maxLength" && (
                      <p style={{ color: "red" }}>
                        Zip cannot exceed 6 characters
                      </p>
                    )}
                  </>
                ) : null}
              </span>

              <span></span>
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                margin: "10px",
              }}
            >
              <span>
                <TextField
                  id="standard-basic"
                  label="Phone"
                  fullWidth
                  style={{ width: "500px" }}
                  variant="standard"
                />
              </span>

              <span></span>
            </span>
            <span>
              <Button onClick={handleSubmit()} variant="contained">
                Submit
              </Button>
            </span>
          </div>
        </Grid>
        <Grid
          item
          xs={6}
          md={4}
          style={{ marginLeft: "-17px", marginTop: "10px" }}
        >
          <Typography variant="h5">Your Order</Typography>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "60px",
              background: "lightgray",
              padding: "10px",
            }}
          >
            <Typography>Product</Typography>
            <Typography>SubTotal</Typography>
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "60px",

              padding: "10px",
            }}
          >
            <Typography>life-is-good-t-shirt</Typography>
            <Typography>$1000</Typography>
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "60px",

              padding: "10px",
            }}
          >
            <Typography>life-is-good-t-shirt</Typography>
            <Typography>$1000</Typography>
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "60px",

              padding: "10px",
            }}
          >
            <Typography>SubTotal</Typography>
            <Typography>$1000</Typography>
          </span>{" "}
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "60px",

              padding: "10px",
            }}
          >
            <Typography>Total</Typography>
            <Typography>$1000</Typography>
          </span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>
              <Button type="radio">
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Cash on Delivery"
                />
              </Button>
            </span>

            <span style={{ marginTop: "3px", marginRight: "73px" }}>
              <Button type="radio">
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="RazorPay"
                />
              </Button>
            </span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Checkout;
