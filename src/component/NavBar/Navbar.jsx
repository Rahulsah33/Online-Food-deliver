import React from "react";
import { Badge, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { pink } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="px-5 z-50 py-[0.8rem] bg-[#e91e63] lg:px-20 flex justify-between items-center">
      {/* Logo Section */}
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li className="logo font-semibold text-gray-300 text-2xl list-none">
          R.R Food
        </li>
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-5 lg:space-x-10">
        <IconButton>
          <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
        </IconButton>

        {/* Avatar profile type */}
        <div>
          <Avatar sx={{ bgcolor: "white", color: pink.A400 }}>R</Avatar>
        </div>

        {/* Shopping Cart Icons */}
        <div className="">
          <IconButton>
            <Badge color="secondary" badgeContent={3}>
              <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </div>
  );
};
