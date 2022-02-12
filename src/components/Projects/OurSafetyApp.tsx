import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Link,
  Grid,
  Box,
} from "@mui/material";

export default function OurSafetyApp() {
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
              image={require("./images/oursafety.png")}
              alt="OurSafetyApp"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                OurSafetyApp
              </Typography>
              <Typography variant="body2" color="text.secondary">
                OurSafetyApp is a safety management system, Companys can: Add
                equipment, remove Equipment, add employees, deactivate
                employees, edit employees, and add their own safety manuals.
                Admins can log in and add companys.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Java, Bootstrap, MySQL, Java servlets, Java JSTL.
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
