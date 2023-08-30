import { Typography } from "@mui/material";
import React, { useState } from "react";
import "./Login.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import homelogo from "../assests/homelogo.jpg";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
// toast.configure();
function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { resettoken } = useParams();

  console.log(resettoken);
  const navigate = useNavigate();
  const resetPassword = async () => {
    let user = { password, setConfirmPassword };
    console.log(password);
    let result = await fetch(
      `https://murmuring-bastion-53371.herokuapp.com/api/v1/auth/resetpassword/${resettoken}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    // result = await result.json(user);
    if (password !== "" && confirmPassword !== "") {
      navigate("/login");
      toast.success(" Password reset succesfully! ");
    }
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8} display="flex" justifyContent="center">
          <img className="logo_image_main" src={homelogo} alt="" />
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
            Enter your new Password here
            <br /> to reset password
          </Typography>

          <div className="login_form">
            <TextField
              style={{ width: "395px" }}
              id="standard-basic"
              label="Password"
              variant="standard"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <TextField
              style={{ width: "395px" }}
              id="standard-basic"
              label="confirm Password"
              variant="standard"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>

          <div className="button_field">
            <Button
              style={{
                borderRadius: "50px",
                padding: "10px",
                color: "black",
                marginLeft: "152px",
              }}
              type="submit"
              className="forgot_account"
              onClick={resetPassword}
            >
              Reset Password
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ResetPassword;
