import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Link, Grid } from "@mui/material";

export default function OurSafetyApp() {
  return (
    <Grid item component={Card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require("./images/oursafety.png")}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            OurSafetyApp
          </Typography>
          <Typography variant="body2" color="text.secondary">
            OurSafetyApp is a safety management system, Companys can: Add
            equipment, remove Equipment, add employees, deactivate employees,
            edit employees, and add their own safety manuals. Admins can log in
            and add companys. <br /> This was built using Java, Bootstrap,
            MySQL, Java servlets, and lastly Java JSTL.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link
          color="white"
          variant="button"
          underline="none"
          href="https://github.com/shootex20/OurSafetyApp_Maven"
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
