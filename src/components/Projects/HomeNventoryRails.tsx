import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid, Link } from "@mui/material";

export default function HomeNventoryRails() {
  return (
    <Grid container>
      <Grid item component={Card}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={require("./images/hnventory.png")}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Home Nventory System
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is the home inventory system in CRUD style, it was a small
              project used for our emerging trends. I made a small app which
              consisted of some basic bootstrap to keep it looking clean and
              simple. This was built using Ruby on Rails, Bootstrap, and the
              devise gem.
              <br /> You can create an account, add items, manage account, and
              sign out.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link
            color="white"
            variant="button"
            underline="none"
            href="https://github.com/shootex20/Rails---Home-Nventory"
            target="_blank"
          >
            <Button size="small" style={{ color: "white" }} variant="outlined">
              Source Code
            </Button>
          </Link>
        </CardActions>
      </Grid>
    </Grid>
  );
}
