import { Box, Divider, Grid, Typography, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { ThemeModeContext } from "../../../Themes/ThemeProvider";
import { motion } from "framer-motion";
import { AppContainer } from "../../../Themes/CustomComp/CustomLibrary";
import { ApproachData } from "../../../Data/Data";
const Approach = () => {
  const theme = useTheme();
  const { mode } = useContext(ThemeModeContext);
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: mode ? "#414042" : theme.palette.background.default,
        paddingY: 5,
      }}
    >
      <AppContainer>
        <Box sx={{ width: "100%", paddingBottom: 5 }}>
          {/* Title */}
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontFamily: "Big Shoulders",
            }}
          >
            Our project approach.
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
        <Grid container spacing={3}>
          {/* First Grid: Stage 1 & Stage 2 */}
          <Grid item xs={12} md={4}>
            {ApproachData.slice(0, 2).map((item) => (
              <Box key={item.id} sx={{ mb: 2 }}>
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontFamily: "Roboto",
                    color: mode ? "#eeeeee" : theme.palette.text.default,
                  }}
                >
                  {item.stage} {item.title} -
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontWeight: 600,
                    color: mode ? "#bdbdbd" : theme.palette.text.default,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Grid>

          {/* Second Grid: Stage 3 */}
          <Grid item xs={12} md={4}>
            <Typography
              sx={{
                fontWeight: 900,
                fontFamily: "Roboto",
                color: mode ? "#eeeeee" : theme.palette.text.default,
              }}
            >
              {ApproachData[2].stage} {ApproachData[2].title} -
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontWeight: 600,
                color: mode ? "#bdbdbd" : theme.palette.text.default,
              }}
            >
              {ApproachData[2].description}
            </Typography>
          </Grid>

          {/* Third Grid: Stage 4 */}
          <Grid item xs={12} md={4}>
            <Typography
              sx={{
                fontWeight: 900,
                fontFamily: "Roboto",
                color: mode ? "#eeeeee" : theme.palette.text.default,
              }}
            >
              {ApproachData[3].stage} {ApproachData[3].title} -
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontWeight: 600,
                color: mode ? "#bdbdbd" : theme.palette.text.default,
              }}
            >
              {ApproachData[3].description}
            </Typography>
          </Grid>
        </Grid>
      </AppContainer>
    </Box>
  );
};

export default Approach;
