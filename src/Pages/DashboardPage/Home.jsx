import React from "react";
import LandPage from "./Home/LandPage";
import Services from "./Home/Services";
import Review from "./Home/Review";
import Contact from "./Home/Contact";
import { Box } from "@mui/material";
import AboutUs from "./Home/AboutUs";
import Approach from "./Home/Approach";
import Build from "./Home/Build";
import WhyChoose from "./Home/WhyChoose";

const Home = () => {
  return (
    <Box>
      <LandPage />
      <AboutUs />
      <Services />
      <Approach />
      <Build />
      <Review />
      <WhyChoose />
      <Contact />
    </Box>
  );
};

export default Home;
