import { Typography, Button } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Typography variant="h4">LAMA</Typography>
          <Typography variant="h6" style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Donec venenatis, dolor in finibus malesuada,
            <br /> lectus ipsum porta nunc, at culis arcu nisi sed <br />
            auriNulla fermentum vestibulum ex, egettristique
            <br />
            tortor pretium ut. Curabitur elit justo,
            <br /> consequat idcondimentum ac, volutpat ornare.
          </Typography>
          <div className="button_field_group">
            <Button>
              <i style={{ fontSize: "20px" }} class="fa-brands fa-google"></i>
            </Button>
            <Button>
              <i style={{ fontSize: "20px" }} class="fa-brands fa-facebook"></i>
            </Button>
            <Button>
              <i style={{ fontSize: "20px" }} class="fa-brands fa-twitter"></i>
            </Button>
          </div>
        </div>

        <div>
          <Typography variant="h4">Useful Links</Typography>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "200px",
            }}
          >
            <Typography variant="p">Home</Typography>
            <Typography variant="p">Cart</Typography>
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "200px",
            }}
          >
            <Typography variant="h5">Home</Typography>
            <Typography variant="h5">Cart</Typography>
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "200px",
            }}
          >
            <Typography variant="h5">Home</Typography>
            <Typography variant="h5">Cart</Typography>
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "200px",
            }}
          >
            <Typography variant="h5">Home</Typography>
            <Typography variant="h5">Cart</Typography>
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "200px",
            }}
          >
            <Typography variant="h5">Home</Typography>
            <Typography variant="h5">Cart</Typography>
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "200px",
            }}
          >
            <Typography variant="h5">Home</Typography>
            <Typography variant="h5">Cart</Typography>
          </span>
        </div>
        <div>
          <Typography variant="h5">Contact</Typography>
          <Typography variant="h6"> bbbbbbbbbbbbbbbm iiiiiiiiiiii</Typography>
          <Typography variant="h6"> + 1234567</Typography>
          <Typography variant="h6">vani.b@gmail.com</Typography>
          <Typography variant="h6">mmmmmmmmmmmmmmmm</Typography>
        </div>
      </div>
    </div>
  );
}

export default Footer;
