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

export default function HomeNventoryJava() {
  return (
    <Grid item component={Card} alignItems="center">
      <div
        style={{
          backgroundColor: "#121212",
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",
        }}
      >
        <Box>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={require("./images/homenventory.png")}
              alt="Java Home Inventory"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Home Nventory System
              </Typography>
              <Typography variant="body2" color="text.secondary">
                HomeNventory system was a final project for our semester 3 at
                SAIT, the UI was designed using Bulma.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Java, Bootstrap, MySQL, Java servlets, and lastly Java JSTL
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
              target="_blank"
            >
              <Button size="small" variant="outlined" disabled>
                View Live
              </Button>
            </Link>
          </CardActions>
        </Box>
      </div>
    </Grid>
  );
}
