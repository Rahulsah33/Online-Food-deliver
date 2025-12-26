import React from "react";
import { Card, Button } from "@mui/material";

const OrderCard = () => {
  return (
    <Card className="flex justify-between items-center p-5">
      <div className="flex items-center space-x-5">
        <img
          className="h-16 w-16"
          src="https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg"
          alt=""
        />

        <div>
          <p>Food Name</p>
          <p>$299</p>
        </div>
      </div>

      <div>
        <Button className="cursor-not-allowed">completed</Button>
      </div>
    </Card>
  );
};

export default OrderCard;
