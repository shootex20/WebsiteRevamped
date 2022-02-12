import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Router from "./routes/Router";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
