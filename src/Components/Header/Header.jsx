import React, { useContext, useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";
import ModeSwitch from "../PagesComp/ModeSwitch";
import { ThemeModeContext } from "../../Themes/ThemeProvider";

const Header = () => {
  const theme = useTheme();
  const { mode } = useContext(ThemeModeContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = ["Home", "About", "Services", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        top:0,
        left:0,
        zIndex:1000,
        backgroundColor: scrolling
        ? theme.palette.background.paper
        : mode === "dark"
        ? "rgba(255, 255, 255, 0.1)" // Light white in dark mode
        : "rgba(255, 255, 255, 0.5)",
        boxShadow: scrolling ? 1 : 0,
        transition: "all 0.8s ease-in-out",
        padding: "0.5rem 2rem",
        // position: "relative", // Needed for absolute positioning of the triangle
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          width: 0,
          height: 0,
          borderTop: "80px solid #cf2030", // Red color triangle
          borderLeft: "70px solid transparent",
          zIndex: 10,
        },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo + Name + Menu (Aligned Left) */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <img
            src={logo}
            alt="Company Logo"
            style={{ height: 50, marginRight: 10 }}
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily:'Geo',
              fontWeight:800,
              fontStyle:'italic',
              color:scrolling ? theme.palette.text.primary : theme.palette.error.dark,
              marginRight: 4,
              fontSize: { xs: 12, lg: 19, md: 16 },
            }}
          >
            Alpha Construction
          </Typography>
          </Box>
          {/* Desktop Menu (Right after Logo & Name) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {menuItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: theme.palette.text.primary,
                  fontSize: { lg: "1rem", md: "0.7rem", xs: "0.5rem" },
                  fontWeight: 400,
                  fontFamily:'Big Shoulders',
                  position: "relative",
                  "&:hover": {
                    // color: theme.palette.primary.main,
                    color:'crimson',
                    fontWeight:600
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "3px",
                    bottom: "-5px",
                    left: 0,
                    backgroundColor: '#cf2030',
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.3s ease-in-out",
                  },
                  "&:hover::after": {
                    transform: "scaleX(1)",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>


        {/* Dark Mode Toggle + Mobile Menu */}
        <Box sx={{ display: "flex", alignItems: "center" ,paddingLeft:10}}>
          {/* <IconButton color="inherit"> */}
            <ModeSwitch />
            {/* {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />} */}
          {/* </IconButton> */}

          {/* Hamburger Menu Button (Mobile) */}
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250, textAlign: "center" }}>
          {menuItems.map((item) => (
            <ListItem button key={item} onClick={handleDrawerToggle}>
              <ListItemText
                primary={item}
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  textAlign: "center",
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
