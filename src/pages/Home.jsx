import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import mobileBg from "../images/image-hero-mobile.png";
import desktopBG from "../images/image-hero-desktop.png";
import audiophileImg from "../images/client-audiophile.svg";
import databizImg from "../images/client-databiz.svg";
import makerImg from "../images/client-maker.svg";
import meetImg from "../images/client-meet.svg";

const Home = () => {
  return (
    <Box>
      <Navbar />

      <Box
        sx={{
          // px: { md: s },
          pt: { md: 8 },
          display: "flex",
          justifyContent: { md: "space-evenly" },
          flexDirection: { xs: "column", md: "row-reverse" },
        }}
      >
        <Box
          sx={{
            display: { md: "none" },
            mb: 5,
          }}
        >
          <img src={mobileBg} alt="hero image" style={{ width: "100%" }} />
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            height: 500,
            width: 390,
          }}
        >
          <img src={desktopBG} alt="hero image" style={{ width: "100%" }} />
        </Box>

        <Stack sx={{ alignItems: { xs: "center", md: "start" }, gap: 2 }}>
          <Typography
            sx={{
              mt: { md: 8 },
              color: "hsl(0, 0%, 8%)",
              fontWeight: 700,
              textAlign: { xs: "center", md: "start" },
              fontSize: { xs: "2.4rem", md: "4.5rem" },
              width: { md: 420 },
              lineHeight: { md: 1 },
            }}
          >
            Make remote work
          </Typography>

          <Typography
            sx={{
              color: "hsl(0, 0%, 41%)",
              textAlign: { xs: "center", md: "start" },
              mx: { xs: 2.7, md: 0 },
              width: { md: 350 },
            }}
          >
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </Typography>

          <Button
            sx={{
              mt: 2,
              bgcolor: "hsl(0, 0%, 8%)",
              color: "hsl(0, 0%, 98%)",
              textTransform: "initial",
              border: "solid 1px hsl(0, 0%, 8%)",
              fontWeight: 700,
              px: 1.75,
              py: 1.5,
              borderRadius: 3.5,

              "&:hover": {
                bgcolor: "transparent",
                color: "hsl(0, 0%, 8%)",
              },
            }}
          >
            Learn more
          </Button>

          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={{ xs: "space-evenly", md: "space-between" }}
            mt={{ xs: 3, md: 10 }}
            sx={{ width: "100%" }}
          >
            <img src={databizImg} alt="databiz" style={{ width: "70px" }} />
            <img
              src={audiophileImg}
              alt="audiophile"
              style={{ width: "60px" }}
            />
            <img src={meetImg} alt="meet" style={{ width: "60px" }} />
            <img src={makerImg} alt="maker" style={{ width: "60px" }} />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
