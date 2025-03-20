import { Box, Divider, Grid, Typography, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { CustomButton } from "../../../Themes/CustomComp/CustomLibrary";
import { ThemeModeContext } from "../../../Themes/ThemeProvider";
const Review = () => {
  const theme = useTheme();
  const { mode } = useContext(ThemeModeContext);
  return (
    <Box
      sx={{
        width: "100%",
        borderTop: mode ? " none" : "1px solid #212121",
        paddingTop: 5,
        backgroundColor: mode
          ? theme.palette.grey[200] // Light mode color
          : theme.palette.grey[900],
          paddingBottom:5
      }}
    >
      <Grid container spacing={5}>
        <Grid item xs={12} md={7}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
            style={{}}
          >
            <img
              src='https://ik.imagekit.io/p66ljstle/Construction%20Assets/bought.jpg?updatedAt=1742477159636'
              alt="Bought Item"
              style={{ width: "100%", height: "500PX", objectFit: "cover" }} // Restrict width
            />
          </motion.div>
        </Grid>
        <Grid item xs={12} md={3} sx={{ marginTop: 5 }}>
          <Typography variant="h2" sx={{ paddingBottom: 1 }}>
            NATIONAL MANUFACTURING SOLUTIONS
          </Typography>
          <motion.div
            initial={{ width: 0 }} // Starts at 0 width
            whileInView={{ width: "35%" }} // Expands on scroll
            transition={{ duration: 1, ease: "easeOut" }} // Smooth animation
            style={{ backgroundColor: "#cf2030", height: 4, marginBottom: 10 }} // Red color divider
          >
            <Divider
              sx={{
                backgroundColor: "transparent",
                height: 4,
                width: "fit-content",
              }}
            />
          </motion.div>

          <Typography sx={{ marginTop: 3 }}>
            National Manufacturing Solutions Alpha also delivers tailored
            manufacturing solutions from coast to coast. We offer specialized
            manufacturing expertise, ensuring that our services meet the unique
            needs of our clients. Our core markets include food and beverage,
            life sciences and industrial. We provide full turnkey installations
            across the nation and all the solutions in between for the
            manufacturing design and construction of your facility.
          </Typography>
          <CustomButton sx={{ marginTop: 4,color:mode ? 'white' : '' }}>
            MORE ABOUT MANUFACTURING
          </CustomButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Review;
