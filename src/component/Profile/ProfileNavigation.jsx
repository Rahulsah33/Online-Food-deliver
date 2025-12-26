import React from "react";
import { Divider, useMediaQuery } from "@mui/material";
import {
  ShoppingBag,
  Favorite,
  Home,
  Event,
  Logout,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Drawer } from "@mui/material";

const menu = [
  { title: "Orders", icon: <ShoppingBag />, path: "orders" },
  { title: "Favorites", icon: <Favorite />, path: "favorites" },
  { title: "Address", icon: <Home />, path: "address" },
  { title: "Payments", icon: <AccountBalanceIcon />, path: "payment" },
  {
    title: "Notification",
    icon: <NotificationsActiveIcon />,
    path: "notification",
  },
  { title: "Events", icon: <Event />, path: "events" },
  { title: "Logout", icon: <Logout />, path: "logout" },
];

const ProfileNavigation = ({ open, handleClose }) => {
  const isSmallScreen = useMediaQuery("(max-width: 10880)");

  const navigate = useNavigate();

  const handleNavigate = (item) => {
    navigate(`/my-profile/${item.path}`);
  };

  return (
    <div>
      <Drawer
        variant={isSmallScreen ? "temporary" : "permanent"}
        onClose={handleClose}
        open={isSmallScreen ? open : true}
        anchor="left"
        sx={{ zIndex: 1, position: "sticky" }}
      >
        <div
          className="w-[50vw] 
         lg:w-[20vw] 
          h-[100vh] 
          flex flex-col
          justify-center
          text-xl
          gap-8
          pt-16"
        >
          {menu.map((item, i) => (
            <>
              <div
                onClick={() => handleNavigate(item)}
                className="
              px-5 flex
              items-center
              space-x-5
              cursor-pointer "
              >
                {item.icon}
                <span>{item.title}</span>
              </div>

              {i !== menu.length - 1 && <Divider />}
            </>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default ProfileNavigation;
