import React from "react";
import { Button, Container } from "@mui/material";
import { motion } from "framer-motion";
const AppContainer = ({ children, sx = {}, ...props }) => {
  return (
    <Container
      maxWidth="lg"
      disableGutters
      sx={{
        paddingLeft: "0px !important",
        paddingRight: "0px !important",
        height: "100%",
        ...sx, // Allow additional styles to be passed
      }}
      {...props} // Pass any other props
    >
      {children}
    </Container>
  );
};

// Function to apply styles to each letter
const stylizeTitle = (title) => {
  return (
    <span
      style={{
        display: "inline-block",
        whiteSpace: "nowrap", // Prevents line breaks
      }}
    >
      {title.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: "inline-block" }}>
          {word.split("").map((char, index) => {
            // Calculate glow intensity: Strong for the first letter, fading out
            const glowStrength = Math.max(10 - index * 2, 0); // Decrease glow gradually

            return (
              <span
                key={index}
                style={{
                  display: "inline-block",
                  fontWeight: 800,
                  fontSize: "4rem",
                  fontFamily: "Big Shoulders",
                  lineHeight: 1,
                  height: "1.4rem",
                  marginRight: "5px",
                  position: "relative",
                  width: "fit-content",
                  color: index === 0 ? "#fff" : "#fff",
                  textShadow:
                    glowStrength > 0
                      ? `0 0 ${glowStrength}px #ff4d5a, 0 0 ${
                          glowStrength + 2
                        }px #ff4d5a, 0 0 ${glowStrength + 4}px #ff7b82`
                      : "none", // Reduce glow gradually
                }}
              >
                {char}
              </span>
            );
          })}
          {/* Add a space after each word */}
          {wordIndex < title.split(" ").length - 1 && (
            <span style={{ display: "inline-block", width: "12px" }}></span>
          )}
        </span>
      ))}
    </span>
  );
};

const CustomButton = ({ children, sx = {}, ...props }) => {
  return (
    <motion.div
      initial={{ scale: 0.5 }} // Start with a smaller scale
      whileInView={{ scale: 1 }} // Scale up to original size
      transition={{
        duration: 1, // Duration for smooth scaling
        ease: "easeOut", // Ease out for smooth effect
      }}
      style={{ display: "inline-block" }} // Ensure button stays inline
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#cf2030",
          paddingY: 2,
          paddingX: 5,
          fontWeight: 600,
          color: props.mode ? "#fff" : "inherit",
          letterSpacing: 1,
          borderRadius: 0.5,
          "&:hover": {
            backgroundColor: "transparent",
            border: "2px solid #cf2030",
            color: "#cf2030",
          },
          ...sx, // Merges custom styles
        }}
        {...props} // Passes other props (like onClick, disabled, etc.)
      >
        {children}
      </Button>
    </motion.div>
  );
};

export { AppContainer, stylizeTitle, CustomButton };
