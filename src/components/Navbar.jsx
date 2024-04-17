import { Box, Button, IconButton, Stack, Toolbar } from "@mui/material";
import React from "react";
import logo from "../images/logo.svg";
import { ExpandMore } from "@mui/icons-material";
import menuIcn from "../images/icon-menu.svg";
import CompanyMenu from "./CompanyMenu";
import FeaturesMenu from "./FeaturesMenu";

const Navbar = () => {
  return (
    <Box>
      <Toolbar>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Stack direction={"row"} gap={4} alignItems={"center"}>
            <Box sx={{ height: 20 }}>
              <img
                src={logo}
                alt="logo"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>

            <Stack
              direction={"row"}
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              <FeaturesMenu />

              <CompanyMenu />

              <Button
                sx={{
                  textTransform: "capitalize",
                  color: "hsl(0, 0%, 41%)",
                  fontSize: "0.8rem",

                  "&:hover": {
                    bgcolor: "transparent",
                    color: "hsl(0, 0%, 8%)",
                  },
                }}
              >
                Careers
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                  color: "hsl(0, 0%, 41%)",
                  fontSize: "0.8rem",

                  "&:hover": {
                    bgcolor: "transparent",
                    color: "hsl(0, 0%, 8%)",
                  },
                }}
              >
                About
              </Button>
            </Stack>
          </Stack>

          <Stack direction={"row"} gap={2}>
            <Stack
              direction={"row"}
              gap={3}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Button
                sx={{
                  textTransform: "capitalize",
                  color: "hsl(0, 0%, 41%)",
                  fontSize: "0.8rem",

                  "&:hover": {
                    bgcolor: "transparent",
                    color: "hsl(0, 0%, 8%)",
                  },
                }}
              >
                Login
              </Button>

              <Button
                sx={{
                  textTransform: "capitalize",
                  color: "hsl(0, 0%, 41%)",
                  fontSize: "0.8rem",
                  width: "90px",
                  border: "1px solid hsl(0, 0%, 41%)",
                  borderRadius: "10px",

                  "&:hover": {
                    bgcolor: "transparent",
                    color: "hsl(0, 0%, 8%)",
                    border: "1px solid hsl(0, 0%, 8%)",
                  },
                }}
              >
                Register
              </Button>
            </Stack>

            <IconButton sx={{ display: { md: "none" } }}>
              <img src={menuIcn} alt="menu" />
            </IconButton>
          </Stack>
        </Stack>
      </Toolbar>
    </Box>
  );
};

export default Navbar;
