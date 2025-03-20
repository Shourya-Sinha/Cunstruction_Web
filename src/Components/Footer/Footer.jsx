import React from "react";
import { AppContainer, CustomButton } from "../../Themes/CustomComp/CustomLibrary";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ContactData } from "../../Data/Data";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Footer = () => {
  return (
    <AppContainer sx={{ paddingY: 5 }}>
      <Grid container spacing={1}>
        {/* Right Side: Displaying Contact Data */}
        <Grid container item xs={12} md={9.5} spacing={1}>
          {/* First section takes 6 columns */}
          <Grid item xs={12} md={6}>
            <Box sx={{ width: "100%" }}>
              {ContactData[0] && (
                <Box key={ContactData[0].id} sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                    {ContactData[0].title}
                  </Typography>
                  <Grid container spacing={1}>
                    {/* First column with up to 7 items */}
                    <Grid item xs={12} md={6}>
                      <List>
                        {ContactData[0].child.slice(0, 7).map((item) => (
                          <ListItem
                            key={item.id}
                            sx={{ padding: "0px !important" }}
                          >
                            <ListItemIcon
                              sx={{ minWidth: 20, color: "inherit" }}
                            >
                              <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                              {/* Small bullet point */}
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                          </ListItem>
                        ))}
                      </List>
                    </Grid>

                    {/* Second column with remaining items */}
                    {ContactData[0].child.length > 7 && (
                      <Grid item xs={12} md={6}>
                        <List>
                          {ContactData[0].child.slice(7).map((item) => (
                            <ListItem
                              key={item.id}
                              sx={{ padding: "0px !important" }}
                            >
                              <ListItemIcon
                                sx={{ minWidth: 20, color: "inherit" }}
                              >
                                <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                                {/* Small bullet point */}
                              </ListItemIcon>
                              <ListItemText primary={item.title} />
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                    )}
                  </Grid>
                </Box>
              )}
            </Box>
          </Grid>

          {/* Second section takes 3 columns */}
          <Grid item xs={12} md={3}>
            <Box sx={{ width: "100%" }}>
              {ContactData[1] && (
                <Box key={ContactData[1].id} sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                    {ContactData[1].title}
                  </Typography>
                  <List>
                    {ContactData[1].child.map((item) => (
                      <ListItem
                        key={item.id}
                        sx={{ padding: "0px !important" }}
                      >
                        <ListItemIcon sx={{ minWidth: 20, color: "inherit" }}>
                          <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                          {/* Small bullet point */}
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}
            </Box>
          </Grid>

          {/* Third section takes 3 columns */}
          <Grid item xs={12} md={3}>
            <Box sx={{ width: "100%" }}>
              {ContactData[2] && (
                <Box key={ContactData[2].id} sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                    {ContactData[2].title}
                  </Typography>
                  <List>
                    {ContactData[2].child.map((item) => (
                      <ListItem
                        key={item.id}
                        sx={{ padding: "0px !important" }}
                      >
                        <ListItemIcon sx={{ minWidth: 20, color: "inherit" }}>
                          <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                          {/* Small bullet point */}
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>

        {/* Left Side: Form or other content */}
        <Grid item xs={12} md={2.5}>
          <Box sx={{width:'100%'}}>
             <Typography variant="subtitle2" sx={{fontWeight:600,fontFamily:'Roboto',marginBottom:2}}>Industry-Leading News</Typography>
            <Typography>Sign up for insights,the latest industry news, project and company updates</Typography>
            <Box sx={{width:'100%'}}>
              <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <Stack sx={{flexGrow:1}}>
                <TextField placeholder="First Name" />
                </Stack>
                <Stack sx={{flexGrow:1}}>
                <TextField placeholder="Last Name" />
                </Stack>
              </Stack>
              <Typography variant="caption">ORGANIZATION/COMPANY</Typography>
              <TextField placeholder="Company Name" sx={{marginBottom:1}} />
              <TextField placeholder="Email" />

              <CustomButton sx={{borderRadius:'none',marginTop:1}}>Sign Up</CustomButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </AppContainer>
  );
};

export default Footer;
