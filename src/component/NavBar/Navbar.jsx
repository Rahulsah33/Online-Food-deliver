import React from "react";
import { Badge, Box, IconButton, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { pink } from "@mui/material/colors";
import "./Navbar.css";
import { Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box className="px-5 z-50 sticky top-0 py-3 bg-[#e91e63] lg:px-20 flex justify-between items-center">
      {/* Logo */}
      <div className="cursor-pointer font-semibold text-gray-200 text-2xl">
        R.R Food
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-5 lg:space-x-10">
        <IconButton>
          <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
        </IconButton>

        {false ? (
          <Avatar sx={{ bgcolor: "white", color: pink.A400 }}>R</Avatar>
        ) : (
          <IconButton onClick={() => navigate("/account/login")}>
            <Person />
          </IconButton>
        )}

        <IconButton>
          <Badge badgeContent={3} color="secondary">
            <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "white" }} />
          </Badge>
        </IconButton>
      </div>
    </Box>
  );
};
