import { Box, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ThemeModeContext } from "../../Themes/ThemeProvider";
import { AppContainer } from "../../Themes/CustomComp/CustomLibrary";

const FooterSec = () => {
  const { mode } = useContext(ThemeModeContext);
  return (
    <Box sx={{ backgroundColor: mode ? "#414042" : "", paddingY: 1 }}>
      <AppContainer>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box>
            {" "}
            <Typography color="#9e9e9e">
              © {new Date().getFullYear()} Alpha Construction
            </Typography>{" "}
          </Box>

          <Box>
            {" "}
            <Typography color="#9e9e9e" variant="caption">
              Web Design in Thailand City by QuickSolve
            </Typography>{" "}
          </Box>
        </Box>
      </AppContainer>
    </Box>
  );
};

export default FooterSec;
