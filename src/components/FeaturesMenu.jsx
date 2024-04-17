import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ExpandMore } from "@mui/icons-material";
import todoIcn from "../images/icon-todo.svg";
import calendarIcn from "../images/icon-calendar.svg";
import reminderIcn from "../images/icon-reminders.svg";
import planningIcn from "../images/icon-planning.svg";

export default function FeaturesMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        endIcon={
          <ExpandMore
            sx={{
              transition: "transform 0.3s",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        }
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
        Features
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiMenu-paper": {
            bgcolor: "hsl(0, 0%, 100%)",
            borderRadius: "0.5rem",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        {[
          { name: "Todo List", icon: todoIcn },
          { name: "Calendar", icon: calendarIcn },
          { name: "Reminders", icon: reminderIcn },
          { name: "Planning", icon: planningIcn },
        ].map((item, index) => (
          <MenuItem onClick={handleClose} key={index}>
            <Button
              startIcon={
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  style={{ width: 10, height: 10 }}
                />
              }
              sx={{
                textTransform: "capitalize",
                color: "hsl(0, 0%, 41%)",
                height: 20,
                width: "100%",
                fontSize: "0.8rem",
                fontWeight: 400,
                justifyContent: "flex-start",

                "&:hover": {
                  bgcolor: "transparent",
                  color: "hsl(0, 0%, 8%)",
                },
              }}
            >
              {item.name}
            </Button>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
