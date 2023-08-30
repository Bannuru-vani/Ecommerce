import { Typography } from "@mui/material";
import React, { useState } from "react";
import "./Login.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import homelogo from "../assests/homelogo.jpg";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";

import Input from "@mui/material/Input";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const forgotPassword = async () => {
    let user = { email };
    console.log(email);
    let result = await fetch(
      "https://murmuring-bastion-53371.herokuapp.com/api/v1/auth/forgetpassword",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    result = await result.json(user);
    localStorage.setItem("", JSON.stringify(result.token));
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8} display="flex" justifyContent="center">
          <img className="logo_image_main" src={homelogo} alt={"image"} />
        </Grid>
        <Grid item xs={4} style={{ marginTop: "200px" }}>
          <Typography
            variant="h4"
            style={{ marginLeft: "-164px" }}
            className="text_header_forgot"
          >
            Reset Password
          </Typography>
          <Typography
            style={{ marginLeft: "-164px", color: "gray", marginTop: "10px" }}
          >
            Enter your previous email adress below
            <br /> to reset password
          </Typography>

          <div className="login_form">
            <TextField
              style={{ width: "395px" }}
              id="standard-basic"
              label="Email"
              variant="standard"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="">
            <Button
              style={{
                borderRadius: "50px",
                padding: "10px",
                color: "black",
                marginRight: "132px",
              }}
              type="submit"
              className="forgot_account"
              onClick={forgotPassword}
            >
              Forgot Password
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ForgotPassword;
