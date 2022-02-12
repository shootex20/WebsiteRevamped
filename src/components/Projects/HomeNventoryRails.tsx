import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Link,
} from "@mui/material";

export default function HomeNventoryRails() {
  return (
    <Grid item component={Card} alignItems="center">
      <Box>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={require("./images/hnventory.png")}
            alt="Home Inventory Rails"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Home Nventory System
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is the home inventory system in CRUD style, it was a small
              project used for our emerging trends. You can create an account,
              add items, manage account, and sign out.
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Ruby on Rails, Bootstrap
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
            <Button
              size="small"
              style={{ color: "light blue" }}
              variant="outlined"
            >
              Source Code
            </Button>
          </Link>
          <br />
          <Link
            color="white"
            variant="button"
            underline="none"
            href="https://railsinventory.herokuapp.com"
            target="_blank"
          >
            <Button size="small" style={{ color: "white" }} variant="outlined">
              View Live
            </Button>
          </Link>
        </CardActions>
      </Box>
    </Grid>
  );
}
