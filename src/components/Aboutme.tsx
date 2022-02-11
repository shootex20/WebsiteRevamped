import { Box } from "@mui/material";
import React from "react";
import "../styles/Aboutme.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid, Link } from "@mui/material";

function Aboutme() {
  const styles = (theme) => ({
    Card: {
      width: 300,
      margin: "auto",
    },
    Media: {
      height: "100%",
      width: "100%",
    },
  });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Grid container sm={2}>
        <Grid item component={Card}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={require("./Projects/images/profile.jpg")}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                About me
              </Typography>
              <br />
              <Typography variant="body2" color="text.secondary">
                Graduated from Southern Alberta Institute of Technology majoring
                in Software Development.
              </Typography>
              <br />
              <Typography variant="body2" color="text.secondary">
                Programming Languages: Java, JavaScript/HTML/CSS, SQL, Bash, C#,
                React.js, TypeScript.js
              </Typography>
              <br />
              <Typography variant="body2" color="text.secondary">
                Frameworks: Express.js, Node.js, .Net framework Tools: Azure,
                Git, Azure DevOps, CI/CD, Maven, Tomcat
              </Typography>
              <br />
              <Typography variant="body2" color="text.secondary">
                I have experience in DevOps as well, mostly in Azure and setting
                up new apps from scratch and tinkering with build pipelines on
                deploying apps.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Aboutme;
