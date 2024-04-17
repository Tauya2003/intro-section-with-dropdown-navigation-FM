import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ExpandMore } from "@mui/icons-material";

export default function CompanyMenu() {
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
        endIcon={
          <ExpandMore
            sx={{
              transition: "transform 0.3s",
              transform: open ? "rotate(180deg)" : "",
            }}
          />
        }
        onClick={handleClick}
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
        Company
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
        {["History", "Our Team", "Blog"].map((item, index) => (
          <MenuItem onClick={handleClose} key={index}>
            <Button
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
              {item}
            </Button>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
