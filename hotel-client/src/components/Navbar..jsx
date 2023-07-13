import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
  useMediaQuery,
  useTheme,
  ThemeProvider,
  Container,
  TextField,
  InputAdornment,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import logo from "../assets/logo.svg";
import avater from "../assets/16.jpg";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  typography: {
    "&:hover": {
      color: theme.palette.primary.main,
      cursor: "pointer",
    },
  },
  activeSlug: {
    color: theme.palette.primary.main,
    backgroundColor:"rgba(76, 175, 80, 0.1)",
    padding: "2px 30px",
    borderRadius: "30px",
    fontWeight: "bold",
  },
 
  registerButton: {
    // padding: "5px 20px",
    border: "2px solid orange",
    borderRadius: "30px",
    paddingLeft:"20px",
    paddingRight:"20px",

    // fontSize: "10px", // Change the background color to your desired color
  },
}));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsOpen(false);
  };

  const renderDrawer = (
    <Drawer anchor="top" open={isOpen} onClose={() => setIsOpen(false)}>
      <List style={{ justifyContent: "space-between" }}>
        {["Home", "Rooms", "Login", "Register"].map((item) => (
          <Link
            to={`/${item.toLowerCase()}`}
            style={{ textDecoration: "none", color: "black" }}
            key={item}
            onClick={() => handleItemClick(item)}
          >
            <ListItem button selected={activeItem === item}>
              <ListItemText
                primary={item}
                className={`${classes.typography} ${
                  activeItem === item ? classes.activeSlug : ""
                }`}
              />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar
          position="fixed"
          elevation={4}
          style={{ backgroundColor: "#ffffff", paddingBottom:"5px"}}
          
        >
          <Toolbar
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 20px",
            }}
          >
            {isMobile ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <IconButton
                  edge="start"
                  color="black"
                  aria-label="menu"
                  onClick={handleToggle}
                >
                  <MenuIcon />
                </IconButton>
              </div>
            ) : null}
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#000",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={logo}
                alt="logo"
                style={{ height: "50px", marginRight: "10px" }}
              />
            </Link>
            {isMobile && <Avatar alt="Avatar" src="/avatar.jpg" />}

            {!isMobile && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "end",
                  width: "50%",
                }}
              >
                <Link
                  to="/home"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginRight: "10px",
                  }}
                  onClick={() => setActiveItem("Home")}
                >
                  <Typography
                    variant="subtitle1"
                    className={`${classes.typography} ${
                      activeItem === "Home" ? classes.activeSlug : ""
                    }`}
                  >
                    Home
                  </Typography>
                </Link>
                <Link
                  to="/rooms"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginRight: "10px",
                  }}
                  onClick={() => setActiveItem("Rooms")}
                >
                  <Typography
                    variant="subtitle1"
                    className={`${classes.typography} ${
                      activeItem === "Rooms" ? classes.activeSlug : ""
                    }`}
                  >
                    Rooms
                  </Typography>
                </Link>
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginRight: "10px",
                  }}
                  onClick={() => setActiveItem("Login")}
                >
                  <Typography
                    variant="subtitle1"
                    className={`${classes.typography} ${
                      activeItem === "Login" ? classes.activeSlug : ""
                    }`}
                  >
                    Login
                  </Typography>
                </Link>
                <Link
                  to="/register"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginRight: "10px",
                  }}
                  onClick={() => setActiveItem("Register")}
                >
                  <Typography
                    variant="subtitle1"
                    className={`${classes.typography} ${
                      activeItem === "Register" ? classes.activeSlug : ""
                    } ${classes.registerButton}`}
                  >
                    Join Now
                  </Typography>
                </Link>
                
                
                
                <Avatar alt="Avatar" src={avater} />
              </div>
            )}
          </Toolbar>
        </AppBar>
        {isMobile ? renderDrawer : null}
      </ThemeProvider>
    </>
  );
};

export default Navbar;
