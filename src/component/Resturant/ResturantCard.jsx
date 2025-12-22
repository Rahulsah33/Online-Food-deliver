import { Card, Chip } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";

const ResturantCard = () => {
  return (
    <Card className=" w-[18rem]">
      <div
        className={`${true ? "cursor-pointer" : "cursor-not-allowed"} relative`}
      >
        <img
          className="w-full h-[10rem] rounded-t-md object-cover"
          src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
          alt=""
        />

        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={true ? "success" : "error"}
          label={true ? "open" : "closed"}
        />
      </div>

      <div className="p-4 textPart lg:flex w-full justify-between">
        <div className="space-y-1">
          <p className="font-semibold text-lg">Indian Fast Food</p>
          <p className="text-grey-500 text-sm">
            Craving it all ? Drive into our global fla..
          </p>
        </div>

        <div>
          <IconButton>
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default ResturantCard;
