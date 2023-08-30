import { Typography } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import logo from "../assests/goastlogo.webp";
import "./Login.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
// import homelogo from "../assests/homelogo.jpg";
import loginlogo from "../assests/loginimage.webp";
import Checkbox from "@mui/material/Checkbox";
// import loginlogo from "../assests/loginimage.webp;
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Context as AuthContext } from "../components/context/authContext";
function Login() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  console.log(login, "abc");
  // let Base_Url = `https://murmuring-bastion-53371.herokuapp.com`
  const LoginForm = async () => {
    let item = { email, password };
    console.log(item);
    let result = await fetch(
      "https://express-app-chousinrahit.vercel.app/api/v1/auth/login",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    if (result.status === 403) {
      toast.error("Invalid credentials,please enter valid credentials");
    }
    if (result.status === 200) {
      toast.success("User Logged in succesfully");
      navigate("/");
    }

    result = await result.json(item);
    localStorage.setItem("token", result.token);
    login(result.token);
    // if ({ token }) {
    //   navigate("/dashboard");
    // } else {
    //   navigate("/login");
    // }
  };
  return (
    <div>
      <div className="logo_main">
        <span>
          <img className="logo_image" src={logo} alt="image" />
        </span>
        <span className="logo_text">
          <Typography variant="h4">ghostlamp</Typography>
        </span>
      </div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={8} display="flex" justifyContent="center">
            <img className="logo_image_main" src={loginlogo} alt={"image"} />
          </Grid>
          <Grid item xs={4} style={{ marginTop: "100px" }}>
            <Typography className="text_header" variant="h5">
              Welcome Back :)
            </Typography>
            <Typography className="text_small">
              To keep connected with us please login with your personal
              <br />
              information by email address and password
              <i style={{ color: "#F6BE00" }} class="fa-solid fa-bell"></i>
            </Typography>
            <form>
              <div>
                <div className="login_form">
                  <TextField
                    {...register("email", {
                      required: "Email address is required",
                    })}
                    className="input_field"
                    id="filled-basic"
                    label="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    // value={email}
                  />
                  <br />
                  <div>
                    <Typography style={{ color: "red" }}>
                      {errors.email?.message}
                    </Typography>
                  </div>

                  <TextField
                    {...register("password", {
                      required: true,
                      maxLength: 20,
                    })}
                    style={{ marginTop: "10px" }}
                    className="input_field"
                    id="filled-basic"
                    label="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <br />
                  <div>
                    <Typography style={{ color: "red" }}>
                      {errors.password?.type === "required" &&
                        "First name is required"}
                    </Typography>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    marginLeft: "-150px",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "10px",
                    }}
                  >
                    <Checkbox color="success" />
                    <Typography> Remember me</Typography>
                  </span>
                  <Link to="/forgotpassword">
                    <a
                      href=""
                      style={{ color: "blue", textDecoration: "underline" }}
                    >
                      Forgot Password?
                    </a>
                  </Link>
                </div>
                <div className="button_field">
                  <Button
                    variant="contained"
                    style={{ borderRadius: "50px", padding: "10px 25px" }}
                    className="logiin_now"
                    type="submit"
                    onClick={handleSubmit(LoginForm)}
                  >
                    Login Now
                  </Button>

                  <Link to="/create_Account">
                    <Button
                      style={{
                        borderRadius: "50px",
                        padding: "10px 25px",
                        color: "black",
                        marginLeft: "21px",
                      }}
                      className="create_account"
                    >
                      Create Account
                    </Button>
                  </Link>
                </div>
                <div className="" style={{ marginTop: "20px" }}>
                  <Typography style={{ textAlign: "start" }}>
                    Or you can join with
                  </Typography>
                </div>
              </div>
            </form>

            <div className="button_field_group">
              <Button>
                <i style={{ fontSize: "20px" }} class="fa-brands fa-google"></i>
              </Button>
              <Button>
                <i
                  style={{ fontSize: "20px" }}
                  class="fa-brands fa-facebook"
                ></i>
              </Button>
              <Button>
                <i
                  style={{ fontSize: "20px" }}
                  class="fa-brands fa-twitter"
                ></i>
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Login;
