import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { topMeels } from "./topMeals";
import FoodSlider from "./FoodSlider";

const MultiFoodslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {topMeels.map((item) => (
          <FoodSlider image={item.image} title={item.title} />
        ))}
      </Slider>
    </div>
  );
};

export default MultiFoodslider;
