import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import logo from "../assets/load.svg"; // Import your SVG logo

const LoadingScreen = () => {
  const [loading, setLoading] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading((prev) => (prev < 100 ? prev + 1 : 100));
    }, 30); // Adjust speed as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Large Faded Logo in Background */}
      <Box
        component="img"
        src={logo}
        sx={{
          position: "absolute",
          width: `${200 - loading}%`, // Starts full screen and shrinks
          opacity: 0.1, // Faded background effect
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          transition: "all 0.3s ease",
        }}
      />

      {/* Shrinking Logo Above Company Name */}
      {/* <Box
        component="img"
        src={logo}
        sx={{
          width: `${50 - loading * 0.4}%`, // Shrinks gradually
          maxWidth: "80px", // Final small size
          transition: "all 0.3s ease",
          position: "relative",
          top: `${-10 + loading * 0.1}px`, // Moves up
          filter: loading === 100 ? "invert(19%) sepia(95%) saturate(7481%) hue-rotate(353deg) brightness(94%) contrast(116%)" : "none", // Turns red at 100%
        }}
      /> */}

      {/* Company Name */}
      <Typography variant="h3" fontWeight="bold" color="black" mt={2}>
        ALPHA CONSTRUCTION
      </Typography>

      {/* Slogan */}
      <Typography variant="body1" fontWeight={500} color="gray" mt={1}>
        Building Dreams, Strengthening Futures.
      </Typography>

      {/* Loading Number */}
      <Box sx={{ position: "absolute", bottom: 20 }}>
        <Typography variant="h4" fontWeight="bold" color="gray">
          {loading}%
        </Typography>

        {/* Bottom Message */}
        <Typography variant="body2" color="gray" fontWeight="bold">
          QUALITY IS OUR STANDARD
        </Typography>
      </Box>
    </Box>
  );
};

export default LoadingScreen;
