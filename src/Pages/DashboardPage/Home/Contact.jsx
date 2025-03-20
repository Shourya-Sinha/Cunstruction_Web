import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { AppContainer } from "../../../Themes/CustomComp/CustomLibrary";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <Box
      sx={{
        marginTop: 10,
        position: "relative",
        width: "100%",
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url("https://ik.imagekit.io/p66ljstle/Construction%20Assets/contact.jpg?updatedAt=1742477168661")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
          zIndex: 1, // Puts it behind the content
          overflow: "hidden",
          "::before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            background: "rgba(0, 0, 0, 0.5)", // Dark overlay
            backdropFilter: "blur(3px)", // Blur effect
            zIndex: -1, // Keeps the text on top
          },
        }}
      />

      {/* Over Image Content */}
      <AppContainer
        sx={{
          zIndex: 2,
          paddingTop: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={5}>
          {/* ✅ LEFT SIDE: CONTACT BUTTON & FORM */}
          <Grid item xs={12} md={6}>
            <Box>
              {!showForm ? (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{display: "flex", flexDirection: "row",alignItems:'center'}}
                >
                  <Button
                    variant="contained"
                    sx={{
                      background: "#fff",
                      color: "#cf2030",
                      fontWeight: "bold",
                      borderTopLeftRadius:10,
                      borderBottomLeftRadius:10,
                      padding: "12px",
                      textTransform: "uppercase",
                      fontSize: "1rem",
                      transition: "0.3s",
                      "&:hover": { background: "#cf2030", color: "#fff" },
                    }}
                    onClick={() => setShowForm(true)}
                  >
                    Subscribe Us
                  </Button>
                  <Box sx={{backgroundColor:'#cf2030',color:'#fff',padding:'13px',borderTopRightRadius:10,borderBottomRightRadius:10}}>
                    <Typography>Do not getting you spam email? and don't hesitate to contact us</Typography>
                  </Box>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ width: "100%", maxWidth: "400px" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                      padding: 3,
                      borderRadius: 3,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <TextField
                      fullWidth
                      label="Your Name"
                      variant="outlined"
                      InputLabelProps={{ sx: { color: "#fff" } }}
                    />
                    <TextField
                      fullWidth
                      label="Your Email"
                      variant="outlined"
                      InputLabelProps={{ sx: { color: "#fff" } }}
                    />
                    <TextField
                      fullWidth
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                      InputLabelProps={{ sx: { color: "#fff" } }}
                    />

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap:5
                      }}
                    >
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{
                          background: "#fff",
                          color: "#cf2030",
                          fontWeight: "bold",
                          borderRadius: 5,
                          padding: "12px",
                          textTransform: "uppercase",
                          fontSize: "1.1rem",
                          transition: "0.3s",
                          "&:hover": { background: "#cf2030", color: "#fff" },
                        }}
                      >
                        Send Message
                      </Button>
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{
                          background: "#fff",
                          color: "#cf2030",
                          fontWeight: "bold",
                          borderRadius: 5,
                          padding: "12px",
                          textTransform: "uppercase",
                          fontSize: "1.1rem",
                          transition: "0.3s",
                          "&:hover": { background: "#cf2030", color: "#fff" },
                        }}
                        onClick={() => setShowForm(false)}
                      >
                        Cancel
                      </Button>
                    </motion.div>
                  </Box>
                </motion.div>
              )}
            </Box>
          </Grid>

          {/* ✅ RIGHT SIDE: COMPANY INFO */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h1" sx={{ fontWeight: "bold", mb: 2,color:'#fff' }}>
                Contact us 24/7
              </Typography>
              <Typography
                sx={{ opacity: 0.8, fontSize: "1.1rem", color: "#fff", mb: 2 }}
              >
                We are dedicated to providing the best services and solutions.
                Our team is here to help you with any inquiries. Whether you
                have questions about our products, need assistance, or want to
                explore new opportunities, we are here to assist you every step
                of the way.
              </Typography>
              <Typography
                sx={{ opacity: 0.8, fontSize: "1.1rem", color: "#fff", mb: 2 }}
              >
                <strong>Contact us today</strong> to learn more about our
                offerings and how we can assist you. Your satisfaction is our
                top priority, and we're ready to answer your questions, provide
                expert advice, and help you make informed decisions.
              </Typography>
              <Typography
                sx={{ opacity: 0.8, fontSize: "1.1rem", color: "#fff", mb: 2 }}
              >
                Don’t wait! Get in touch with us today and experience the
                difference. Our team is eager to hear from you and ensure that
                your needs are met promptly.
              </Typography>
              <Typography
                sx={{ opacity: 0.8, fontSize: "1.1rem", color: "#fff" }}
              >
                <strong>We look forward to hearing from you!</strong> Whether
                you're an existing customer or considering our services, we
                guarantee that your questions will be answered quickly,
                professionally, and with the utmost care.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </AppContainer>
    </Box>
  );
};

export default Contact;
