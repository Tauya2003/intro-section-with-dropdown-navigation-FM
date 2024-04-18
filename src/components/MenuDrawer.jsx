import Box from "@mui/material/Box";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Collapse, Icon, IconButton, Stack } from "@mui/material";
import menuIcn from "../images/icon-menu.svg";
import closeIcn from "../images/icon-close-menu.svg";
import { ExpandMore } from "@mui/icons-material";
import todoIcn from "../images/icon-todo.svg";
import calendarIcn from "../images/icon-calendar.svg";
import reminderIcn from "../images/icon-reminders.svg";
import planningIcn from "../images/icon-planning.svg";

export default function MenuDrawer() {
  const [open, setOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <Box sx={{ p: 2, display: "flex", justifyContent: "end" }}>
        <IconButton onClick={toggleDrawer(false)}>
          <img src={closeIcn} alt="close menu" />
        </IconButton>
      </Box>

      <Stack
        sx={{
          px: 2,
        }}
      >
        <Button
          onClick={() => {
            setFeaturesOpen(!featuresOpen);
            setCompanyOpen(false);
          }}
          endIcon={
            <ExpandMore
              sx={{
                transition: "transform 0.3s",
                transform: featuresOpen ? "rotate(180deg)" : "",
              }}
            />
          }
          sx={{
            justifyContent: "flex-start",
            textTransform: "capitalize",
            color: "hsl(0, 0%, 41%)",
            fontSize: "1.1rem",
          }}
        >
          Features
        </Button>

        <Collapse in={featuresOpen}>
          <Stack pl={3}>
            {[
              { name: "Todo List", icon: todoIcn },
              { name: "Calendar", icon: calendarIcn },
              { name: "Reminders", icon: reminderIcn },
              { name: "Planning", icon: planningIcn },
            ].map((item, index) => (
              <Button
                key={index}
                startIcon={
                  <img
                    src={item.icon}
                    alt={`${item.name} icon`}
                    style={{ width: 20, height: 20 }}
                  />
                }
                sx={{
                  textTransform: "capitalize",
                  color: "hsl(0, 0%, 41%)",
                  // height: 20,
                  width: "100%",
                  fontSize: "1rem",
                  justifyContent: "flex-start",

                  "&:hover": {
                    bgcolor: "transparent",
                    color: "hsl(0, 0%, 8%)",
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Stack>
        </Collapse>

        <Button
          onClick={() => {
            setCompanyOpen(!companyOpen);
            setFeaturesOpen(false);
          }}
          endIcon={
            <ExpandMore
              sx={{
                transition: "transform 0.3s",
                transform: companyOpen ? "rotate(180deg)" : "",
              }}
            />
          }
          sx={{
            justifyContent: "flex-start",
            textTransform: "capitalize",
            color: "hsl(0, 0%, 41%)",
            fontSize: "1.1rem",
          }}
        >
          Company
        </Button>

        <Collapse in={companyOpen}>
          <Stack pl={3}>
            {["History", "Our Team", "Blog"].map((item, index) => (
              <Button
                key={index}
                sx={{
                  textTransform: "capitalize",
                  color: "hsl(0, 0%, 41%)",
                  // height: 20,
                  width: "100%",
                  fontSize: "1rem",
                  justifyContent: "flex-start",

                  "&:hover": {
                    bgcolor: "transparent",
                    color: "hsl(0, 0%, 8%)",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Stack>
        </Collapse>

        <Button
          sx={{
            justifyContent: "flex-start",
            textTransform: "capitalize",
            color: "hsl(0, 0%, 41%)",
            fontSize: "1.1rem",
          }}
        >
          Careers
        </Button>

        <Button
          sx={{
            justifyContent: "flex-start",
            textTransform: "capitalize",
            color: "hsl(0, 0%, 41%)",
            fontSize: "1.1rem",
          }}
        >
          About
        </Button>
      </Stack>

      <Stack mt={2} gap={1} px={2}>
        <Button
          sx={{
            textTransform: "capitalize",
            color: "hsl(0, 0%, 41%)",
            borderRadius: 3,

            "&:hover": {
              bgcolor: "transparent",
            },
          }}
        >
          Login
        </Button>

        <Button
          sx={{
            color: "hsl(0, 0%, 41%)",
            textTransform: "capitalize",
            border: "1px solid hsl(0, 0%, 41%)",
            borderRadius: 3,

            "&:hover": {
              bgcolor: "transparent",
            },
          }}
        >
          Register
        </Button>
      </Stack>
    </Box>
  );

  return (
    <div>
      <IconButton sx={{ display: { md: "none" } }} onClick={toggleDrawer(true)}>
        <img
          src={menuIcn}
          alt="menu"
          style={{
            width: 30,
          }}
        />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
