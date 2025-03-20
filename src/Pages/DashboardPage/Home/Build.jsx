import React, { useContext } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { ThemeModeContext } from "../../../Themes/ThemeProvider";
import { color, motion } from "framer-motion";
import {
  AppContainer,
  CustomButton,
} from "../../../Themes/CustomComp/CustomLibrary";
import { BuildData } from "../../../Data/Data";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const Build = () => {
  const theme = useTheme();
  const { mode } = useContext(ThemeModeContext);
  return (
    <Box sx={{ width: "100%" }}>
      <AppContainer sx={{ paddingY: 5 }}>
        {/* Header Text */}
        <Box sx={{ width: "100%", paddingBottom: 5 }}>
          {/* Title */}
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontFamily: "Big Shoulders",
              paddingBottom: 3,
            }}
          >
            What we build.
          </Typography>

          <Typography sx={{ paddingBottom: 1 }}>
            We have extensive experience managing and building for Variety of{" "}
            <Link>markets.</Link>Those include:
          </Typography>

          {/* Animated Divider */}
          <motion.div
            initial={{ width: 0 }} // Starts at 0 width
            whileInView={{ width: "35%" }} // Expands on scroll
            transition={{ duration: 1, ease: "easeOut" }} // Smooth animation
            style={{ backgroundColor: "#cf2030", height: 4 }} // Red color divider
          >
            <Divider
              sx={{
                backgroundColor: "transparent",
                height: 4,
                width: "fit-content",
              }}
            />
          </motion.div>
        </Box>
        <Grid container spacing={0}>
          {BuildData.map((item) => (
            <Grid item xs={12} md={6} key={item.id} sx={{ paddingTop: 0 }}>
              <List dense disablePadding>
                <motion.div
                  initial={{ opacity: 0, y: 20 }} // Initial state (invisible and slightly down)
                  whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
                  transition={{
                    delay: item.id * 0.1, // Delay each item slightly to animate one by one
                    duration: 0.8, // Adjust duration for smooth animation
                    ease: "easeOut",
                  }}
                >
                  <ListItem disableGutters sx={{ mb: 0 }}>
                    {/* Removes extra space */}
                    <ListItemIcon sx={{ minWidth: 20, color: "inherit" }}>
                      <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                      {/* Small bullet point */}
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItem>
                </motion.div>
              </List>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ paddingTop: 4, marginLeft: 5 }}>
            <CustomButton sx={{color:mode ? 'white' : ''}}>View Our Recent Projects</CustomButton>
        </Box>
      </AppContainer>
    </Box>
  );
};

export default Build;
