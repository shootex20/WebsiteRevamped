import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import FolderIcon from "@mui/icons-material/Folder";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import DescriptionIcon from "@mui/icons-material/Description";
import { Grid, Link } from "@mui/material";
import "../styles/Header.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const drawerWidth = 240;

const useStyles = {
  icon: {
    minWidth: "30px",
  },
};

const navigationLinks = [
  { name: "Home", href: "/", icon: <HomeIcon style={{ minWidth: "40px" }} /> },
  {
    name: "About",
    href: "/about",
    icon: <InfoIcon style={{ minWidth: "40px" }} />,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: <FolderIcon style={{ minWidth: "40px" }} />,
  },
  {
    name: "Resume",
    href: "/resume",
    icon: <DescriptionIcon style={{ minWidth: "40px" }} />,
  },
];

const connectLinks = [
  {
    name: "GitHub",
    href: "https://github.com/shootex20",
    icon: (
      <GitHubIcon style={{ minWidth: "40px", width: "15%", height: "15%" }} />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/chelseycoughlin/",
    icon: (
      <LinkedInIcon
        style={{
          minWidth: "40px",
          color: "#0077b5",
          width: "15%",
          height: "15%",
        }}
      />
    ),
  },
];

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  // const storedOpen = JSON.parse(localStorage.getItem('drawerOpen'));
  // const [open, setOpen] = React.useState(storedOpen);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    // if (!open) {
    //   setOpen(true);
    //   localStorage.setItem('drawerOpen', true);
    // } else {
    //   setOpen(false);
    //   localStorage.setItem('drawerOpen', false);
    // }
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography variant="h6" noWrap component="div">
            Chelsey Coughlin
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {navigationLinks.map((item) => (
            <ListItem key={item.name}>
              {item.icon}
              <Link
                color="white"
                variant="button"
                underline="none"
                href={item.href}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>

        <List style={{ marginTop: `auto` }}>
          <Grid container justifyContent={"center"}>
            {connectLinks.map((item) => (
              <Grid item xs={4}>
                <ListItem key={item.name}>
                  {item.icon}
                  <Link
                    color="white"
                    variant="button"
                    underline="none"
                    href={item.href}
                  ></Link>
                </ListItem>
              </Grid>
            ))}
          </Grid>
        </List>
      </Drawer>
    </Box>
  );
}
