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
      <div style={{ marginTop: 65 }}></div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        maxWidth="100%"
      >
        <Grid container sm={3}>
          <HomeNventoryJava />
          <HomeNventoryRails />
          <OurSafetyApp />
        </Grid>
      </Box>
      <div style={{ marginBottom: 10 }}></div>
    </>
  );
}

export default Projects;
