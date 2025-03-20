import React from "react";
import { AppContainer } from "../../../Themes/CustomComp/CustomLibrary";
import { Box, Divider, Link, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const WhyChoose = () => {
  const slideFromLeft = {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 1, ease: "easeInOut" },
  };
  return (
    <AppContainer sx={{ paddingY: 10 }}>
      <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
        {/* Left Box (Paper Text) */}
        <Box
          sx={{
            width: "35%", // Adjust width as needed
            zIndex: 1,
          }}
        >
          <motion.div
            initial="initial"
            whileInView="whileInView"
            transition={{ duration: 1, ease: "easeOut" }}
            variants={slideFromLeft}
          >
            <Paper
              elevation={1}
              sx={{
                padding: 3,
                position: "relative",
                left: "calc(32%)",
                bottom: -150,
              }}
            >
              <Box sx={{ width: "100%", paddingBottom: 4 }}>
                {/* Adjust left for overlap */}
                <Typography variant="h1" gutterBottom>
                  WHY CHOOSE ALPHA?
                </Typography>
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
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: "0.8rem",
                  paddingBottom: 1,
                  lineHeight: 1.5,
                }}
              >
                Headquartered in MUMBAI City, Alpha strives to be more than a
                construction company; we aim to be thought leaders in our
                industry who understand the value in good relationships. We look
                at every project that comes through our company through a
                customer-centric, future-focused lens.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: "0.8rem",
                  paddingBottom: 1,
                  lineHeight: 1.5,
                }}
              >
                Through our processes and philosophies, our team consistently
                produces results that are on time, within budget and that exceed
                expectations.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: "0.8rem",
                  paddingBottom: 1,
                  lineHeight: 1.5,
                }}
              >
                <Link href="#">Sign up for our newsletter</Link> to hear the
                latest insights, tips, and project case studies from our
                construction experts.
              </Typography>
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={1}
                sx={{ width: "100%" }}
              >
                <motion.div
                  initial={{ width: 0 }} // Starts at 0 width
                  whileInView={{ width: "25%" }} // Expands on scroll
                  transition={{ duration: 1, ease: "easeOut" }} // Smooth animation
                  style={{ backgroundColor: "#cf2030", height: 2 }} // Red color divider
                >
                  <Divider
                    sx={{
                      backgroundColor: "transparent",
                      height: 2,
                      width: "fit-content",
                    }}
                  />
                </motion.div>
                <Typography variant="body2">
                  SIGN UP FOR OUR NEWSLETTER
                </Typography>
              </Stack>
            </Paper>
          </motion.div>
        </Box>

        {/* Right Box (Image Box) */}
        <Box
          sx={{
            width: "80%",
            position: "relative",
            marginLeft: "auto", // Push to the right
            overflow: "hidden", // To contain the image
          }}
        >
          <img
            src='https://ik.imagekit.io/p66ljstle/Construction%20Assets/why.jpg?updatedAt=1742477160155'
            alt="Why Choose Us Image"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              objectPosition: "center",
              display: "block", // Prevent extra space below image
            }}
          />
        </Box>
      </Box>
    </AppContainer>
  );
};

export default WhyChoose;
