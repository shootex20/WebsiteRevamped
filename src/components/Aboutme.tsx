import { Box, OutlinedInput, TextField } from "@mui/material";
import React from "react";
import "../styles/Aboutme.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid, Link } from "@mui/material";
import FadeIn from "react-fade-in";

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
    <>
      <div style={{ marginTop: 65 }}></div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          border:
            "2px solid #121212 linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",
          borderRadius: "25px",
          width: "70%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "25px",
            padding: "1%",
            width: "100%",
            height: "100%",
          }}
        >
          <FadeIn transitionDuration={2000}>
          <Grid container spacing={2}>
            <Grid item xs={12} display={"flex"}>
              <div
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#121212",
                  width: "100%",
                  height: "100%",
                  backgroundImage:
                    "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",
                }}
              >
                <TextField
                  disabled
                  id="contained-disabled"
                  label="Education"
                  defaultValue="Graduated from Southern Alberta Institute of Technology majoring in Software Development."
                  multiline
                  fullWidth
                  rows={5}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#121212",
                  width: "100%",
                  height: "100%",
                  backgroundImage:
                    "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",
                }}
              >
                <TextField
                  disabled
                  id="contained-disabled"
                  label="Experience"
                  defaultValue="Junior DevOps @ SparrowConnected.
June 2021 - Current"
                  multiline
                  fullWidth
                  rows={5}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#121212",
                  width: "100%",
                  height: "100%",
                  backgroundImage:
                    "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",
                }}
              >
                <TextField
                  disabled
                  id="contained-disabled"
                  label="Programming languages"
                  defaultValue="Java, JavaScript/HTML/CSS, SQL, Bash, C#, React.js, TypeScript.js"
                  multiline
                  fullWidth
                  rows={5}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#121212",
                  width: "100%",
                  height: "100%",
                  backgroundImage:
                    "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",
                }}
              >
                <TextField
                  disabled
                  id="contained-disabled"
                  label="Tools and Frameworks"
                  defaultValue="Express.js, Node.js, .Net, Azure, Git, Azure DevOps, CI/CD, Maven, Tomcat"
                  multiline
                  fullWidth
                  rows={5}
                />
              </div>
            </Grid>
          </Grid>
          </FadeIn>
        </div>
      </div>
      <div style={{ marginBottom: 10 }}></div>
    </>
  );
}

export default Aboutme;

/*     //   <Grid container sm={2}>
    //     <Grid item component={Card}>
    //       <CardActionArea>
    //         <CardMedia
    //           component="img"
    //           image={require("./Projects/images/profile.jpg")}
    //         />
    //         <CardContent>
    //           <Typography gutterBottom variant="h5" component="div">
    //             About me
    //           </Typography>
    //           <br />
    //           <Typography variant="body2" color="text.secondary">
                Graduated from Southern Alberta Institute of Technology majoring
                in Software Development. January 2020 - April 2002
    //           </Typography>
    //           <br />
    //           <Typography variant="body2" color="text.secondary">
                Programming Languages: Java, JavaScript/HTML/CSS, SQL, Bash, C#,
                React.js, TypeScript.js
    //           </Typography>
    //           <br />
    //           <Typography variant="body2" color="text.secondary">
                Frameworks: Express.js, Node.js, .Net framework Tools: Azure,
                Git, Azure DevOps, CI/CD, Maven, Tomcat
    //           </Typography>
    //           <br />
    //           <Typography variant="body2" color="text.secondary">
                // I have experience in DevOps as well, mostly in Azure and setting
                // up new apps from scratch and tinkering with build pipelines on
                // deploying apps.
    //           </Typography>
    //         </CardContent>
    //       </CardActionArea>
    //       <CardActions></CardActions>
    //     </Grid>
    //   </Grid> */
