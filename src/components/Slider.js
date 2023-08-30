import React, { useEffect, useContext } from "react";
import { Typography, TextField, Grid, Button, Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
//import { data } from "./_data";
import { getSliderData } from "../redux/actions/sliderAction";
import { useSelector, useDispatch } from "react-redux";
// import { Context as AuthContext } from "./components/context/authContext";
function Slider() {
  const data = useSelector((state) => state.sliderReducer);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSliderData());
  }, []);

  return (
    <div>
      <Carousel>
        {data.data.map((item) => (
          <div
            className=""
            key={item}
            item={item}
            style={{
              height: "100vh",
              alignItems: "center",
              marginTop: "150px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <div
                  style={{
                    backgroundColor: item.bg,
                    width: "500px",
                    height: "500px",
                    borderRadius: "500px",
                    alignItems: "center",
                  }}
                >
                  <img style={{ alignItems: "end" }} src={item.img} />
                </div>
              </Grid>
              <Grid item xs={8} style={{ marginTop: "200px" }}>
                <Typography
                  variant="h3"
                  style={{
                    textAlign: "start",
                    marginLeft: "100px",
                    fontWeight: 500,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  style={{
                    marginTop: "50px",
                    marginLeft: "100px",
                    textAlign: "left",
                  }}
                  variant="h4"
                >
                  {item.desc}
                </Typography>

                <Button className="shop_now" variant="outlined">
                  Shop Now{" "}
                  <span style={{ margin: "10px" }}>
                    <i class="fa-solid fa-play"></i>
                  </span>
                </Button>
              </Grid>
            </Grid>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
