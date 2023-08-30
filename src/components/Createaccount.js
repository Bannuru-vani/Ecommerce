import { Typography } from "@mui/material";
import React, { useState } from "react";
import logo from "../assests/goastlogo.webp";
import "./Login.css";
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import homelogo from "../assests/homelogo.jpg";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";

function Createaccount() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const signupForm = async () => {
    let item = { name, email, password };
    console.log(item);
    let result = await fetch(
      "https://murmuring-bastion-53371.herokuapp.com/api/v1/auth/signup",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    // result = await result.json(item);
    console.log(result);
    localStorage.setItem("", JSON.stringify(result));
    if (result.status === 400) {
      toast.error("User Alredy exist");
    }
    if (name !== "" && email !== "" && password !== "") {
      if (result.status === 200) {
        navigate("/login");
        toast.success(
          "user has been created succesfully please login with your credentials"
        );
      }
    }
    // navigate("/dashboard");
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8} display="flex" justifyContent="center">
          <img className="logo_image_main" src={homelogo} alt={"image"} />
        </Grid>
        <Grid item xs={4} style={{ marginTop: "100px" }}>
          <Typography className="text_header" variant="h5">
            Welcome Create a new account here
          </Typography>
          <Typography className="text_small">
            To keep connected with us please signup with your personal
            <br />
            information by email address and password
            <i style={{ color: "#F6BE00" }} class="fa-solid fa-bell"></i>
          </Typography>

          <div className="login_form">
            <TextField
              {...register("name", {
                required: "Name is required",
              })}
              className="input_field"
              id="filled-basic"
              label="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Typography
              style={{ color: "red", marginRightt: "128px", marginTop: "5px" }}
            >
              {errors.name?.message}
            </Typography>
            <TextField
              {...register("email", {
                required: "Email address is required",
              })}
              className="input_field"
              id="filled-basic"
              label="Email"
              style={{ marginTop: "10px" }}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Typography
              style={{ color: "red", marginRightt: "128px", marginTop: "5px" }}
            >
              {errors.email?.message}
            </Typography>
            <TextField
              {...register("password", {
                required: "Password is required",
              })}
              style={{ marginTop: "10px" }}
              className="input_field"
              id="filled-basic"
              label="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <Typography style={{ color: "red", marginTop: "5px" }}>
              {errors.password?.message}
            </Typography>
          </div>

          <div className="">
            <Link to="/create_Account">
              <Button
                variant="contained"
                style={{
                  borderRadius: "50px",
                  padding: "10px 25px",
                  color: "white",
                  marginRight: "100px",
                }}
                type="submit"
                className="logiin_now"
                onClick={handleSubmit(signupForm)}
              >
                Signup
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Createaccount;
