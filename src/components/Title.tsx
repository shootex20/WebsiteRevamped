import { Box } from "@mui/material";
import React from "react";
import Typed from "react-typed";
import '../styles/Title.css';
import { useNavigate } from "react-router-dom";

function Title() {
  const navigate = useNavigate();
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <h1 className="titleFontIncrease">
          <Typed
            strings={[
              "Chelsey Coughlin <br/> Software Engineer",
            ]}
            typeSpeed={60}
            backSpeed={80}
            className="titleFontIncrease"
          />
        </h1>
      </Box>
    </div>
  );
}

export default Title;
