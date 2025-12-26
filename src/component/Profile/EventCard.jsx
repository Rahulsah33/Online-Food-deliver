import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

const EventCard = () => {
  return (
    <div>
      <Card sx={{ width: 340 }}>
        <CardMedia
          sx={{ height: 340 }}
          image="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg"
        />

        <CardContent>
          <Typography variant="h5">Indian Fast Food</Typography>

          <Typography variant="body2">20% off on your first order</Typography>

          <div className="py-2 space-y-2">
            <p>{"Dehradun"}</p>
            <p className="text-sm text-blue-500">December 12, 2025 12:00 Am</p>
            <p className="text-sm text-red-500">December 12, 2025 12:00 Am</p>
          </div>
        </CardContent>

        {false && (
          <CardActions>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default EventCard;
