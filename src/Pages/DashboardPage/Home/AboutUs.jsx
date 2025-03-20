import React, { useContext, useRef } from "react";
import { AppContainer } from "../../../Themes/CustomComp/CustomLibrary";
import { Box, Typography, Paper, Divider, useTheme } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { ThemeModeContext } from "../../../Themes/ThemeProvider";

const AboutUs = () => {
    const theme = useTheme();
  const { mode } = useContext(ThemeModeContext);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <Box sx={{ width: "100%", paddingTop: 5, position: "relative", height: "800px",overflow:'hidden' }} ref={sectionRef}>
      {/* First Box - Text Content */}
      <Box sx={{ height: "320px", position: "relative", zIndex: 2 }}>
        <AppContainer>
          {/* Subtitle Animation (Fades In) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography variant="subtitle2" sx={{fontSize:'1.3rem'}}>A Premier Construction Firm</Typography>
          </motion.div>

          {/* Main Heading Animation (Grows Up) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Roboto",
                fontWeight: 800,
                width: "50%",
                textWrap: "wrap",
              }}
            >
              Alpha Construction has a people-first way of doing business
            </Typography>
          </motion.div>
        </AppContainer>
      </Box>

      {/* Second Box - Background and Image */}
      <Box
        sx={{
          height: "480px",
          backgroundColor: mode ? '#414042' : "#f5f5f5",
          position: "relative",
          zIndex: 1,
        }}
      >
        <AppContainer>
          {/* Image Positioned in the Middle (Slide from Left) */}
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={isInView ? { x: "0%", opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Box
              sx={{
                height: "460px",
                width: "50%",
                position: "absolute",
                top: "-200px", // Moves the image up into the first section
                left: "39%",
                transform: "translateX(-50%)",
                zIndex: 1,
              }}
            >
              <img
                src="https://ik.imagekit.io/p66ljstle/Construction%20Assets/about.jpg?updatedAt=1742477157238"
                alt="About Image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </motion.div>

          {/* Paper Box (Comes from Right) */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={isInView ? { x: "0%", opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <Paper
              sx={{
                padding: 5,
                width: "35%",
                position: "relative", // Ensures it stays above the image
                top:30,
                zIndex: 2, // Higher than the image
                marginTop: "100px", // Adjusts position above the image
                marginLeft: "75%",
                transform: "translateX(-50%)",
                backgroundColor: mode ? theme.palette.background.default : theme.palette.background.paper,
                boxShadow: 3, // Adds subtle shadow for better visibility
                // marginTop:5
              }}
            >
              <Typography variant="h4">ABOUT US</Typography>
              <Divider sx={{ color: "red", marginY: 1 }} />
              <Typography variant="body2" color={mode ? theme.palette.text.secondary : theme.palette.text.primary} sx={{fontFamily:'Geo',fontWeight:400,fontStyle:'inherit'}}>
                We bring a high level of involvement, engaged communication, and an
                innovative, problem-solving approach focused on building lasting
                client partnerships.
              </Typography>
            </Paper>
          </motion.div>
        </AppContainer>
      </Box>
    </Box>
  );
};

export default AboutUs;
