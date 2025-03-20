import React from "react";
import { AppContainer } from "../../../Themes/CustomComp/CustomLibrary";
import { Box, Divider, Grid, Link, Typography } from "@mui/material";
import { Whatwedo } from "../../../Data/Data";
import { motion } from "framer-motion";

const Services = () => {
  // Animation variants for text sliding
  const slideFromLeft = {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 1.2, ease: "easeInOut" },
  };

  const slideFromRight = {
    initial: { x: 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 1.2, ease: "easeInOut" },
  };

  return (
    <AppContainer sx={{ paddingY: 5, paddingTop: 10 }}>
      <Box sx={{ width: 300, paddingBottom: 5 }}>
        {/* Title */}
        <Typography
          variant="h1"
          sx={{
            fontWeight: 800,
            fontFamily: "Big Shoulders",
            color: "inherit",
          }}
        >
          What We Do.
        </Typography>

        {/* Animated Divider */}
        <motion.div
          initial={{ width: 0 }} // Starts at 0 width
          whileInView={{ width: "70%" }} // Expands on scroll
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

      <Grid container spacing={2}>
        {Whatwedo.map((item, index) => (
          <Grid item xs={12} md={6} lg={4} key={item.id}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 400,
                fontSize: "1rem",
                color: "inherit",
                fontFamily: "Big Shoulders",
                paddingY: 1,
                "&:hover": { color: "#cf2030" },
              }}
            >
              {item.title}
              <motion.div
                initial={{ width: 0 }} // Starts at 0 width
                whileInView={{ width: "70%" }} // Expands on scroll
                transition={{ duration: 1, ease: "easeOut" }} // Smooth animation
                style={{ backgroundColor: "#cf2030", height: 1 }} // Red color divider
              >
                <Divider
                  sx={{
                    backgroundColor: "transparent",
                    height: 4,
                    width: "fit-content",
                  }}
                />
              </motion.div>
            </Typography>
            <motion.div
              initial="initial"
              whileInView="whileInView"
              transition={{ duration: 1, ease: "easeOut" }}
              variants={index % 2 === 0 ? slideFromLeft : slideFromRight}
            >
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "0.8em",
                  fontWeight: 400,
                }}
              >
                {item.description}
                <Link
                  href={item.link}
                  sx={{
                    "&:hover": { color: "#cf2030" },
                    color: "#bdbdbd",
                    textDecoration: "none",
                  }}
                >
                  {item.link}
                </Link>{" "}
              </Typography>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </AppContainer>
  );
};

export default Services;
