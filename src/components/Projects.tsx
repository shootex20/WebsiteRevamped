import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import "../styles/Projects.css";
import HomeNventoryJava from "./Projects/HomeNventoryJava";
import HomeNventoryRails from "./Projects/HomeNventoryRails";
import OurSafetyApp from "./Projects/OurSafetyApp";

function Projects() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Grid container sm={3}>
          <HomeNventoryJava />
          <HomeNventoryRails />
          <OurSafetyApp />
        </Grid>
      </Box>
    </>
  );
}

export default Projects;
