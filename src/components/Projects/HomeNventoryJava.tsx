import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid, Link } from "@mui/material";

export default function HomeNventoryJava() {
  return (
    <Grid item component={Card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require("./images/homenventory.png")}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Home Nventory System
          </Typography>
          <Typography variant="body2" color="text.secondary">
            HomeNventory system was a final project for our semester 3 at SAIT,
            the UI was designed using Bulma. <br /> This was built entirely with
            Java, JSTL, Servlets. This was built using Java, Bootstrap, MySQL,
            Java servlets, and lastly Java JSTL
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link
          color="white"
          variant="button"
          underline="none"
          href="https://github.com/shootex20/Semester3_Final_WebDev_Project"
          target="_blank"
        >
          <Button size="small" style={{ color: "white" }} variant="outlined">
            Source Code
          </Button>
        </Link>
      </CardActions>
    </Grid>
  );
}
