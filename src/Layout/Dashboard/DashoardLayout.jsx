import { Box } from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import FooterSec from "../../Components/Footer/FooterSec";

const DashoardLayout = () => {
  const isLoggedin = true; // Replace this with actual authentication logic

  if (!isLoggedin) {
    return <Navigate to="/auth/login" replace />;
  }
  return (
    <Box sx={{width:'100%',height:'100%'}}>
      <Header />
      <Box
        sx={{
          width: "100%",
          // pt: "calc(var(--template-frame-height, 0px) + 1rem)",
          height: "100%",
        }}
      >
        <Outlet />
      </Box>
      <Footer />
      <FooterSec />
    </Box>
  );
};

export default DashoardLayout;
