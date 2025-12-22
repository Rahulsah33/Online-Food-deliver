import React, { useState } from "react";
import {
  Grid,
  Divider,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuCard from "./MenuCard";

const menu = [1, 1, 1, 1];

const foodCategories = [
  "Pizza",
  "Biryani",
  "Burger",
  "Chicken",
  "Rice",
  "Momos",
];

const foodTypes = [
  { label: "All", value: "all" },
  { label: "Vegetarian Only", value: "vegetarian" },
  { label: "Non-Vegetarian", value: "non-veg" },
  { label: "Seasonal", value: "seasonal" },
];

const ResturantDetails = () => {
  const [foodType, setFoodType] = useState("all");
  const [foodCategory, setFoodCategory] = useState("");

  return (
    <div className="px-5 lg:px-20">
      {/* Breadcrumb */}
      <section>
        <h3 className="text-gray-500 py-2">Home / Nepal / Fast Food</h3>

        {/* Images */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img
              className="w-full h-[40vh] object-cover rounded-lg"
              src="https://images.pexels.com/photos/5779177/pexels-photo-5779177.jpeg"
              alt="Restaurant"
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <img
              className="w-full h-[40vh] object-cover rounded-lg"
              src="https://images.pexels.com/photos/12689167/pexels-photo-12689167.jpeg"
              alt="Food"
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <img
              className="w-full h-[40vh] object-cover rounded-lg"
              src="https://images.pexels.com/photos/13485217/pexels-photo-13485217.jpeg"
              alt="Dish"
            />
          </Grid>
        </Grid>

        {/* Restaurant Info */}
        <div className="pt-5 pb-5">
          <h1 className="text-4xl font-semibold">Birgunj Fast Food</h1>

          <p className="text-gray-500 mt-2">
            Our food is prepared under strict hygienic conditions using quality
            ingredients to deliver safe, healthy, and delicious meals.
          </p>

          <div className="space-y-3 mt-4">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon fontSize="small" />
              Birgunj, Bara, Nepal
            </p>

            <p className="text-gray-500 flex items-center gap-3">
              <CalendarTodayIcon fontSize="small" />
              Mon–Sun: 9:00 AM – 9:00 PM (Today)
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* Filter + Menu */}
      <section className="pt-[2rem] lg:flex relative">
        {/* Filters */}
        <div className="lg:w-[20%] space-y-10">
          {/* Food Type */}
          <div className="lg:sticky top-28">
            <Typography variant="h5" className="mb-3">
              Food Type
            </Typography>

            <FormControl>
              <RadioGroup
                value={foodType}
                onChange={(e) => setFoodType(e.target.value)}
              >
                {foodTypes.map((item) => (
                  <FormControlLabel
                    key={item.value}
                    value={item.value}
                    control={<Radio />}
                    label={item.label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>

          <Divider />

          {/* Food Category */}
          <div className="lg:sticky top-64">
            <Typography variant="h5" className="mb-3">
              Food Categories
            </Typography>

            <FormControl>
              <RadioGroup
                value={foodCategory}
                onChange={(e) => setFoodCategory(e.target.value)}
              >
                {foodCategories.map((item) => (
                  <FormControlLabel
                    key={item}
                    value={item}
                    control={<Radio />}
                    label={item}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        </div>

        {/* Menu */}
        <div className="space-y-5 lg:w-[80%] lg:pl-10">
          {menu.map((item) => (
            <MenuCard />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResturantDetails;
